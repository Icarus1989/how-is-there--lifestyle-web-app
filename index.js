const express = require('express');
const fs = require('fs');
const fetch = require('cross-fetch');
const {
  default: axios
} = require('axios');
require('dotenv').config();

const Datastore = require('nedb');
const cannyEdgeDetector = require('canny-edge-detector');
const ImageCanny = require('image-js').Image;

const app = express();
const port = process.env.PORT || 3001;

const database = new Datastore('citiesDatabase.db');
database.loadDatabase();

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});

app.use(express.static('public'));
app.use(express.json({
  limit: '10mb',
}));


app.get('/bkgImage/:cityname', async (request, response) => {
  const cityName = request.params.cityname;
  let fileUrl;

  try {
    const Pixabay_Api_Key = process.env.PIXABAY_API_KEY;
    const urlPixabay = `https://pixabay.com/api/?key=${Pixabay_Api_Key}&q=${cityName}&category=places&image_type=photo`;
    const dataPixabay = await axios.get(urlPixabay);
    const jsonPixabay = await dataPixabay["data"];
    fileUrl = await jsonPixabay["hits"][0]["largeImageURL"];
    response.json(jsonPixabay);
  } catch {

    const urlTeleport = `https://api.teleport.org/api/urban_areas/slug:${(cityName).toLowerCase()}/images/`;
    const dataTeleport = await axios.get(urlTeleport);
    const jsonTeleport = await dataTeleport["data"];
    fileUrl = await jsonTeleport["photos"][0]["image"]["web"];
    response.json(jsonTeleport);
  }

  downloadAndCannyEdge(fileUrl);

});


app.post('/queryDb', (request, response) => {
  const data = request.body;
  database.find({
    name: data.name
  }, function (error, docs) {
    if (error) {
      response.end();
      return;
    } else if (docs.length == 0) {
      response.json({
        status: 'success',
        action: 'Not in database',
        name: data.name,
      });
    } else {
      response.json({
        status: 'success',
        action: 'read from db',
        name: data.name,
        title: docs[0]["title"],
        data: docs[0]["data"]
      });
    }
  });
});


app.post('/saveDb', (request, response) => {
  const saveData = request.body;
  database.insert(saveData);
  response.json({
    status: 'success',
    action: 'saved on database',
    name: saveData.name,
  });

});

app.get('/menu', (request, response) => {
  database.find({}, (err, docs) => {
    response.json({
      status: 'success',
      action: 'reading from db',
      data: docs
    })
  })
});

app.post('/cancelDb', (request, response) => {
  const cancelCity = request.body.name;
  database.find({
    name: cancelCity
  }, (err, docs) => {
    database.remove({
      _id: docs[0]["_id"]
    }, (err, dataFromDb) => {
      response.json({
        status: 'success',
        action: 'cancel from db',
        data: dataFromDb
      })
    })
  })
});

async function downloadAndCannyEdge(url) {

  if (fs.existsSync('public/tempImage/image.png')) {
    fs.unlink('public/tempImage/image.png', (error) => {
      if (error) {
        throw error;
      }
    });
  }
  if (fs.existsSync('public/cannyimage/edge.png')) {
    fs.unlink('public/cannyimage/edge.png', (error) => {
      if (error) {
        throw error;
      }
    });
  }

  const response = await fetch(url);
  const buffer = await response.buffer();
  let writeFile = fs.writeFile(`public/tempImage/image.png`, await buffer, async () => {
    const img = await ImageCanny.load(`public/tempImage/image.png`);
    const grey = await img.grey();
    const options = {
      lowThreshold: 120,
      highThreshold: 130,
      gaussianBlur: 0.6, //ultima mod - 0.7 o 0.5 test
      brightness: 1.1
    };
    const edge = await cannyEdgeDetector(grey, options);
    return edge.save('public/cannyImage/edge.png');
  });
  return writeFile;
}