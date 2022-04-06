let mainContainer = document.querySelector('#mainContainer');
let inputField = document.querySelector('#insertInput');
let inputContainer = inputField.parentElement;

let UrbanAreasCompleteList = [];

let arr = [];


getCompleteListUrbanAreas(UrbanAreasCompleteList);
createMenu(mainContainer);

// inputContainer.style.position = 'absolute';
inputContainer.style.top = document.documentElement.clientHeight / 2 - inputContainer.clientHeight / 1.5 + 'px';

inputField.addEventListener('change', async (event) => {

  inputContainer.animate([
    // {
    //   transform: 'translateY(0px)'
    // },
    {
      transform: `translateY(-${document.documentElement.clientHeight / 2 - inputContainer.clientHeight}px)`
    }
  ], {
    duration: 1000,
    easing: 'ease',
    direction: 'normal',
    iteration: 1,
    fill: 'forwards'
  });

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

  searchCity(inputField, event.target);

});

async function retrievePixabay(name) {
  const wikiUrl = `wiki/${name}`;
  // const wikiResponse = await fetch(wikiUrl);
  // const wikiJson = await wikiResponse.json();
  const wikiResponse = await axios.get(wikiUrl);
  // const wikiJson = await wikiResponse.json();
  const pixabayURL = await wikiResponse["data"]["hits"][0]["largeImageURL"];
  return pixabayURL;
}

async function retrieveTeleportImage(name) {
  const telUrl = `wiki/${name}`;
  // const telResponse = await fetch(telUrl);
  // const telJson = await telResponse.json();
  const telResponse = await axios.get(telUrl);
  // const telJson = await telResponse.json();
  console.log(telResponse["data"]);
}

let imgCanvas;

async function cityScores(city) {
  const url = `https://api.teleport.org/api/cities/?search=${city}&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity%3Aurban_area%2Fua%3Ascores`
  // const data = await fetch(url);
  // const json = await data.json();
  const response = await axios.get(url);
  // const json = await data.json();
  console.log(response["data"]);
}

async function getCompleteListUrbanAreas(arr) {
  const url = `https://api.teleport.org/api/urban_areas`;
  // let completeDataset = await fetch(url);
  // let completeUAList = await completeDataset.json();
  let completeDataset = await axios.get(url);
  // let completeUAList = await completeDataset.json();
  let completeUAListTotal = completeDataset["data"]["_links"]["ua:item"];

  for (let elem of completeUAListTotal) {
    arr.push(elem["name"]);
  }
  return arr;
}


async function filterCityList(city, controller) {
  const url = `https://api.teleport.org/api/cities/?search=${city}`;
  // const data = await fetch(url);
  // const json = await data.json();
  const dataJson = await axios.get(url);
  // const json = await data.json();
  const detailsUrl = await dataJson["data"]["_embedded"]["city:search-results"][0]["_links"]["city:item"]["href"];
  // const detailsData = await fetch(detailsUrl);
  // const detailsJson = await detailsData.json();
  const detailsData = await axios.get(detailsUrl);
  // const detailsJson = await detailsData.json();
  const href = await detailsData["data"]["_links"]["city:country"]["href"];
  const iso_alpha2 = await (href.split('/')[5]).split(':')[1];

  if (iso_alpha2 == controller) {
    return city;
  } else {
    return;
  }
}

let completeCitiesOfACountryArray = [];

async function getRegionsList(country) {
  const url = `https://api.teleport.org/api/countries/iso_alpha2%3A${country}/admin1_divisions/`;
  // const data = await fetch(url);
  // const regionsJson = await data.json();
  const regionsJson = await axios.get(url);
  // const regionsJson = await data.json();
  for await (let elem of regionsJson["data"]["_links"]["a1:items"]) {
    const regionsUrlforCities = `${elem["href"]}/cities`;
    // const dataByRegion = await fetch(regionsUrlforCities);
    // const jsonByRegion = await dataByRegion.json();
    const dataByRegion = await axios.get(regionsUrlforCities);
    // const jsonByRegion = await dataByRegion.json();
    for await (let elem of dataByRegion["data"]["_links"]["city:items"]) {
      completeCitiesOfACountryArray.push(elem["name"]);
    }
  }
  return completeCitiesOfACountryArray;

}

