// SPERIMENTALE **
// let newArray = response.filter((elem) => {
//   filterCityList(elem, countryP).then(res => {
//     return res;
//   });
// }, response);
// console.log(newArray);
// console.log(response);
// let newarray = response.filter(async function (elem) {
//   let results = await filterCityList(elem, countryP);
//   console.log(results);
//   return results;
// });

// let newarray = response.filter((function (elem) {
//   return results = filterCityList(elem, countryP);
// }).then(result => {
//   return result;
// }));
// return newarray;

// SPERIMENTALE



// ---- Det Complete List **

// const urlListComplete = `https://api.teleport.org/api/urban_areas/`;
// let completeDataset = await fetch(urlListComplete);
// let completeUAList = await completeDataset.json();

// let completeUAListPartOne = completeUAList["_links"]["ua:item"];
// console.log(completeUAList);


// console.log(completeUAListPartOne);

// let arr = [];

// for (let elem of completeUAListPartOne) {
//   // console.log(elem["name"]);
//   arr.push(elem["name"]);
// }
// console.log(arr);

// ---- Det Complete List


// ----

// const urlListCompleteCountry = 

// let completeDatasetCountry = 


// console.log(info["_embedded"]["city:search-results"][0].matching_full_name);



// console.log(cityScores(inputField.value));
// cityScores(inputField.value).then(result => console.log(result));
// const url = `https://api.teleport.org/api/cities/?search=${inputField.value}&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity%3Aurban_area%2Fua%3Ascores`

// let url = `https://api.teleport.org/api/urban_areas/slug:${inputField.value.toLowerCase()}/scores/`;

// const url = `https://api.teleport.org/api/urban_areas/slug:${(inputField.value).toLowerCase()}/scores/`;







// console.log(data);

// getRegionsList(countryCode).then(response => {
//   let arr = [];
//   // console.log(response);
//   for (let elem of UrbanAreasCompleteList) {
//     // console.log(elem);
//     for (let city of response) {
//       if (city === elem) {
//         arr.push(elem);
//       }
//     }
//   }
//   return arr;
// }).then(async response => {
//   for await (let elem of response) {
//     let result = await filterCityList(elem, countryCode);
//     if (elem && !arr.includes(elem)) {
//       arr.push(result);
//     }
//   }
//   return arr = arr.filter((elem) => {
//     return elem !== undefined;
//   });

//   // SPERIMENTALE **

// }).then(async (results) => {
//   console.log(results);
//   buttons = [...results];
//   console.log(buttons);


//   for (let i = 0; i < results.length; i++) {
//     let btn = document.createElement('button');
//     btn.textContent = results[i];
//     // btn.classList.add('invibleButtons');
//     document.querySelector('#resultsContainer').append(btn);
//     // buttons[i] = document.createElement('button');
//     // buttons[i].value = results[i];
//     // // document.querySelector('#resultContainer').append(buttons[i]);
//     // // buttons.push(btn);
//     // console.log(buttons);
//   }

//   // for await (let elem of buttons) {
//   //   elem.style.color = 'black';
//   //   elem.style.opacity = 1.0;
//   // }
//   // Salvare result lista città disponibili in variabile esterna ---- #



//   // Salvare result lista città disponibili in variabile esterna ---- #
//   // Svuotare lista result una volta salvati in variabile esterna?

//   // for (let elem of result) {
//   //   let p = document.createElement('p');
//   //   p.textContent = elem;
//   //   document.body.append(p);
//   // }
// });

// Miglioramento codice: provare a trasformare parte in async/await?



// Node.js:

// if (fs.existsSync('public/tempImage/image.png')) {
//   //file exists
//   fs.unlink('public/tempImage/image.png', (error) => {
//     if (error) {
//       throw error;
//     }
//     console.log('Wikipedia File canceled.');
//   });
// }
// if ('public/tempImage/image.png' == true) {

// }


// Prima
// capire come mettere in sequenza
// Seconda
// ImageCanny.load('public/tempImage/image.png').then((img) => {
//   // fs.unlink('public/cannyImage/edge.png', (error) => {
//   //   if (error) {
//   //     throw error;
//   //   }
//   //   console.log('Canny File canceled.');
//   // });
//   // per eliminare file prima del nuovo file:
//   // https://nodejs.org/api/fs.html#fs_fs_unlink_path_callback
//   const grey = img.grey();
//   const edge = cannyEdgeDetector(grey);
//   return edge.save('public/cannyimage/edge.png');
// })
// Seconda
// capire come eliminare immagini alla fine o quelle presenti all'avvio


// download(fileUrl).then(() => {
//   ImageCanny.load('public/tempImage/image.png').then((img) => {
//     const grey = img.grey();
//     const edge = cannyEdgeDetector(grey, {
//       lowThreshold: 40,
//       highThreshold: 100,
//       gaussianBlur: 1.1,
//       brightness: 0.3,
//     });
//     return edge.save('public/cannyimage/edge.png');
//   })
// });





// function edgeDetection1() {

// }

// edgeDetection1();

// image.src = fetch('.../cannyImage/edge.png');



// image.addEventListener('load', async () => {
//   let canvas = document.querySelector('#canvasImage');
//   let ctx = canvas.getContext('2d');

//   canvas.style.width = document.querySelector('#imgContainer').clientWidth + 'px';
//   canvas.style.height = document.querySelector('#imgContainer').clientHeight + 'px';
//   ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
// })

// let imageFiltered = new MarvinImage();

// imageFiltered.load("public/tempImage/image.png", function () {
// Marvin.colorChannel(imageFiltered, imageFiltered, 14, 0, -8);
// Marvin.prewitt(imageExampleFilters, imageExampleFiltersOut);
// imageFiltered.draw(canvas);

//   imageFiltered.clear(0xFF000000);
//   Marvin.prewitt(imageFiltered, imageFiltered);
//   imageFiltered.draw(document.querySelector('#canvasImage'));
// });

// try {
//   retrieveImageCanny();
// } catch {
//   setTimeout(() => {
//     retrieveImageCanny();
//   }, 3000);
// }



// console.log(imageObjectURL);

// let imageRes;

// let reader = new FileReader();
// reader.readAsDataURL(blob);
// reader.onloadend = function () {
//   let base64data = reader.result;
//   console.log(base64data);
// console.log(base64data.substr(base64data.indexOf(',') + 1));


// imageRes = new Image();
// imageRes.src = base64data;
// imageRes.src = `data:image/png;base64,${base64data.substr(base64data.indexOf(',') + 1)}`;
// console.log(imageRes);






// imageRes.style.width = '100vw';
// document.body.append(imageRes);
// return imageRes;
// document.body.appendChild(image);
// base64data = base64data.slice(22);
// console.log(base64data);
// imgCanny.src = base64data;
// let imgCanny = new Image(base64data);
// console.log(imgCanny);

// console.log(imgCanny);
// }



// console.log(imageRes);


// let retrieve = await fetch(img);
// let blob = await retrieve.blob();
// let newImage = new Blob(blob);


// console.log(newImage);

// let originalImage = new Image();

// originalImage.src = img;






// let canvasContainer = document.querySelector('#canvasContainer');

// let image;
// let imageContainer = document.querySelector('#imgContainer');

// let mainCanvas = function (cnv) {

//   let w = imageContainer.clientWidth;
//   let h = imageContainer.clientHeight;
//   // console.log(w);
//   // console.log(h);
//   cnv.preload = function () {
//     // image = 
//     image = cnv.loadImage(img.src);

//     // image = cnv.createImg(img.src);
//   }
//   cnv.setup = function () {
//     cnv.createCanvas(w, h);

//     cnv.background(255);

//     // cnv.image(image, 0, 0, w, h);

//     // cnv.filter(cnv.GRAY);
//     cnv.filter(cnv.BLUR, 1);

//     // cnv.filter(cnv.DILATE);

//     // cnv.filter(cnv.THRESHOLD, 0.1);




//   }
//   cnv.draw = function () {

//     cnv.filter(cnv.POSTERIZE, 8);


//   }
// }

// new p5(mainCanvas, canvasContainer);

// console.log(img);
// let canvas = document.querySelector('#canvasImage');

