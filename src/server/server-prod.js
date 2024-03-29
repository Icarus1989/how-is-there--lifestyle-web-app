import path from 'path';
import express from 'express';
const regeneratorRuntime = require("regenerator-runtime");

const fs = require('fs');
const {
  default: axios
} = require('axios');
const Datastore = require('nedb');
const cannyEdgeDetector = require('canny-edge-detector');
const ImageCanny = require('image-js').Image;
const port = (process.env.PORT || 5000);

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.resolve(DIST_DIR, '../../dist/client/index.html');

app.use(express.static(path.resolve(DIST_DIR, '../')));
app.use(express.json({
  limit: '10mb',
}));

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});

const database = new Datastore('./src/server/db/citiesDatabase.db');
database.loadDatabase();

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
    downloadAndCannyEdge(fileUrl);
  } catch {
    try {
      const urlTeleport = `https://api.teleport.org/api/urban_areas/slug:${(cityName).toLowerCase()}/images/`;
      const dataTeleport = await axios.get(urlTeleport);
      const jsonTeleport = await dataTeleport["data"];
      fileUrl = await jsonTeleport["photos"][0]["image"]["web"];
      downloadAndCannyEdge(fileUrl);
    } catch (error) {
      response.json(error["data"]);
    }
  }
});

app.post('/queryDb', (request, response) => {
  database.loadDatabase();
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
  try {
    if (fs.existsSync(`./dist/client/assets/tempImages/image.png`)) {
      fs.unlink(`./dist/client/assets/tempImages/image.png`, (error) => {
        if (error) {
          throw error;
        }
      });
    }
    if (fs.existsSync(`./dist/client/assets/tempImages/edge.png`)) {
      fs.unlink(`./dist/client/assets/tempImages/edge.png`, (error) => {
        if (error) {
          throw error;
        }
      });
    }
    // if(fs.access(file, constants.F_OK, (err)=>{
    //   if(err){
    //     throw err;
    //   }
    //   fs.unlink(`./dist/client/assets/tempImages/edge.png`, (error)=> {
    //   if(error){
    //     throw error;
    //   }
    //   })
    // }));
    const tempPath = './dist/client/assets/tempImages';
    if (!fs.existsSync(tempPath)) {
      fs.mkdirSync(tempPath);
    }
    // fs.access No
    // if(!fs.existsSync(tempPath))
    // fs.mkdir(tempPath, (err)=> {
    //   if(err){
    //     throw err;
    //   }
    // });

    // TESTING due versioni asincrone sopra

    const data = await axios({
      method: 'get',
      url: url,
      responseType: 'arraybuffer'
    });
    const buffer = await data["data"];

    fs.writeFile(`./dist/client/assets/tempImages/image.png`, await buffer, async (err) => {

      if (err) {
        throw err;
      }
      const img = await ImageCanny.load(`./dist/client/assets/tempImages/image.png`);
      const grey = await img.grey();
      const options = {
        lowThreshold: 120,
        highThreshold: 130,
        gaussianBlur: 0.6,
        brightness: 0.8
      };
      const edge = await cannyEdgeDetector(grey, options);
      return edge.save(`./dist/client/assets/tempImages/edge.png`);
    })
  } catch(error) {
    throw new Error(error);
  }
}