async function retrieveAlternativeCities(info, input) {
  let resultsCont = document.querySelector('#resultsContainer');
  let indication = document.createElement('p');
  indication.classList.add('indications');

  if (document.querySelector('.saveBtn')) {
    document.querySelector('.saveBtn').remove();
  }

  try {
    // inizio spinner
    resultsCont.scrollTo(0, 0);
    let secondCityArray = [];

    if (document.querySelector('h2')) {
      disappearElement(document.querySelector('h2'), 0);
    }
    indication.textContent = `The city ${input} is not been found - searching for other cities in this country...`;
    resultsCont.append(indication);

    createSpinner(resultsCont);

    let country = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:country"]["iso_alpha2"];
    let data = await getRegionsList(country);
    let alternatesContainer = document.createElement('fieldset');
    let legend = document.createElement('legend');
    legend.style.color = '#4a7edf';
    legend.style.fontWeight = 700;
    // legend.style.textShadow = '3px 2px 3px rgb(15 15 15)';
    legend.style.paddingTop = '10px';
    legend.style.paddingLeft = '20px';
    legend.style.paddingBottom = '10px';
    legend.style.paddingRight = '20px';
    legend.style.borderRadius = '12px';
    legend.style.background = 'rgb(221 227 233)';
    legend.style.border = '6px solid rgb(105, 98, 91)';
    legend.textContent = 'Cities available for this Country:';
    alternatesContainer.append(legend);
    // alternatesContainer.offsetTop = '100px';
    alternatesContainer.classList.add('alternatesContainer');
    // createSpinner();
    // 20%
    let firstCityArray = [];
    for (let elem of UrbanAreasCompleteList) {
      for (let city of data) {
        if (city === elem) {
          firstCityArray.push(elem);
        }
      }
    }
    // 40%
    for (let elem of firstCityArray) {
      let result = await filterCityList(elem, country);
      if (elem && !secondCityArray.includes(elem)) {
        secondCityArray.push(result);
      }
    }
    // 60%
    secondCityArray = secondCityArray.filter((elem) => {
      return elem !== undefined;
    });

    // 80%
    for (let i = 0; i < secondCityArray.length; i++) {
      let btn = document.createElement('button');
      btn.textContent = secondCityArray[i];
      alternatesContainer.append(btn);
      btn.classList.add('altButtons');
    }
    // 100%
    document.querySelector('.spinnerContainer').remove();
    // disappearElement(document.querySelector('.spinnerContainer'), 0);
    // fine spinner
    indication.textContent = `The city ${input} is not been found.`;
    resultsCont.append(alternatesContainer);
    if (secondCityArray.length > 10) {
      alternatesContainer.style.overflowY = 'scroll';
      createNavButton('down', alternatesContainer, 'fixed');
      // alternatesContainer.querySelector('.downDirection').style.top = alternatesContainer.getBoundingClientRect().top + alternatesContainer.clientHeight - alternatesContainer.querySelector('.downDirection').getBoundingClientRect().height - (alternatesContainer.clientTop) + 'px';

      // alternatesContainer.querySelector('.downDirection').style.top = alternatesContainer.getBoundingClientRect().bottom - 2 * alternatesContainer.querySelector('.downDirection').scrollHeight + (alternatesContainer.clientTop / 2) + 'px';
      // let downBtn = alternatesContainer.querySelector('.downDirection');
      // downBtn.style.top = alternatesContainer.getBoundingClientRect().height - downBtn.getBoundingClientRect().height + alternatesContainer.getBoundingClientRect().y - 2 + 'px';
      // alternatesContainer.querySelector('.downDirection').style.top = alternatesContainer.getBoundingClientRect().height - alternatesContainer.querySelector('.downDirection').getBoundingClientRect().height + alternatesContainer.getBoundingClientRect().y - 2 + 'px';
      alternatesContainer.querySelector('.downDirection').style.height = '8vh';
      alternatesContainer.querySelector('.downDirection').style.width = alternatesContainer.scrollWidth + 2 + 'px';
      alternatesContainer.querySelector('.downDirection').style.border = '0px solid transparent';
      alternatesContainer.querySelector('.downDirection').style.padding = 0;
      alternatesContainer.querySelector('.downDirection').style.margin = 0;
      alternatesContainer.querySelector('.downDirection').style.borderRadius = '0px 0px 16px 16px';
      alternatesContainer.querySelector('.downDirection').style.zIndex = 100;

      alternatesContainer.querySelector('.downDirection').style.top = alternatesContainer.getBoundingClientRect().height - alternatesContainer.querySelector('.downDirection').getBoundingClientRect().height + alternatesContainer.getBoundingClientRect().y - (alternatesContainer.clientTop / 2) + 'px';

      // Here
      // alternatesContainer.querySelectorAll('.altButtons')[alternatesContainer.querySelectorAll('.altButtons').length - 1].style.marginBottom = '40%';
      alternatesContainer.querySelectorAll('.altButtons')[alternatesContainer.querySelectorAll('.altButtons').length - 1].classList.add('lastMargin');
      // Here

      // console.log(alternatesContainer.lastElementChild);
      // alternatesContainer.lastElementChild.marginBottom = '20%';
      // alternatesContainer.querySelector('.downDirection').removeEventListener();

      alternatesContainer.addEventListener('scroll', () => {
        let downBtn = alternatesContainer.querySelector('.downDirection');
        downBtn.style.position = 'fixed';
        downBtn.style.top = alternatesContainer.getBoundingClientRect().height - downBtn.getBoundingClientRect().height + alternatesContainer.getBoundingClientRect().y - (alternatesContainer.clientTop / 2) + 'px';
        downBtn.style.overflow = 'hidden';

        if (alternatesContainer.scrollTop >= alternatesContainer.scrollHeight - alternatesContainer.clientHeight) {
          let iElement = document.createElement('i');
          iElement.classList.add('fa-solid', 'fa-chevron-up');
          downBtn.firstElementChild.replaceWith(iElement);
        } else {
          let iElement = document.createElement('i');
          iElement.classList.add('fa-solid', 'fa-chevron-down');
          downBtn.firstElementChild.replaceWith(iElement);
        }

      });
    }


    inputField.value = '';
    inputField.placeholder = 'Enter a new city...';
    inputField.blur();

    inputField.addEventListener('change', () => {
      disappearElement(alternatesContainer, 0).then(() => {
        if (document.querySelector('.descriptionBox')) {
          appearElement(document.querySelector('.descriptionBox'), 500);
          appearElement(document.querySelectorAll('table')[0], 500);
          appearElement(document.querySelectorAll('table')[1], 500);
          appearElement(document.querySelector('h2'), 500);
          appearElement(document.querySelector('.saveBtn'), 500);
        }
        indication.textContent = '';
        disappearElement(indication, 0);
      });
    });

    alternatesContainer.addEventListener('click', (event) => {
      if (event.target.tagName == 'BUTTON' && event.target !== document.querySelector('.downDirection')) {
        inputField.value = event.target.textContent;
        disappearElement(alternatesContainer, 0).then(() => {
          searchCity(inputField, inputField).then(() => {
            appearElement(document.querySelector('.descriptionBox'), 500);
            appearElement(document.querySelectorAll('table')[0], 500);
            appearElement(document.querySelectorAll('table')[1], 500);
            appearElement(document.querySelector('h2'), 500);
            appearElement(document.querySelector('.saveBtn'), 500);
          });
        });
        indication.textContent = '';
        disappearElement(indication, 0);
      } else {
        return;
      }
    });

  } catch (error) {
    console.log(error);
    inputField.value = '';
    inputField.placeholder = 'Enter a new city...';
    inputField.blur();
    indication.textContent = `The City ${input} is not been found or there is no city with this name - try to reinsert the city name or check your internet connection`;
    resultsCont.append(indication);
    document.querySelector('.spinnerContainer').remove();
    inputField.addEventListener('change', () => {
      disappearElement(indication, 0).then(() => {
        if (document.querySelector('.descriptionBox')) {
          appearElement(document.querySelector('.descriptionBox'), 500);
          appearElement(document.querySelectorAll('table')[0], 500);
          appearElement(document.querySelectorAll('table')[1], 500);
          appearElement(document.querySelector('h2'), 500);
          appearElement(document.querySelector('.saveBtn'), 500);
        }
      });
    });
  }
}