// let original = new MarvinImage();

// console.log(original);

// let imageFiltered;

// original.load('../testImage/image.png', function () {
//   original.draw(canvas);
// });

// img.addEventListener('load', function () {
//   imageFiltered = original.clone();
//   imageFiltered.clear(0xFF000000);
//   Marvin.prewitt(original, img);
//   imageFiltered.draw(canvas);
// })


// function edgeDetection2() {
//   imageFiltered = original.clone();
//   imageFiltered.clear(0xFF000000);
//   Marvin.prewitt(original, imageFiltered);
//   Marvin.invertColors(imageFiltered, imageFiltered);
//   Marvin.thresholding(imageFiltered, imageFiltered, 200);
//   imageFiltered.draw(canvas);
// }

// edgeDetection2()





// setTimeout(() => {
//   // image.src = "public/cannyImage/edge.png";
//   image.src = "public/tempImage/image.png";
// }, 5000);

// console.log(imageUrl);
// setTimeout(() => {
//   const imageUrl = "public/cannyImage/edge.png";
//   image.src = imageUrl;
// }, 3000);
// const responseImage = await fetch(imageUrl);
// console.log(responseImage);
// if (await wikiJson) {
//   image.src = 'public/cannyImage/edge.png';
// }
// const imageUrl = "public/cannyImage/edge.png";
// let cannyImage = await fetch(imageUrl);
// console.log(cannyImage);
// let file = new File("public/cannyImage/edge.png");
// if (file.exist()) {
//   console.log('exist');
// }
// console.log(file);
// image.src = await (wikiJson["query"]["pages"])[Object.keys(wikiJson["query"]["pages"])]["thumbnail"]["source"];


// const objWiki = wikiJson["query"]["pages"];
// console.log(objWiki[Object.keys(objWiki)[0]]["images"][0]["title"]);
// const titleWikiPhoto = objWiki[Object.keys(objWiki)[0]]["images"][3]["title"];
// console.log("https://en.wikipedia.org/wiki/" + titleWikiPhoto);
// const title = titleWikiPhoto.split(' ').join('_')
// console.log(title);
// console.log(`https://en.wikipedia.org/wiki/${title}`);

// Visualizzazione Images

// image.src = await infoImages["photos"][0]["image"]["mobile"];
// let blobUrl = await fetch((wikiJson["query"]["pages"])[Object.keys(wikiJson["query"]["pages"])]["thumbnail"]["source"]);
// let blob = await blobUrl.blob();
// console.log(blob);
// let imageFile = new File(blob, 'public/cityImage');
// console.log(imageFile);



// let canvas = document.createElement('div');
// canvas.style.height = document.querySelector('#imgContainer').getBoundingClientRect().height + 'px';
// console.log(document.querySelector('#canvas_p5'));
// document.querySelector('#imgContainer').append(canvas);

// let mainCanvas = function (cnv) {
//   console.log(canvas.clientWidth);
//   let widthM = canvas.clientWidth;
//   let heightM = canvas.clientHeight;
//   cnv.preload = function () {
//     imgCanvas = cnv.loadImage('public/cannyImage/edge.png');
//   }
//   cnv.setup = function () {
//     cnv.createCanvas(widthM, heightM);
//   }
//   cnv.draw = function () {
//     cnv.background(255, 10);

//   }
// }

// new p5(mainCanvas, canvas);

// const data = {
//   cityName: cityname,
// };
// console.log(data);
// const options = {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(data),
// }
// const response = await fetch('/api', options);
// const responseData = await response.json();
// console.log(responseData);

// const wikiUrl = `wiki/${cityname}`;
// // const wikiUrl = `/wiki`;
// const wikiResponse = await fetch(wikiUrl);
// const wikiJson = await wikiResponse.json();
// console.log((wikiJson["query"]["pages"])[Object.keys(wikiJson["query"]["pages"])]["thumbnail"]["source"]);

// wikiJson.then(() => {
//   console.log('then wikiJson');
//   let image = document.createElement('img');
//   image.setAttribute('id', 'imgCity');
//   image.loading = 'lazy';
//   image.src = "public/cannyImage/edge.png";
// })






// console.log(err);
// Caricamento e visualizzazione su sfondo immagine da Wikipedia ------------ ***

// Testing Wikipedia API
// const urlWiki = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${inputField.value}`;
// const dataWiki = await fetch(urlWiki, {
//   method: 'GET',
//   mode: 'cors',
//   credentials: 'include',
//   referrer: "http://127.0.0.1:8080/",
//   referrerPolicy: "unsafe-url",
//   headers: {
//     'Content-Type': 'application/json'
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   referrerPolicy: 'no-referrer',
// });
// const infoWiki = await dataWiki.json();
// // console.log(infoWiki);
// // loadJSON(urlWiki, gotData, 'jsonp');

// function gotData(dataPHP) {
//   console.log(dataPHP);
// }
// Testing Wikipedia API



// const urlImages = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_links"]["ua:images"]["href"];



// console.log(urlImages);
// const dataImages = await fetch(urlImages);
// const infoImages = await dataImages.json();
// console.log(infoImages["photos"]);






//   let image = document.createElement('img');
//   image.setAttribute('id', 'imgCity');
//   image.loading = 'lazy';
//   image.src = result;

//   image.style.width = "600px";
//   image.style.height = "100%";
//   image.style.position = "relative";
//   image.style.left = "-50%";
//   document.querySelector('#imgContainer').append(image);
//   console.log(image);
//   console.log(result);

//   console.log(document.querySelector('#canvasContainer'));


//   image.style.opacity = 0.0;
//   return image;

// }).then(async (img) => {

//   console.log(img);

// let response = await fetch("cannyImage/edge.png");
// let blob = await response.blob();
// const imageObjectURL = URL.createObjectURL(blob);
// console.log(response);
// console.log(blob);




// Precaricamento Country se ok localizzazione ------------------ *****
// GEOLOCALIZZAZIONE
// if ('geolocation' in navigator) {
//   console.log('Geolocation available');
//   console.log(navigator.language);
//   navigator.geolocation.getCurrentPosition(async (position) => {
//     console.log(position.coords);

//     // const data = {}
//   });
// }
// GEOLOCALIZZAZIONE
// Precaricamento Country se ok localizzazione ------------------ *****



// for (let i = 9; i < infoScores["categories"].length; i++) {
//   console.log(infoScores["categories"][i]);
// }



// let tbody = document.createElement('tbody');
// for (let elem of infoScores["categories"]) {
//   // console.log(elem);
//   let tr = document.createElement('tr');
//   tbody.append(tr);
//   let th = document.createElement('th');
//   th.textContent = infoScores["categories"][infoScores["categories"].indexOf(elem)]["name"];
//   tr.append(th);
//   let td = document.createElement('td');
//   td.textContent = `${(infoScores["categories"][infoScores["categories"].indexOf(elem)]["score_out_of_10"]).toFixed(1)} / 10`;
//   tr.append(td);
// }
// table.append(tbody);
// document.querySelectorAll('.dataDisplay')[0].append(table);
// console.log(table);


// Testing
// const numSteps = 20.0;

// let boxElement;
// let prevRatio = 0.0;
// let increasingLeft = "-150%";
// let decreasingLeft = "-50%";

// // Set things up
// window.addEventListener("load", (event) => {
//   // boxElement = document.querySelector(".backgroundImage");
//   boxElement = document.querySelectorAll('.dataDisplay')[0];

//   createObserver();
// }, false);

// function createObserver() {
//   let observer;

//   let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: buildThresholdList()
//   };

//   observer = new IntersectionObserver(handleIntersect, options);
//   observer.observe(boxElement);
// }

// function buildThresholdList() {
//   let thresholds = [];
//   let numSteps = 20;

//   for (let i = 1.0; i <= numSteps; i++) {
//     let ratio = i / numSteps;
//     thresholds.push(ratio);
//   }

//   thresholds.push(0);
//   return thresholds;
// }

// // let computed;

// // document.querySelector('.backgroundImage').addEventListener('load', () => {
// //   computed = getComputedStyle(document.querySelector('.backgroundImage'));
// // });

// // console.log(computed);