async function createTitle(container, state, globalContinent) {
  if (document.querySelector('h2')) {
    document.querySelector('h2').textContent = `${await state}, ${ await globalContinent}`;
  } else {
    let header = document.createElement('h2');
    header.textContent = `${await state}, ${ await globalContinent}`;
    container.append(header);
  }
}

function createDescription(textBox, description, container) {
  if (textBox) {
    textBox.innerHTML = description;
  } else {
    let textSpace = document.createElement('div');
    textSpace.classList.add('descriptionBox');
    textSpace.insertAdjacentHTML('afterbegin', description);
    container.append(textSpace);
  }
}

function createDataTable(table, jsonData, container) {
  if (table) {
    for (let i = 0; i < jsonData.length; i++) {
      table.querySelectorAll('th')[i].textContent = jsonData[jsonData.indexOf(jsonData[i])]["name"];
      table.querySelectorAll('td')[i].textContent = `${(jsonData[jsonData.indexOf(jsonData[i])]["score_out_of_10"]).toFixed(1)} / 10`;
    }
  } else {
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    for (let i = 0; i < jsonData.length; i++) {
      let tr = document.createElement('tr');
      tbody.append(tr);
      let th = document.createElement('th');
      th.textContent = jsonData[jsonData.indexOf(jsonData[i])]["name"];
      tr.append(th);
      let td = document.createElement('td');
      td.textContent = `${(jsonData[jsonData.indexOf(jsonData[i])]["score_out_of_10"]).toFixed(1)} / 10`;
      tr.append(td);
    }

    table.append(tbody);
    container.append(table);
    table.firstElementChild.children[0].firstElementChild.style.borderRadius = '18px 0px 0px 0px';
    table.firstElementChild.children[0].lastElementChild.style.borderRadius = '0px 18px 0px 0px';
    table.firstElementChild.children[table.firstElementChild.children.length - 1].firstElementChild.style.borderRadius = '0px 0px 0px 18px';
    table.firstElementChild.children[table.firstElementChild.children.length - 1].lastElementChild.style.borderRadius = '0px 0px 18px 0px';
  }
}

function createSaveBtn(container) {
  let saveBtn = document.createElement('button');
  saveBtn.classList.add('saveBtn');
  saveBtn.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-star"></i>');
  container.append(saveBtn);
}

function loadImage(image, container, resultsContainer, path) {
  if (image) {
    // image.delete();
    image.style.width = "250vw";
    image.style.height = (container.clientHeight * 1.1) + "px";;
    if (container.clientHeight < container.clientWidth) {
      image.style.width = "100vw";
      image.style.height = container.clientHeight + "px";
      image.style.left = "-10%";
      image.style.top = "-50vh";
    } else {
      image.style.position = "relative";
      image.style.left = "-10%";
      image.style.bottom = "0px";
      // image.style.width = '300vw';
      // image.style.height = 'auto';
    }

    image.src = '';

    try {
      setTimeout(async () => {
        // image.src = '';
        image.src = await path;
      }, 1200);
      image.addEventListener('load', () => {
        // image.src = await path;
        // console.log('load...');
        container.append(image);
      });
    } catch {
      setTimeout(async () => {
        // image.src = '';
        image.src = await path;
      }, 1200);
      image.addEventListener('load', () => {
        // image.src = await path;
        // console.log('load...');
        container.append(image);
      });
    }


    resultsContainer.scrollTo(0, 0);

    resultsContainer.addEventListener('scroll', (event) => {
      image.style.left = (-((event.target.scrollLeft / (event.target.scrollWidth - event.target.clientWidth)) * 100)) - 10 + '%';
    });
  } else {
    let image = document.createElement('img');
    image.style.width = "250vw";
    image.style.height = (container.clientHeight * 1.1) + "px";
    // image.style.width = "auto";
    // image.style.height = container.clientHeight + "px";
    if (container.clientHeight < container.clientWidth) {
      image.style.width = "100vw";
      image.style.height = container.clientHeight + "px";
      image.style.top = "-50vh";
      image.style.left = "-10%";

    } else {
      image.style.position = "relative";
      image.style.left = "-10%";
      image.style.bottom = "0px";
    }
    image.src = '';

    try {
      setTimeout(async () => {
        image.src = await path;
      }, 1200);

      image.addEventListener('load', () => {
        // image.src = await path;
        // console.log('load...');
        container.append(image);
      });
    } catch {
      setTimeout(async () => {
        image.src = await path;
      }, 1200);

      image.addEventListener('load', () => {
        // image.src = await path;
        // console.log('load...');
        container.append(image);
      });
    }

    resultsContainer.addEventListener('scroll', (event) => {
      image.style.left = (-((event.target.scrollLeft / (event.target.scrollWidth - event.target.clientWidth)) * 100)) - 10 + '%';
    });
  }
}