// function handleIntersect(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.intersectionRatio > prevRatio) {
//       entry.target.style.left = increasingLeft.replace(entry.target.style.left, entry.intersectionRatio);
//     } else {
//       entry.target.style.left = decreasingLeft.replace(entry.target.style.left, entry.intersectionRatio);
//     }



//     prevRatio = entry.intersectionRatio;
//   });
// }
// Testing

// console.log(infoScores["categories"][i]);
// console.log(infoScores["categories"][infoScores["categories"].indexOf(infoScores["categories"][i])]["name"]);


// console.log(wikiJson);
// console.log((wikiJson["query"]["pages"])[Object.keys(wikiJson["query"]["pages"])]["thumbnail"]["source"]);
// return new Promise;
// return wikiLink = await (wikiJson["query"]["pages"])[Object.keys(wikiJson["query"]["pages"])]["thumbnail"]["source"];

// const pixabayUrl = `wiki`

// console.log(infoScores["categories"][i]);
// console.log(infoScores["categories"][infoScores["categories"].indexOf(infoScores["categories"][i])]["name"]);


// function retrieveAlternativeCities(country){}
// let data = await getRegionsList(country);
// let firstCityArray = [];
// for (let elem of UrbanAreasCompleteList) {
//   for (let city of data) {
//     if (city === elem) {
//       firstCityArray.push(elem);
//     }
//   }
// }
// for (let elem of firstCityArray) {
//   let result = await filterCityList(elem, countryCode);
//   if (elem && !secondCityArray.includes(elem)) {
//     secondCityArray.push(result);
//   }
// }
// console.log(secondCityArray);

// secondCityArray = secondCityArray.filter((elem) => {
//   return elem !== undefined;
// });

// // console.log(secondCityArray);

// // Creazione e visualizzazione Buttons città disponibili da variabile esterna ----- #
// buttons = [...secondCityArray];
// for (let i = 0; i < secondCityArray.length; i++) {
//   let btn = document.createElement('button');
//   btn.textContent = secondCityArray[i];
//   // btn.classList.add('invibleButtons');
//   document.querySelector('#resultsContainer').append(btn);

// }





// let tableOne = document.createElement('table');
// let tbodyOne = document.createElement('tbody');

// for (let i = 0; i < 9; i++) {
//   let tr = document.createElement('tr');
//   tbodyOne.append(tr);
//   let th = document.createElement('th');
//   th.textContent = infoScores["categories"][infoScores["categories"].indexOf(infoScores["categories"][i])]["name"];
//   tr.append(th);
//   let td = document.createElement('td');
//   td.textContent = `${(infoScores["categories"][infoScores["categories"].indexOf(infoScores["categories"][i])]["score_out_of_10"]).toFixed(1)} / 10`;
//   tr.append(td);
// }

// tableOne.append(tbodyOne);
// document.querySelectorAll('.dataDisplay')[1].append(tableOne);




// let tableTwo = document.createElement('table');
// let tbodyTwo = document.createElement('tbody');

// for (let i = 9; i < infoScores["categories"].length; i++) {
//   let tr = document.createElement('tr');
//   tbodyTwo.append(tr);
//   let th = document.createElement('th');
//   th.textContent = infoScores["categories"][infoScores["categories"].indexOf(infoScores["categories"][i])]["name"];
//   tr.append(th);
//   let td = document.createElement('td');
//   td.textContent = `${(infoScores["categories"][infoScores["categories"].indexOf(infoScores["categories"][i])]["score_out_of_10"]).toFixed(1)} / 10`;
//   tr.append(td);

// }

// tableTwo.append(tbodyTwo);
// document.querySelectorAll('.dataDisplay')[2].append(tableTwo);

// table => document.querySelectorAll('table)[0]
// data => infoScores["categories"]

// console.log(secondImgContainer);

// let imageCity = document.createElement('img');
// imageCity.style.width = "auto";
// imageCity.style.height = secondImgContainer.clientHeight + "px";
// if (imgContainer.clientHeight < imgContainer.clientWidth) {
//   // console.log('width > height');
//   imageCity.style.width = "100vw";
//   // imageCity.style.height = "auto";
//   imageCity.style.height = secondImgContainer.clientHeight + "px";

//   imageCity.style.top = "-50%";
//   imageCity.style.left = "0%"; //-50% -100% -150%

// } else {
//   imageCity.style.position = "relative";
//   imageCity.style.left = "-50%"; //-50% -100% -150%
//   imageCity.style.bottom = "0%";
// }

// setTimeout(() => {
//   imageCity.src = 'tempImage/image.png';
// }, 1000);
// imageCity.addEventListener('load', () => {
//   secondImgContainer.append(imageCity);
// });
// document.querySelector('#resultsContainer').addEventListener('scroll', (event) => {
//   // console.log('second scroll');
//   imageCity.style.left = (-((event.target.scrollLeft / (event.target.scrollWidth - event.target.clientWidth)) * 100)) - 50 + '%';
// });
// // console.log(imageCity);

// Testing


// let newImage = document.createElement('img');
// // newImage.classList.add('backgroundImage');
// newImage.style.width = "auto";
// newImage.style.height = imgContainer.clientHeight + "px";
// if (imgContainer.clientHeight < imgContainer.clientWidth) {
//   // console.log('width > height');
//   newImage.style.width = "100vw";
//   // newImage.style.height = "auto";
//   newImage.style.height = imgContainer.clientHeight + "px";
//   newImage.style.top = "-50%";
//   newImage.style.left = "0%"; //-50% -100% -150%

// } else {
//   newImage.style.position = "relative";
//   newImage.style.left = "-50%"; //-50% -100% -150%
//   newImage.style.bottom = "0%";
// }

// setTimeout(() => {
//   newImage.src = 'cannyImage/edge.png';
// }, 1000);
// newImage.addEventListener('load', () => {
//   imgContainer.append(newImage);
// });

// document.querySelector('#resultsContainer').addEventListener('scroll', (event) => {
//   // console.log('scroll');
//   //  x : -150 = 1 : -50
//   // console.log(event.target.scrollLeft);
//   // console.log((-((event.target.scrollLeft / (event.target.scrollWidth - event.target.clientWidth)) * 100)) - 50);

//   newImage.style.left = (-((event.target.scrollLeft / (event.target.scrollWidth - event.target.clientWidth)) * 100)) - 50 + '%';


// });



// <=====
// controllare se esistono:
// image ==> document.querySelector('#imgContainer')
// image ==> document.querySelector('#secondImgContainer');
// resultsContainer ==> document.querySelector('#resultsContainer')

// path ==> 'tempImage/image.png'
// path ==> 'cannyImage/edge.png'

// let firstImgContainer = document.querySelector('#imgContainer');

// let imgContainer = document.querySelector('#imgContainer');

// // Testing
// let secondImgContainer = document.querySelector('#secondImgContainer');
// // console.log(secondImgContainer);


// try {



//   // Rilevamento città --------

//   const url = `https://api.teleport.org/api/cities/?search=${inputField.value}&embed=city:search-results/city:item/city:country&embed=city:search-results/city:item/city:admin1_division&embed=city:search-results/city:item/city:urban_area&embed=ua:item/ua:scores&embed=ua:item/ua:images&embed=city:search-results/city:item/city:timezone/tz:offsets-now`;
//   const data = await fetch(url);
//   const info = await data.json();


//   console.log(info);
//   // console.log(info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:admin1_division"]["geonames_admin1_code"]);

//   // Rilevamento città --------

//   // Visualizzazione nome città ecc ------------------------------------ ******



//   // Visualizzazione nome città ecc ------------------------------------ ******

//   // Calcolo Lista città disponibili per Country -------------------------- **

//   // Rilevamento Country => diventa CountryP ------------------------------ *
//   // Solo se localizzazione non disponibile



//   // Rilevamento Country => diventa CountryP ------------------------------ *

//   try {


//     // -----------------------------QUI----------------------------
//     // --------------------------------------------- Search in database ------

//     let cityFromInput = (inputField.value[0]).toUpperCase() + (inputField.value).slice(1);
//     console.log('input: ' + cityFromInput);

//     const dbQueryName = {
//       name: cityFromInput,
//     }