async function searchCity(inputElement, target) {

  try {
    const url = `https://api.teleport.org/api/cities/?search=${inputElement.value}&embed=city:search-results/city:item/city:country&embed=city:search-results/city:item/city:admin1_division&embed=city:search-results/city:item/city:urban_area&embed=ua:item/ua:scores&embed=ua:item/ua:images&embed=city:search-results/city:item/city:timezone/tz:offsets-now`;
    // const data = await fetch(url);
    // const info = await data.json();
    const response = await axios.get(url);
    // console.log(response["data"]);
    const info = await response["data"];

    try {

      const cityFromInput = (inputElement.value[0]).toUpperCase() + (inputElement.value).slice(1);
      let cityname = (await (info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["full_name"]).split(',')[0]) || (cityFromInput);

      const dbQueryName = {
        name: cityname,
      }
      const optionsQueryDb = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dbQueryName),
      }
      const dbQuery = await fetch('/queryDb', optionsQueryDb);
      const dbResponse = await dbQuery.json();
      const dbDatas = dbResponse.data;

      let urlScores;
      let dataScores;
      let infoScores;
      let nameAndState;
      let continent;

      if (document.querySelector('.saveBtn')) {
        document.querySelector('.saveBtn').remove();
      }

      createSaveBtn(document.querySelector('#resultsContainer'));

      let saveButton = document.querySelector('.saveBtn');
      let fullName;
      let fromDb = false;
      let savingCount = 0;

      if (dbResponse.status == 'success' && dbResponse.action == 'Not in database') {

        urlScores = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_links"]["ua:scores"]["href"];
        dataScores = await fetch(urlScores);
        infoScores = await dataScores.json();
        nameAndState = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["full_name"];
        continent = await info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["continent"];
        fullName = `${nameAndState}, ${continent}`;
        saveButton.querySelector('i').style.color = 'rgb(126, 126, 126)';
        appearElement(document.querySelector('.saveBtn'), 500);

        const dbData = {
          name: cityname,
          title: fullName,
          data: infoScores
        }

        const optionsSaveDb = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dbData),
        }

        saveButton.addEventListener('click', async (event) => {

          if ((event.target == saveButton.querySelector('i') || event.target == saveButton) && !(savingCount > 0) && (fromDb == false)) {
            const saveDb = await fetch('/saveDb', optionsSaveDb);
            const saveResponse = await saveDb.json();
            console.log(saveResponse);
            saveButton.querySelector('i').style.color = 'rgb(74, 126, 223)';
            savingCount++;
            console.log('Saved on db');
          }
        });
      } else if (dbResponse.status == 'success' && dbResponse.action == 'read from db') {
        appearElement(document.querySelector('.saveBtn'), 500);
        infoScores = dbDatas;
        let completeNameArray = dbResponse.title.split(', ');
        cityname = completeNameArray[0];
        nameAndState = `${completeNameArray[0]}, ${completeNameArray[1]}`;
        continent = completeNameArray[2];
        savingCount = 1;
        fromDb = true;
        saveButton.querySelector('i').style.color = 'rgb(74, 126, 223)';
        // console.log('Read from db');
      }

      fullName = `${nameAndState}, ${continent}`;

      if (mainContainer.clientWidth > mainContainer.clientHeight) {
        setInfoButtons(document.querySelector('#resultsContainer'));
      } else if (mainContainer.clientWidth < mainContainer.clientHeight) {
        createPointButtons(document.querySelector('#resultsContainer'));
      }

      createTitle(document.querySelector('#resultsContainer'), nameAndState, continent);
      const cityDescription = await infoScores["summary"];
      createDescription(document.querySelector('.descriptionBox'), cityDescription, document.querySelectorAll('.dataDisplay')[0]);
      const tableData = infoScores["categories"];
      const dataFirstPart = tableData.slice(0, 9);
      const dataSecondPart = tableData.slice(9, tableData.length);

      createDataTable(document.querySelectorAll('table')[0], dataFirstPart, document.querySelectorAll('.dataDisplay')[1]);
      createDataTable(document.querySelectorAll('table')[1], dataSecondPart, document.querySelectorAll('.dataDisplay')[2]);

      retrievePixabay(cityname).then(() => {

        target.value = '';
        target.placeholder = 'Enter a new city...';
        target.blur();

        let imgContainer = document.querySelector('#imgContainer');
        let firstPath = 'cannyImage/edge.png';
        let secondImgContainer = document.querySelector('#secondImgContainer');
        let secondPath = 'tempImage/image.png';

        loadImage(secondImgContainer.querySelector('img'), secondImgContainer, document.querySelector('#resultsContainer'), secondPath);
        loadImage(imgContainer.querySelector('img'), imgContainer, document.querySelector('#resultsContainer'), firstPath);

      }).catch(error => {
        retrieveTeleportImage(cityname).then(() => {
          target.value = '';
          target.placeholder = 'Enter a new city...';
          target.blur();

          let imgContainer = document.querySelector('#imgContainer');
          let firstPath = 'cannyImage/edge.png';
          let secondImgContainer = document.querySelector('#secondImgContainer');
          let secondPath = 'tempImage/image.png';

          loadImage(secondImgContainer.querySelector('img'), secondImgContainer, document.querySelector('#resultsContainer'), secondPath);
          loadImage(imgContainer.querySelector('img'), imgContainer, document.querySelector('#resultsContainer'), firstPath);

        })
        // Qui alternativa Wikipedia a Pixabay in caso di immagine mancante
      });
    } catch (error) {
      console.log(error);
      if (document.querySelector('.descriptionBox')) {
        disappearElement(document.querySelector('.descriptionBox'), 0);
        disappearElement(document.querySelectorAll('table')[0], 0);
        disappearElement(document.querySelectorAll('table')[1], 0);
      }
      retrieveAlternativeCities(info, inputElement.value);

    }

  } catch (error) {
    console.log(error);
    console.log('City not found');
    target.value = '';
    target.placeholder = 'Enter a new city...';
    target.blur();
  }
}

async function disappearElement(elem, delay) {
  let opacity = 1.0;
  return await new Promise((resolve) => {
    setTimeout(() => {
      let interval = setInterval(() => {
        opacity = opacity - 0.1;
        elem.style.opacity = opacity;
        if (opacity < 0) {
          clearInterval(interval);
          elem.style.display = 'none';
        }
      }, 20);
    }, delay);
    resolve();
  });
}

async function appearElement(elem, delay) {
  let opacity = 0.0;
  if (elem) {
    elem.style.display = 'block';
    return await new Promise((resolve) => {
      setTimeout(() => {
        let interval = setInterval(() => {
          opacity = opacity + 0.1;
          elem.style.opacity = opacity;
          if (opacity > 1.0) {
            clearInterval(interval);
          }
        }, 20);
      }, delay);
      resolve();
    });
  } else {
    return;
  }


}

function createSpinner(container) {
  let spinnerContainer = document.createElement('div');
  // spinnerContainer resta fermo
  spinnerContainer.classList.add('spinnerContainer');
  let extDiv = document.createElement('div');
  extDiv.classList.add('circleSegments');
  spinnerContainer.append(extDiv);
  let spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinnerContainer.append(spinner);
  let icon = document.createElement('div');
  icon.classList.add('spinnerIcon');
  icon.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-globe"></i>');
  spinnerContainer.append(icon);
  container.append(spinnerContainer);

}