//     const optionsQueryDb = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(dbQueryName),
//     }
//     const dbQuery = await fetch('/queryDb', optionsQueryDb);
//     const dbResponse = await dbQuery.json();

//     console.log(dbResponse);

//     const dbDatas = dbResponse.data;
//     console.log(dbDatas);
//     // Ricavare title dai dati salvati
//     console.log(dbResponse.title);
//     // Ricavare title dai dati salvati


//     let urlScores;
//     let dataScores;
//     let infoScores;

//     let nameAndState;
//     let continent;
//     let cityname;

//     if (!dbDatas) {
//       console.log('NOT in database');
//       urlScores = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_links"]["ua:scores"]["href"];
//       dataScores = await fetch(urlScores);
//       infoScores = await dataScores.json();
//       cityname = await (info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["full_name"]).split(',')[0];
//       nameAndState = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["full_name"];
//       continent = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["continent"];

//       console.log(nameAndState);
//       console.log(continent);
//     } else {
//       infoScores = dbDatas;

//       let completeNameArray = dbResponse.title.split(', ');
//       console.log(completeNameArray);
//       cityname = completeNameArray[0];
//       console.log(cityname);
//       nameAndState = `${completeNameArray[0]}, ${completeNameArray[1]}`;
//       continent = completeNameArray[2];

//     }

//     console.log(urlScores);
//     console.log(dataScores);
//     console.log(infoScores);


//     // ---------------
//     // Sistemare ordine variabile

//     let fullName = `${nameAndState}, ${continent}`;

//     // Sistemare ordine variabile


//     if (dbResponse.status == 'success' && dbResponse.action == 'Not in database') {
//       const dbData = {
//         name: cityname,
//         title: fullName,
//         data: infoScores
//       }
//       const optionsSaveDb = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(dbData),
//       }
//       const saveDb = await fetch('/saveDb', optionsSaveDb);
//       const saveResponse = await saveDb.json();
//       console.log(saveResponse);
//     }






//     // --------------------------------------------- Search in database ------
//     // -----------------------------QUI----------------------------







//     // Scores
//     // const urlScores = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_links"]["ua:scores"]["href"];
//     // // console.log(urlScores);
//     // const dataScores = await fetch(urlScores);
//     // const infoScores = await dataScores.json();




//     // IMP -->
//     console.log(infoScores);
//     // <-- IMP

//     // IMP -->
//     // console.log(await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]);
//     // <-- IMP

//     // Visualizzazione dati Scores


//     // --->
//     // let nameAndState = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["full_name"];
//     // let continent = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["continent"];
//     // <---

//     console.log(`${nameAndState}, ${continent}`);


//     createTitle(document.querySelector('#resultsContainer'), nameAndState, continent);

//     let cityDescription = await infoScores["summary"];
//     createDescription(document.querySelector('.descriptionBox'), cityDescription, document.querySelectorAll('.dataDisplay')[0]);

//     // trasformare in class + responsive (desktop ok width 60vw)
//     // vedi #descriptionBox

//     const tableData = infoScores["categories"];
//     const dataFirstPart = tableData.slice(0, 9);
//     const dataSecondPart = tableData.slice(9, tableData.length);

//     createDataTable(document.querySelectorAll('table')[0], dataFirstPart, document.querySelectorAll('.dataDisplay')[1]);
//     createDataTable(document.querySelectorAll('table')[1], dataSecondPart, document.querySelectorAll('.dataDisplay')[2]);

//     // Visualizzazione dati Scores
//     // Scores

//     // ------------------------------------------------- QUI ---------


//     // Images

//     // --->
//     // const cityname = await (info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["full_name"]).split(',')[0];
//     console.log(cityname);
//     // <---
//     // const cityname = inputField.value;
//     // const dbName = {
//     //   name: cityname,
//     //   // data: infoScores
//     // }

//     // const dbData = {
//     //   name: cityname,
//     //   title: fullName,
//     //   data: infoScores
//     // }

//     // console.log(dbData);

//     // const options = {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json'
//     //   },
//     //   body: JSON.stringify(dbData),
//     // }
//     // let serverResponse = await fetch('/api', options);
//     // let serverData = await serverResponse.json();
//     // console.log(serverData);
//     // if (serverData.status == 'success' && serverData.action == 'read from db') {
//     //   console.log('Data just in database');
//     //   console.log(serverData.data);
//     // } else if (serverData.status == 'success' && serverData.action == 'saved') {
//     //   console.log('Data not in database, saved now.');

//     //   // -------------------------Testing---------------------------
//     //   // const serverPersistence = fetch('/persistence', optionsPersistence)
//     //   // const optionsPersistence = {
//     //   //   method: 'POST',
//     //   //   headers: {
//     //   //     'Content-Type': 'application/json'
//     //   //   },
//     //   //   body: JSON.stringify(dbData),
//     //   // }
//     //   // -------------------------Testing---------------------------


//     // } else {
//     //   console.log('Something Wrong');
//     // }


//     console.log(cityname);

//     // const testingV = await retrieveWiki(cityname);
//     // console.log('Testing async / await');
//     // console.log(testingV);


//     retrievePixabay(cityname).then(() => {

//       event.target.value = '';
//       event.target.placeholder = 'Enter a new city...';
//       event.target.blur();

//       let imgContainer = document.querySelector('#imgContainer');
//       let firstPath = 'cannyImage/edge.png';

//       // Testing
//       let secondImgContainer = document.querySelector('#secondImgContainer');
//       let secondPath = 'tempImage/image.png';

//       loadImage(secondImgContainer.querySelector('img'), secondImgContainer, document.querySelector('#resultsContainer'), secondPath);
//       loadImage(imgContainer.querySelector('img'), imgContainer, document.querySelector('#resultsContainer'), firstPath);

//     }).catch(error => {
//       console.log(error);



//     })

//     // Visualizzazione Images

//     // Images

//     // ------------------------------------------------- QUI ---------


//   } catch (err) {

//     // ----->
//     // Analisi città alternative - PERFEZIONARE O LEVARE
//     // <-----

//     retrieveAlternativeCities(info);


//     console.log(cityname + 'from error section');

//     // Creazione e visualizzazione Buttons città disponibili da variabile esterna ----- #


//     // Calcolo Lista città disponibili per Country -------------------------- **




//     // Caricamento e visualizzazione su sfondo immagine da Wikipedia ------------ ***

//     // Creazione e visualizzazione Buttons città disponibili da variabile esterna ----- #



//     // Creazione e visualizzazione Buttons città disponibili da variabile esterna ----- #

//     // Click Buttons Città - Svuotamento lista -> inputField.textContent = nome button

//     // Click Buttons Città - Svuotamento lista -> inputField.textContent = nome button


//   }
// } catch (error) {
//   console.log(error);
//   console.log('City not found');
//   event.target.value = '';
//   event.target.placeholder = 'Enter a new city...';
//   event.target.blur();



//   // Gestione Città Inesistente - Nome della città non trovato
// }


// console.log(countryCode);



// ---- Det Complete List **


// async function searchCity(inputElement) {

//   try {
//     const url = `https://api.teleport.org/api/cities/?search=${inputElement.value}&embed=city:search-results/city:item/city:country&embed=city:search-results/city:item/city:admin1_division&embed=city:search-results/city:item/city:urban_area&embed=ua:item/ua:scores&embed=ua:item/ua:images&embed=city:search-results/city:item/city:timezone/tz:offsets-now`;
//     const data = await fetch(url);
//     const info = await data.json();

//     try {
//       const cityFromInput = (inputField.value[0]).toUpperCase() + (inputField.value).slice(1);
//       const dbQueryName = {
//         name: cityFromInput,
//       }
//       const optionsQueryDb = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(dbQueryName),
//       }
//       const dbQuery = await fetch('/queryDb', optionsQueryDb);
//       const dbResponse = await dbQuery.json();
//       const dbDatas = dbResponse.data;

//       let urlScores;
//       let dataScores;
//       let infoScores;
//       let nameAndState;
//       let continent;
//       let cityname;