function createNavButton(direction, container, position) {
  let directionBtn = document.createElement('button');
  // directionBtn.style.display = 'grid';
  directionBtn.style.placeItems = 'center';
  directionBtn.classList.add('directionBtn');
  directionBtn.style.position = position;

  switch (direction) {
    case 'left':
      directionBtn.style.width = '5vw';
      directionBtn.style.height = '50vh';
      directionBtn.style.left = '0%';
      directionBtn.style.borderRadius = '0px 10px 10px 0px';
      directionBtn.classList.add('leftDirection');
      directionBtn.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-chevron-left"></i>');
      break;
    case 'right':
      directionBtn.style.width = '5vw';
      directionBtn.style.height = '50vh';
      directionBtn.style.right = '0%';
      directionBtn.style.borderRadius = '10px 0px 0px 10px';
      directionBtn.classList.add('rightDirection');
      directionBtn.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-chevron-right"></i>');
      break;
    case 'down':
      directionBtn.style.width = container.clientWidth + 'px';
      directionBtn.style.height = container.clientHeight / 11 + 'px';
      directionBtn.classList.add('downDirection');
      directionBtn.style.bottom = '0px';
      directionBtn.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-chevron-down"></i>');
      break;
    case 'up':
      directionBtn.style.width = '50vw';
      directionBtn.style.height = '5vh';
      directionBtn.style.left = '0%';
      directionBtn.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-chevron-up"></i>');
      break;
  }
  container.append(directionBtn);
}

function setInfoButtons(scrollTarget) {
  createNavButton('left', mainContainer, 'fixed');
  createNavButton('right', mainContainer, 'fixed');
  let leftBtn = document.querySelector('.leftDirection');
  let rightBtn = document.querySelector('.rightDirection');

  scrollTarget.addEventListener('scroll', (event) => {

    if (event.target.scrollLeft >= event.target.children[0].clientWidth) {
      leftBtn.style.display = 'grid';
    } else {
      leftBtn.style.display = 'none';
    }

    if (event.target.scrollLeft >= (event.target.children[0].clientWidth + event.target.children[1].clientWidth)) {
      rightBtn.style.display = 'none';
    } else {
      rightBtn.style.display = 'grid';
    }
  });

  mainContainer.addEventListener('click', (event) => {
    if (event.target == rightBtn || event.target.contains(rightBtn.querySelector('i'))) {
      scrollTarget.scrollBy({
        top: 0,
        left: scrollTarget.children[0].clientWidth,
        behavior: 'smooth'
      });

    }
    if (event.target == leftBtn || event.target.contains(leftBtn.querySelector('i'))) {
      scrollTarget.scrollBy({
        top: 0,
        left: -(scrollTarget.children[0].clientWidth),
        behavior: 'smooth'
      });
    }
  })

}

function createPointButtons(container) {
  let btnsContainer = document.createElement('div');
  let pages = Array.from(container.children).filter(elem => elem.className == 'dataDisplay');
  for (let page of pages) {
    let pointButton = document.createElement('button');
    pointButton.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-circle"></i>');
    btnsContainer.append(pointButton);

    pointButton.addEventListener('click', (event) => {
      if (event.target.tagName == 'BUTTON' || event.target.closest('i')) {
        container.scrollTo({
          top: 0,
          left: pages[Array.from(pointButton.parentElement.children).indexOf(pointButton)].offsetLeft,
          behavior: "smooth"
        });
      }
    });
  }
  btnsContainer.setAttribute('id', 'buttonsContainer');
  container.append(btnsContainer);

  for (let i = 0; i < btnsContainer.children.length; i++) {
    btnsContainer.children[0].style.color = "rgb(74, 126, 223)";
    btnsContainer.children[i].style.color = "rgb(126, 126, 126)";
  }

  container.addEventListener('scroll', () => {
    for (let i = 0; i < btnsContainer.children.length; i++) {
      if (container.scrollLeft > pages[i].offsetLeft - 5 && container.scrollLeft < pages[i].offsetLeft + pages[i].clientWidth - 5) {
        btnsContainer.children[i].style.color = "rgb(74, 126, 223)";
      } else {
        // sistemare colore
        btnsContainer.children[i].style.color = "rgb(126, 126, 126)";
      }
    }
  })
}

async function createIconBtn(container, icon) {
  let menuBtn = document.createElement('button');
  menuBtn.classList.add('menuBtn');
  menuBtn.insertAdjacentHTML('afterbegin', icon);
  container.append(menuBtn);
}

function createMenu(mainElement) {
  const main = mainElement;
  createIconBtn(document.querySelector('#resultsContainer'), '<i class="fa-solid fa-bars"></i>');
  const menuButton = document.querySelector('.menuBtn');

  menuButton.addEventListener('click', async (event) => {
    if (event.target == menuButton.querySelector('i') || event.target == menuButton) {
      const menu = await fetch('/menu');
      const response = await menu.json();
      const container = document.createElement('div');
      const header = document.createElement('h3');
      const list = document.createElement('ul');
      container.classList.add('menuContainer');
      header.classList.add('menuHeader');
      list.classList.add('menuList');
      header.textContent = 'Cities on database...';
      // container.style.width = '75vw'; // <-- oppure basarsi sulla distanza tra lato destro e inizio lente
      container.style.top = (-((main.clientHeight / 100) * 90)) + 'px';

      container.append(header);
      main.append(container);

      let arr = [];
      for (let elem of response.data) {
        arr.push(elem.name);
      }
      arr = arr.sort().map((elem) => {
        let listElement = document.createElement('li');
        let deleteBtn = document.createElement('button');
        listElement.insertAdjacentHTML('afterbegin', '<button></button>');
        listElement.firstElementChild.textContent = elem;

        listElement.querySelector('button').classList.add('cityButton');
        deleteBtn.classList.add('deleteButton');
        deleteBtn.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-xmark"></i>');

        listElement.append(deleteBtn);
        list.append(listElement);

        listElement.addEventListener('click', async (buttonEvent) => {
          if (buttonEvent.target == listElement.querySelectorAll('button')[0]) {
            clearTimeout(timeout);
            inputField.value = listElement.firstElementChild.textContent;
            container.style.top = (-((main.clientHeight / 100) * 90)) + 'px';
            closeBtn.remove();
            searchCity(inputField, inputField);
            if (container.querySelector('.downDirection')) {
              disappearElement(container.querySelector('.downDirection'), 0);
            }

            inputContainer.animate([{
              transform: `translateY(-${document.documentElement.clientHeight / 2 - inputContainer.clientHeight}px)`
            }], {
              duration: 1000,
              easing: 'ease',
              direction: 'normal',
              iteration: 1,
              fill: 'forwards'
            });

          } else if (buttonEvent.target == deleteBtn || buttonEvent.target == deleteBtn.firstElementChild) {
            let cityName = buttonEvent.target.parentElement.firstElementChild.textContent || buttonEvent.target.parentElement.parentElement.firstElementChild.textContent;

            const cancelData = {
              name: cityName
            }
            console.log(cityName);
            const cancelOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(cancelData),
            }

            let cancelRequest = await fetch('/cancelDb', cancelOptions);
            let cancelInfo = await cancelRequest.json();
            console.log(cancelInfo);
            listElement.remove();
          }
        });
      });

      container.append(list);
      list.style.marginBottom = (list.children[0].getBoundingClientRect().height) * 2 + 'px';

      if (list.clientHeight > container.clientHeight) {

        createNavButton('down', container, 'absolute');

        container.addEventListener('scroll', () => {
          let downBtn = container.querySelector('.downDirection');
          downBtn.style.position = 'fixed';
          downBtn.style.top = container.getBoundingClientRect().height - downBtn.getBoundingClientRect().height + container.getBoundingClientRect().y - 2 + 'px';
          downBtn.style.overflow = 'hidden';

          if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
            let iElement = document.createElement('i');
            iElement.classList.add('fa-solid', 'fa-chevron-up');
            downBtn.firstElementChild.replaceWith(iElement);
          } else {
            let iElement = document.createElement('i');
            iElement.classList.add('fa-solid', 'fa-chevron-down');
            downBtn.firstElementChild.replaceWith(iElement);
          }

        });
      } else {
        list.style.marginBottom = '20px';
      }

      let timeout = setTimeout(() => {
        container.style.top = '-10px';
        container.style.transition = `translate(0px ${container.clientHeight})`;
        document.querySelector('.fa-xmark').parentElement.style.display = 'block';
      }, 500);

      createIconBtn(document.querySelector('#resultsContainer'), '<i class="fa-solid fa-xmark"></i>').then(() => {
        closeBtn = document.querySelector('.fa-xmark').parentElement;
        closeBtn.addEventListener('click', () => {
          if (container.querySelector('.downDirection')) {
            disappearElement(container.querySelector('.downDirection'), 0);
          }
          clearTimeout(timeout);
          closeBtn.remove();
          container.style.top = (-((main.clientHeight / 100) * 90)) + 'px';
        });
      })
    }
  });
}