//       if (!dbDatas) {
//         console.log('NOT in database');
//         urlScores = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_links"]["ua:scores"]["href"];
//         dataScores = await fetch(urlScores);
//         infoScores = await dataScores.json();
//         cityname = await (info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["full_name"]).split(',')[0];
//         nameAndState = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["full_name"];
//         continent = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["continent"];

//         console.log(nameAndState);
//         console.log(continent);
//       } else {
//         infoScores = dbDatas;
//         let completeNameArray = dbResponse.title.split(', ');
//         cityname = completeNameArray[0];
//         nameAndState = `${completeNameArray[0]}, ${completeNameArray[1]}`;
//         continent = completeNameArray[2];
//       }

//     } catch {
//       retrieveAlternativeCities(info);
//     }

//   } catch {
//     console.log(error);
//     console.log('City not found');
//     inputElement.value = '';
//     inputElement.placeholder = 'Enter a new city...';
//     inputElement.blur();
//   }
// }




// let option = new Option(secondCityArray[i], secondCityArray[i], false, false);
// selectElement.append(option);

// alternatesContainer.style.display = 'grid';
// alternatesContainer.style.placeItems = 'center';
// alternatesContainer.style.gridTemplateColumns = '1fr 1fr';
// alternatesContainer.style.gridTemplateRows = '1fr 1fr 1fr';
// alternatesContainer.style.width = '90vw';
// alternatesContainer.style.height = '40vh';
// alternatesContainer.style.position = 'absolute';



// if (altContainer) {
//   disappearElement(altContainer, 0).then(() => {
//     searchCity(inputField, event.target);
//   });
// } else {
// searchCity(inputField, event.target);
// }


// btn.style.color = 'rgb(25,25,25)';
// btn.style.fontSize = '16px';
// btn.style.border = '2px solid rgba(240, 248, 255, 1.0)';
// btn.style.backgroundColor = 'rgba(240, 248, 255, 0.9)';
// btn.style.borderRadius = '12px';
// btn.style.minWidth = "28vw";
// btn.style.width = 'fit-content';
// btn.style.paddingTop = "4%";
// btn.style.paddingBottom = "4%";
// btn.style.paddingLeft = "8%";
// btn.style.paddingRight = "8%";



// let countryP = 'IT';

// let arr = [];

// resultsCont.addEventListener('scroll', () => {
//   // resultsCont.scrollLeft = 0;
//   resultsCont.scrollTo(0, 0)
// });
// resultsCont.addEventListener('scroll', () => console.log('scroll'));
// console.log(document.querySelectorAll('.dataDisplay')[0].scrollLeft);

// if (document.querySelectorAll('.dataDisplay')[0].scrollLeft < 0) {
//   document.querySelectorAll('.dataDisplay')[0].scrollLeft = 0
// }
// document.querySelectorAll('.dataDisplay')[0].scrollLeft == 0;




// let saveButton = document.querySelector('.saveBtn');
// document.querySelector('.saveBtn').addEventListener('click', async (event) => {

//   if (event.target == saveButton.querySelector('i') || event.target == saveButton) {

//     if (dbResponse.status == 'success' && dbResponse.action == 'Not in database') {
//       const dbData = {
//         name: cityname,
//         title: fullName,
//         data: infoScores
//       }
//       const optionsSaveDb = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(dbData),
//       }

//       const saveDb = await fetch('/saveDb', optionsSaveDb);
//       const saveResponse = await saveDb.json();
//       console.log(saveResponse);

//     }

//     saveButton.firstElementChild.style.color = 'rgb(74, 126, 223)';

//   } else {
//     return;
//   }

//   console.log(event.target);
//   // if (event.target == saveButton.querySelector('i') || event.target == saveButton) {
//   //   saveButton.firstElementChild.style.color = 'rgb(74, 126, 223)';
//   // } else {
//   //   return;
//   // }
// });



// if (!dbDatas) {
//   urlScores = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_links"]["ua:scores"]["href"];
//   dataScores = await fetch(urlScores);
//   infoScores = await dataScores.json();
//   cityname = await (info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["full_name"]).split(',')[0];
//   nameAndState = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["full_name"];
//   continent = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["continent"];
//   // saveBtn.classList.toggle('btnNotSaved');
//   // saveBtn.classList.toggle('btnSaved');
//   // saveBtn.firstElementChild.style.color = 'rgb(126, 126, 126)';
// } else {
//   infoScores = dbDatas;
//   // Indicare dato presente in memoria - colore stella tasto save
//   console.log(dbDatas);
//   let completeNameArray = dbResponse.title.split(', ');
//   cityname = completeNameArray[0];
//   nameAndState = `${completeNameArray[0]}, ${completeNameArray[1]}`;
//   continent = completeNameArray[2];
//   saved = true;
//   console.log(saveBtn.firstChild);
//   // saveBtn.firstChild.style.color = 'rgb(74, 126, 223)';
// }


// appear tasto SAVE




//  saveDatas(event, saveButton, savingCount, fromDb, savePath, optionsSaveDb)
// // function saveDatas(saveButton, count, check)
// async function saveDatas(event, button, count, check, path, options) {
//   if ((event.target == button.querySelector('i') || event.target == button) && !(count > 0) && check == false) {
//     const saveDb = await fetch(path, options);
//     const saveResponse = await saveDb.json();
//     console.log(saveResponse);
//     button.querySelector('i').style.color = 'rgb(74, 126, 223)';
//     count++;
//     console.log(count);
//     console.log('Saved on db');
//   }

// }




// saveData(cityname, fullName, infoScores, saveButton, savingCount, fromDb);

// async function saveData(city, title, data, button, count, check) {
//   const dbData = {
//     name: city,
//     title: title,
//     data: data
//   }
//   const optionsSaveDb = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(dbData),
//   }
//   // console.log(dbData);
//   button.addEventListener('click', async (event) => {

//     if ((event.target == button.querySelector('i') || event.target == button) && !(count > 0) && (check == false)) {
//       // document.querySelector('.saveBtn').firstElementChild.style.color = 'rgb(74, 126, 223)';
//       const saveDb = await fetch('/saveDb', optionsSaveDb);
//       const saveResponse = await saveDb.json();
//       console.log(saveResponse);
//       button.querySelector('i').style.color = 'rgb(74, 126, 223)';
//       count++;
//       console.log(count);

//       console.log('Saved on db');
//     }

//     // console.log(this);

//   });

// }

// async function saveData(city, title, data, button, count, check) {
//   const dbData = {
//     name: city,
//     title: title,
//     data: data
//   }
//   const optionsSaveDb = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(dbData),
//   }

//   button.addEventListener('click', async (event) => {

//     if ((event.target == button.querySelector('i') || event.target == button) && !(count > 0) && (check == false)) {
//       const saveDb = await fetch('/saveDb', optionsSaveDb);
//       const saveResponse = await saveDb.json();
//       console.log(saveResponse);
//       button.querySelector('i').style.color = 'rgb(74, 126, 223)';
//       count++;
//       console.log(count);

//       console.log('Saved on db');
//     }


//   });

// }


// saveBtn.innerHTML = '<i class="fa-solid fa-star"></i>';





// async function appearElement(elem, delay, type) {
//   let opacity = 0.0;
//   if (elem) {
//     elem.style.display = type;
//     return await new Promise((resolve) => {
//       setTimeout(() => {
//         let interval = setInterval(() => {
//           opacity = opacity + 0.1;
//           elem.style.opacity = opacity;
//           if (opacity > 1.0) {
//             clearInterval(interval);
//           }
//         }, 20);
//       }, delay);
//       resolve();
//     });
//   } else {
//     return;
//   }


// }




// createIconBtn(document.querySelector('#resultsContainer'), '<i class="fa-solid fa-bars"></i>');

// let menuButton = document.querySelector('.menuBtn');
// let closeButton;

// menuButton.addEventListener('click', async (event) => {

//   if (event.target == menuButton.querySelector('i') || event.target == menuButton) {
//     const menu = await fetch('/menu');
//     const dbResponse = await menu.json();
//     // console.log(dbResponse.data);
//     const list = document.createElement('ul');
//     list.style.listStyle = 'none';
//     list.style.paddingLeft = '30px';
//     const menuContainer = document.createElement('div');
//     const header = document.createElement('h3');
//     header.textContent = 'Cities on database...';
//     header.style.color = 'white';
//     header.style.padding = '0px 20px 0px 20px';
//     menuContainer.style.width = '75vw';
//     // <-- oppure basarsi sulla distanza tra lato destro e inizio lente
//     menuContainer.style.height = 'fit-content';
//     menuContainer.style.transition = 'all 1s ease';
//     menuContainer.style.background = 'rgb(50, 50, 50, 0.95)';
//     menuContainer.style.border = '2px solid white';
//     menuContainer.style.borderRadius = '18px';
//     menuContainer.style.zIndex = 1000;

//     menuContainer.style.position = 'absolute';
//     menuContainer.style.top = (-((mainContainer.clientHeight / 100) * 90)) + 'px';
//     menuContainer.style.right = 0;

//     menuContainer.append(header);

//     // console.log(menuContainer);

//     mainContainer.append(menuContainer);
//     let arr = [];
//     for (let elem of dbResponse.data) {
//       arr.push(elem.name);
//     }
//     arr = arr.sort().map((elem) => {
//       let listElement = document.createElement('li');
//       listElement.insertAdjacentHTML('afterbegin', '<button></button>');
//       listElement.firstElementChild.textContent = elem;
//       listElement.style.margin = '6px';
//       listElement.firstElementChild.style.fontSize = '16px';
//       list.append(listElement);
//     });

//     console.log('menu reading...');

//     menuContainer.append(list);

//     let closeBtn;

//     setTimeout(() => {
//       // menuContainer.style.height = '0vh';
//       menuContainer.style.top = '-10px';
//       // menuContainer.style.transition = 'translate(0px 90vh)';
//       menuContainer.style.transition = `translate(0px ${menuContainer.clientHeight})`;
//       // menuButton.firstElementChild.remove();

//       menuButton.style.display = 'none';

//     }, 500);

//     createIconBtn(document.querySelector('#resultsContainer'), '<i class="fa-solid fa-xmark"></i>').then(() => {
//       // menuButton.remove();
//       closeBtn = document.querySelector('.fa-xmark').parentElement;
//       closeBtn.addEventListener('click', () => {
//         // menuButton.style.display = 'block';

//         menuContainer.style.top = (-((mainContainer.clientHeight / 100) * 90)) + 'px';

//         closeBtn.remove();
//         // createIconBtn(document.querySelector('#resultsContainer'), '<i class="fa-solid fa-bars"></i>');

//       });

//     });
//     // console.log(document.querySelector('.fa-xmark'));
//     // Sistemare problema doppio click veloce su button



//   }

// });




// leftBtn.addEventListener('click', () => {
//   console.log('click');
//   scrollTarget.scrollTo({
//     top: 0,
//     left: -(scrollTarget.children[0].clientWidth + 'px'),
//     behavior: 'smooth'
//   });
// });

// rightBtn.addEventListener('click', () => {
//   console.log('click');
//   scrollTarget.scrollTo({
//     top: 0,
//     left: scrollTarget.children[0].clientWidth + 'px',
//     behavior: 'smooth'
//   });
// });


// let initialPoint;

// style da mod. mettere in class CSS
// container.style.height = 'fit-content';
// container.style.maxHeight = '85vh';
// container.style.transition = 'all 0.8s ease';
// container.style.background = 'rgb(50, 50, 50, 0.95)';
// container.style.border = '2px solid white';
// container.style.borderRadius = '18px';
// container.style.zIndex = 1000;
// container.style.position = 'absolute';

// container.style.right = 0;
// container.style.overflowX = 'none';
// container.style.overflowY = 'scroll';
// style da mod. mettere in class CSS



// initialPoint = list.getBoundingClientRect().bottom;
// console.log(initialPoint);



// list.style.listStyle = 'none';
// list.style.paddingLeft = '5px';
// list.style.paddingRight = '5px';
// list.style.marginRight = '5px';
// list.style.marginLeft = '5px';
// list.style.width = 'fit-content';


// header.style.color = '#D4D4D4';
// header.style.fontSize = '23px';
// header.style.padding = '0px 20px 0px 20px';

// listElement.querySelector('button').style.margin = '0px';
// listElement.style.width = '68vw';
// listElement.style.margin = ' 6px 0px 6px 0px';
// listElement.style.border = '1px solid transparent';

// listElement.style.display = 'flex';
// listElement.style.flexDirection = 'row';
// listElement.style.justifyContent = 'flex-end';


// listElement.querySelector('button').style.width = '100%';
// listElement.querySelector('button').style.textAlign = 'right';
// listElement.querySelector('button').style.background = 'transparent';
// listElement.querySelector('button').style.color = 'white';
// listElement.querySelector('button').style.border = '1px solid transparent';

// listElement.firstElementChild.width = '100%';


// deleteBtn.style.display = 'grid';
// deleteBtn.style.placeItems = 'center';
// font size delete button
// deleteBtn.style.fontSize = '20px';
// font size delete button
// deleteBtn.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-circle-xmark"></i>');
// deleteBtn.style.color = '#E53935';
// deleteBtn.style.backgroundColor = 'transparent';
// deleteBtn.style.border = '1px solid transparent';
// deleteBtn.firstElementChild.style.border = '2px solid white';
// deleteBtn.firstElementChild.style.borderRadius = '100%';

// console.log(list.firstElementChild.getBoundingClientRect());

// console.log(list.children[0].getBoundingClientRect().height);
// console.log(list.firstElementChild.clientHeight);


// console.log(list.getBoundingClientRect());
// console.log(container.getBoundingClientRect());
// console.log(initialPoint);

// console.log('heigher');

// initialPoint = list.getBoundingClientRect().bottom;
// console.log(initialPoint);

// console.log(list.getBoundingClientRect());
// console.log(container.scrollHeight - container.clientHeight);
// console.log(container.scrollTop);
// console.log(container.scrollHeight);
// console.log(container.clientHeight);
// console.log(container.getBoundingClientRect());
// console.log(list.clientHeight);
// console.log(list.scrollHeight);
// console.log(list.scrollTop);
// console.log();
// console.log(downBtn);
// downBtn.style.bottom = '0px';
// console.log(container.getBoundingClientRect());

// console.log(list.getBoundingClientRect());

// if (initialPoint + list.getBoundingClientRect().bottom > container.scrollHeight - container.clientHeight) {
//   console.log('disappear now');
// }

// console.log(list.scrollTop);
// console.log(container.scrollTop);


// list.getBoundingClientRect() iniziale - list.getBoundingClientRect() finale ==> 178
// container.scrollHeight - container.clientHeight ==> 178

// extDiv.style.width = '18vw';
// extDiv.style.height = '18vw';

// spinner.style.width = '15vw';
// spinner.style.height = '15vw';
// spinner.style.animation = `3s linear infinity`

// icon.innerHTML = '<i class="fa-solid fa-globe"></i>';

// saveBtn.innerHTML = '<i class="fa-solid fa-star"></i>';
// if (saved) {
//   saveBtn.firstChild.style.color = 'rgb(74, 126, 223)';
// } else if (!saved) {
//   saveBtn.firstChild.style.color = 'rgb(126, 126, 126)';
// }

// let icon = document.createElement('i');
// icon.classList.add("fa-solid", "fa-star");

// saveBtn.append(icon);

// console.log(table.firstElementChild.children[0].firstElementChild);


// disappearElement(document.querySelector('.saveBtn'), 0);


// caches.open(cacheName).then(function (cache) {
//   // Do something with your cache
//   console.log(cache);
// });

// let deleteImg = document.querySelector('#imgContainer');

// let cache = new Cache();
// cache.delete(deleteImg).then(function (found) {
//   console.log(found);
//   // your cache entry has been deleted if found
// });

//   async function deleteOldCaches( currentCache ) {
//     const keys = await caches.keys();

//     for ( const key of keys ) {
//        const isOurCache = 'myapp-' === key.substr( 0, 6 );

//        if ( currentCache === key || ! isOurCache ) {
//           continue;
//        }

//        caches.delete( key );
//     }
//  }

//  try {
//     const data = await getData();
//     console.log( { data } );
//  } catch ( error ) {
//     console.error( { error } );
//  }


// location.reload();
// alert(document.documentElement.scrollHeight);
// alert(window.innerHeight);
// mainContainer.style.width = (document.documentElement.scrollHeight || document.body.scrollHeight) + 'px';
// mainContainer.style.width = window.innerHeight + 'px';
// document.documentElement.style.width = "100vh";
// document.body.style.width = "100vh";
// mainContainer.style.height = window.screen.height + 'px';
// mainContainer.style.height = (document.documentElement.clientHeight || document.body.clientHeight) + 'px';
// mainContainer.style.position = 'fixed';
// mainContainer.style.top = '0%';
// mainContainer.style
// mainContainer.style.height = (document.documentElement.scrollHeight || document.body.scrollHeight) + 'px';




// FUNZIONI ESSENZIALI DI COSTRUZIONE PASSATE IN CLASSES

// async function createIconBtn(container, icon) {
//   let menuBtn = document.createElement('button');
//   menuBtn.classList.add('menuBtn');
//   menuBtn.insertAdjacentHTML('afterbegin', icon);
//   container.append(menuBtn);
// }
// 

// function createMenu(mainElement) {
//   const main = mainElement;
//   createIconBtn(main, '<i class="fa-solid fa-bars"></i>');
//   const menuButton = document.querySelector('.menuBtn');
//   // 

//   menuButton.addEventListener('click', async (event) => {
//     if (event.target == menuButton.querySelector('i') || event.target == menuButton) {
//       const menu = await fetch('/menu');
//       const response = await menu.json();
//       const container = document.createElement('div');
//       const header = document.createElement('h3');
//       const list = document.createElement('ul');
//       // 
//       container.classList.add('menuContainer');
//       header.classList.add('menuHeader');
//       list.classList.add('menuList');
//       header.textContent = 'Cities on database...';
//       // 
//       // container.style.width = '75vw'; // <-- oppure basarsi sulla distanza tra lato destro e inizio lente
//       container.style.top = (-((main.scrollHeight / 100) * 70)) + 'px';


//       container.append(header);
//       main.append(container);
//       // 

//       let arr = [];
//       for (let elem of response.data) {
//         arr.push(elem.name);
//       }
//       //  
//       arr = arr.sort().map((elem) => {
//         // 
//         let listElement = document.createElement('li');
//         let deleteBtn = document.createElement('button');
//         listElement.insertAdjacentHTML('afterbegin', '<button></button>');
//         listElement.firstElementChild.textContent = elem;
//         // 

//         listElement.querySelector('button').classList.add('cityButton');
//         deleteBtn.classList.add('deleteButton');
//         deleteBtn.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-xmark"></i>');

//         listElement.append(deleteBtn);
//         list.append(listElement);

//         listElement.addEventListener('click', async (buttonEvent) => {
//           if (buttonEvent.target == listElement.querySelectorAll('button')[0]) {
//             clearTimeout(timeout);
//             inputField.value = listElement.firstElementChild.textContent;
//             container.style.top = (-((main.scrollHeight / 100) * 70)) + 'px';
//             closeBtn.remove();
//             // 
//             searchCity(inputField);
//             if (container.querySelector('.downDirection')) {
//               disappearElement(container.querySelector('.downDirection'), 0);
//             }
//             container.addEventListener('transitionend', () => {
//               container.remove();
//               header.remove();
//               list.remove();
//             });

//             inputContainer.animate([{
//               transform: `translateY(-${main.scrollHeight / 2 - inputContainer.clientHeight}px)`
//             }], {
//               duration: 1000,
//               easing: 'ease',
//               direction: 'normal',
//               iteration: 1,
//               fill: 'forwards'
//             });

//           } else if (buttonEvent.target == deleteBtn || buttonEvent.target == deleteBtn.firstElementChild) {
//             let cityName = buttonEvent.target.parentElement.firstElementChild.textContent || buttonEvent.target.parentElement.parentElement.firstElementChild.textContent;

//             const cancelData = {
//               name: cityName
//             }
//             console.log(cityName);
//             const cancelOptions = {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify(cancelData),
//             }

//             let cancelRequest = await fetch('/cancelDb', cancelOptions);
//             let cancelInfo = await cancelRequest.json();
//             console.log(cancelInfo);
//             listElement.remove();
//           }
//         });
//       });

//       container.append(list);
//       list.style.marginBottom = (list.children[0].getBoundingClientRect().height) * 2 + 'px';

//       // 
//       if (list.clientHeight > container.clientHeight) {

//         createNavButton('down', container, 'absolute');

//         container.addEventListener('scroll', () => {
//           let downBtn = container.querySelector('.downDirection');
//           downBtn.style.position = 'fixed';
//           downBtn.style.top = container.getBoundingClientRect().height - downBtn.getBoundingClientRect().height + container.getBoundingClientRect().y - 2 + 'px';
//           downBtn.style.overflow = 'hidden';

//           if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
//             let iElement = document.createElement('i');
//             iElement.classList.add('fa-solid', 'fa-chevron-up');
//             downBtn.firstElementChild.replaceWith(iElement);
//           } else {
//             let iElement = document.createElement('i');
//             iElement.classList.add('fa-solid', 'fa-chevron-down');
//             downBtn.firstElementChild.replaceWith(iElement);
//           }

//         });
//       } else {
//         // 
//         list.style.marginBottom = '20px';
//       }
//       // 
//       let timeout = setTimeout(() => {
//         container.style.top = '-10px';
//         container.style.transition = `translate(0px ${container.clientHeight})`;
//         document.querySelector('.fa-xmark').parentElement.style.display = 'block';
//       }, 500);
//       // 

//       let closeBtn;

//       createIconBtn(main, '<i class="fa-solid fa-xmark"></i>').then(() => {
//         // test let closeBtn....
//         closeBtn = document.querySelectorAll('.menuBtn')[1];
//         // console.log(closeBtn);
//         closeBtn.style.zIndex = 13;
//       }).then(() => {
//         closeBtn.addEventListener('click', () => {
//           if (container.querySelector('.downDirection')) {
//             disappearElement(container.querySelector('.downDirection'), 0);
//           }
//           clearTimeout(timeout);

//           closeBtn.remove();
//           container.style.top = (-((main.scrollHeight / 100) * 70)) + 'px';

//           container.addEventListener('transitionend', () => {
//             container.remove();
//             header.remove();
//             list.remove();
//           });

//         });

//       })



//     }
//   });
// }




// async function searchCity(inputElement, target) {

//   try {
//     const url = `https://api.teleport.org/api/cities/?search=${inputElement.value}&embed=city:search-results/city:item/city:country&embed=city:search-results/city:item/city:admin1_division&embed=city:search-results/city:item/city:urban_area&embed=ua:item/ua:scores&embed=ua:item/ua:images&embed=city:search-results/city:item/city:timezone/tz:offsets-now`;
//     // const data = await fetch(url);
//     // const info = await data.json();
//     const response = await axios.get(url);
//     // console.log(response["data"]);
//     const info = await response["data"];
//     console.log(info);

//     try {

//       const cityFromInput = (inputElement.value[0]).toUpperCase() + (inputElement.value).slice(1);
//       let cityname = (await (info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["full_name"]).split(',')[0]) || (cityFromInput);

//       const dbQueryName = {
//         name: cityname,
//       }
//       const optionsQueryDb = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(dbQueryName),
//       }
//       const dbQuery = await fetch('/queryDb', optionsQueryDb);
//       const dbResponse = await dbQuery.json();
//       const dbDatas = dbResponse.data;

//       let urlScores;
//       let dataScores;
//       let infoScores;
//       let nameAndState;
//       let continent;

//       if (document.querySelector('.saveBtn')) {
//         document.querySelector('.saveBtn').remove();
//       }

//       createSaveBtn(document.querySelector('#mainContainer'));

//       let saveButton = document.querySelector('.saveBtn');
//       let fullName;
//       let ranking;
//       let fromDb = false;
//       let savingCount = 0;

//       if (dbResponse.status == 'success' && dbResponse.action == 'Not in database') {

//         urlScores = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_links"]["ua:scores"]["href"];
//         dataScores = await fetch(urlScores);
//         infoScores = await dataScores.json();
//         console.log(infoScores);
//         nameAndState = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["full_name"];
//         continent = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["continent"];
//         fullName = `${nameAndState}, ${continent}`;
//         ranking = await infoScores["teleport_city_score"];
//         console.log(ranking);
//         saveButton.querySelector('i').style.color = 'rgb(126, 126, 126)';
//         appearElement(document.querySelector('.saveBtn'), 500, 'grid');

//         const dbData = {
//           name: cityname,
//           title: fullName,
//           data: infoScores
//         }

//         const optionsSaveDb = {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(dbData),
//         }

//         saveButton.addEventListener('click', async (event) => {

//           if ((event.target == saveButton.querySelector('i') || event.target == saveButton) && !(savingCount > 0) && (fromDb == false)) {
//             const saveDb = await fetch('/saveDb', optionsSaveDb);
//             const saveResponse = await saveDb.json();
//             console.log(saveResponse);
//             saveButton.querySelector('i').style.color = 'rgb(74, 126, 223)';
//             savingCount++;
//             console.log('Saved on db');
//           }
//         });
//       } else if (dbResponse.status == 'success' && dbResponse.action == 'read from db') {
//         appearElement(document.querySelector('.saveBtn'), 500, 'grid');
//         infoScores = dbDatas;
//         console.log(dbDatas);
//         let completeNameArray = dbResponse.title.split(', ');
//         cityname = completeNameArray[0];
//         nameAndState = `${completeNameArray[0]}, ${completeNameArray[1]}`;
//         continent = completeNameArray[2];
//         ranking = dbDatas["teleport_city_score"];
//         console.log(ranking);
//         savingCount = 1;
//         fromDb = true;
//         saveButton.querySelector('i').style.color = 'rgb(74, 126, 223)';
//         // console.log('Read from db');
//       }

//       fullName = `${nameAndState}, ${continent}`;

//       if (mainContainer.clientWidth > mainContainer.clientHeight) {
//         setInfoButtons(document.querySelector('#resultsContainer'));
//       } else if (mainContainer.clientWidth < mainContainer.clientHeight) {
//         createPointButtons(document.querySelector('#resultsContainer'));
//       }
//       const cityDescription = await infoScores["summary"];

//       // createTitle(document.querySelectorAll('.dataDisplay')[0], nameAndState, continent).then(() => {
//       createDescription(nameAndState, continent, ranking, document.querySelector('.descriptionBox'), cityDescription, document.querySelectorAll('.dataDisplay')[0]);
//       let descriptionBox = document.querySelector('.descriptionBox');
//       let pElemsHeight = 0;
//       for (let pElem of descriptionBox.children) {
//         pElemsHeight += pElem.getBoundingClientRect().height;
//         // console.log(pElem.getBoundingClientRect().height);
//       }
//       // console.log(pElemsHeight);
//       // console.log(descriptionBox);
//       // console.log(descriptionBox.previousElementSibling);
//       // });

//       const tableData = infoScores["categories"];
//       const dataFirstPart = tableData.slice(0, 9);
//       const dataSecondPart = tableData.slice(9, tableData.length);

//       createDataTable(document.querySelectorAll('table')[0], dataFirstPart, document.querySelectorAll('.dataDisplay')[1]);
//       createDataTable(document.querySelectorAll('table')[1], dataSecondPart, document.querySelectorAll('.dataDisplay')[2]);

//       retrievePixabay(cityname).then(() => {

//         target.value = '';
//         target.placeholder = 'Enter a new city...';
//         target.blur();

//         let imgContainer = document.querySelector('#imgContainer');
//         let firstPath = 'cannyImage/edge.png';
//         let secondImgContainer = document.querySelector('#secondImgContainer');
//         let secondPath = 'tempImage/image.png';

//         loadImage(secondImgContainer.querySelector('img'), secondImgContainer, document.querySelector('#resultsContainer'), secondPath);
//         loadImage(imgContainer.querySelector('img'), imgContainer, document.querySelector('#resultsContainer'), firstPath);

//       }).catch(error => {
//         retrieveTeleportImage(cityname).then(() => {
//           target.value = '';
//           target.placeholder = 'Enter a new city...';
//           target.blur();

//           let imgContainer = document.querySelector('#imgContainer');
//           let firstPath = 'cannyImage/edge.png';
//           let secondImgContainer = document.querySelector('#secondImgContainer');
//           let secondPath = 'tempImage/image.png';

//           loadImage(secondImgContainer.querySelector('img'), secondImgContainer, document.querySelector('#resultsContainer'), secondPath);
//           loadImage(imgContainer.querySelector('img'), imgContainer, document.querySelector('#resultsContainer'), firstPath);

//         })
//         // Qui alternativa Wikipedia a Pixabay in caso di immagine mancante
//       });
//     } catch (error) {
//       console.log(error);
//       if (document.querySelector('.descriptionBox')) {
//         disappearElement(document.querySelector('.descriptionBox'), 0);
//         disappearElement(document.querySelectorAll('table')[0], 0);
//         disappearElement(document.querySelectorAll('table')[1], 0);
//       }
//       retrieveAlternativeCities(info, inputElement.value);

//     }

//   } catch (error) {
//     console.log(error);
//     console.log('City not found');
//     target.value = '';
//     target.placeholder = 'Enter a new city...';
//     target.blur();
//   }
// }


// async function createTitle(container, state, globalContinent) {
//   if (document.querySelector('h2')) {
//     document.querySelector('h2').textContent = `${await state}, ${ await globalContinent}`;
//   } else {
//     let header = document.createElement('h2');
//     header.textContent = `${await state}, ${ await globalContinent}`;
//     container.append(header);
//   }
// }


// FUNZIONI ESSENZIALI DI COSTRUZIONE PASSATE IN CLASSES







// Node

// .then(() => {
//   console.log('111');
//   app.use(express.static('/cannyImage/edge.png'));
//   console.log('Ok');

// let img = new ReadableStream(result);
// console.log(img);
// })
// .then(() => {
//   if (fs.existsSync('public/cannyImage/edge.png')) {
//     console.log('EXIST');
//   }
// })

// if (fs.existsSync('public/cannyimage/edge.png')) {
//   console.log('EXIST');
// }

// Wikipedia Images
// const urlWikipedia = `https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=${cityName}&prop=pageimages&format=json&pithumbsize=800`
// const fetchDataWikiImage = await fetch(urlWikipedia);
// let jsonWiki = await fetchDataWikiImage.json();
// let fileUrl = await jsonWiki["query"]["pages"][Object.keys(jsonWiki["query"]["pages"])]["thumbnail"]["source"];
// Wikipedia Images

// app.use(express.static('public/cannyImage/edge.png'));
// fs.readFile('public/cannyimage/edge.png', 'base64', (err, data) => {
//   // let writeStream = fs.createWriteStream('./output');
//   // console.log(data);
// })
// res.static('public/cannyImage');





// app.post('/api', (request, response) => {
//   console.log('Made a request...');
//   const data = request.body;
//   // console.log(data);
//   let dbdata;
//   console.log('NAME ==> ' + data.name);
//   database.find({
//     name: data.name
//   }, function (error, docs) {
//     if (error) {
//       response.end();
//       return;
//     } else if (docs.length == 0) {
//       console.log('Not in database');
//       database.insert(data);
//       response.json({
//         status: 'success',
//         action: 'saved',
//         name: data.name,
//       });
//     } else {
//       console.log('HERE read from database');
//       dbdata = docs[0]["name"];
//       console.log(dbdata);

//       response.json({
//         status: 'success',
//         action: 'read from db',
//         name: data.name,
//         data: docs[0]["data"],
//         // passare a app.get('/api).....
//       });
//     }
//   });
//   // response.json({...});
// })



// Per wikipedia images?
// const urlWiki = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${inputField.value}`;


// console.log(wikiJson);
// console.log((wikiJson["query"]["pages"])[Object.keys(wikiJson["query"]["pages"])]["thumbnail"]["source"]);
// return new Promise;
// return wikiLink = await (wikiJson["query"]["pages"])[Object.keys(wikiJson["query"]["pages"])]["thumbnail"]["source"];