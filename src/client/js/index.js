import '/src/client/css/styles.css';
import 'regenerator-runtime/runtime';

import {
  CityData,
  Description,
  PointButtons,
  UARetrieve,
  AlternativeCities,
  AppearElems,
  RetrieveData,
  createDraw,
  Spinner,
  Indication,
  Menu
} from './classes.js';

let mainContainer = document.querySelector('#mainContainer');
let inputField = document.querySelector('#insertInput');
let inputContainer = inputField.parentElement;
let menu = new Menu(inputField, mainContainer, '<i class="fa-solid fa-bars"></i>');
menu.createButton();
menu.createMenu();
inputContainer.style.top = mainContainer.clientHeight / 2 - inputContainer.clientHeight / 2 - ((document.body.clientHeight - document.documentElement.clientHeight) / 2) + 'px';
mainContainer.querySelector('h1').style.top = (getComputedStyle(document.querySelector('h1')).top).slice(0, -2) - ((document.body.clientHeight - document.documentElement.clientHeight) / 2) + 'px';

inputField.addEventListener('change', async (event) => {
  mainContainer.scrollTo(0, 0);
  if (inputContainer.getBoundingClientRect().y > mainContainer.clientHeight / 10) {
    inputContainer.animate([{
      transform: `translateY(-${mainContainer.clientHeight / 2 - inputContainer.clientHeight - (document.body.clientHeight - document.documentElement.clientHeight) / 2}px)`
    }], {
      duration: 700,
      easing: 'linear',
      direction: 'normal',
      iteration: 1,
      fill: 'forwards'
    });
  } else {
    inputContainer.style.top = mainContainer.clientHeight / 2 - inputContainer.clientHeight / 2 - (document.body.clientHeight - document.documentElement.clientHeight) / 2 + 'px';
  }
  searchCity(event.target);
});

async function searchCity(input) {
  disappearElement(document.querySelector('h1'), 0);
  let cityData = new CityData(input, mainContainer);
  try {
    let info = await cityData.cityInfo();
    try {
      let queryResponse = await cityData.cityQueryDb();
      let infoScores;
      if (queryResponse.status == 'success' && queryResponse.action == 'Not in database') {
        infoScores = await cityData.notInDatabase();
      } else if (queryResponse.status == 'success' && queryResponse.action == 'read from db') {
        infoScores = await cityData.inDatabase();
      }
      input.value = '';
      input.placeholder = 'Enter a new city...';
      input.blur();
      cityData.createElements(infoScores);
    } catch {
      let elemetsToDel = [document.querySelector('#buttonsContainer'), document.querySelector('h2'), document.querySelector('.descriptionBox'), document.querySelector('.rank'), document.querySelector('.saveBtn'), document.querySelector('.tableContainer1'), document.querySelector('.tableContainer2')];
      cityData.deleteElements(elemetsToDel).then(() => {
        cityData.createAlternatives(info);
      }).catch((err) => {
        throw new Error(err);
      });
    }
  } catch (error) {
    input.value = '';
    input.placeholder = 'Something wrong...';
    input.blur();
    let errorInd = new Indication(mainContainer, error.message);
    error.message == 'Network Error' ? errorInd.fourthIndication() : errorInd.fifthIndication();
  }
}

async function createDescription(state, globalContinent, rank, textbox, text, container) {
  let description = new Description(state, globalContinent, rank, textbox, text, container);
  let title = await description.createTitle();
  let textBox = await description.createText();
  let rankBox = await description.createRank();
}

function createDataTable(oldTable, jsonData, container) {
  oldTable?.parentElement.remove();
  oldTable?.remove();
  let tableContainer = document.createElement('div');
  tableContainer.classList.add(`tableContainer${Array.from(container.parentElement.children).indexOf(container)}`);
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
  tableContainer.append(table);
  container.append(tableContainer);
  table.firstElementChild.children[0].firstElementChild.style.borderRadius = '4vh 0vh 0vh 0vh';
  table.firstElementChild.children[0].lastElementChild.style.borderRadius = '0vh 4vh 0vh 0vh';
  table.firstElementChild.children[table.firstElementChild.children.length - 1].firstElementChild.style.borderRadius = '0vh 0vh 0vh 4vh';
  table.firstElementChild.children[table.firstElementChild.children.length - 1].lastElementChild.style.borderRadius = '0vh 0vh 4vh 0vh';
}

function createSaveBtn(container) {
  let saveBtn = document.createElement('button');
  saveBtn.classList.add('saveBtn');
  saveBtn.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-star"></i>');
  container.append(saveBtn);
}

async function loadImage(image, container, resultsContainer, path, altTag) {
  let draw = new createDraw(container, resultsContainer, path, altTag);
  if (image !== null) {
    image.remove();
    draw.drawImg();
    draw.calcMeasures();
  } else {
    draw.drawImg();
    draw.calcMeasures();
  }
  draw.scrollMovement();
}

async function retrievePixabay(name) {
  const url = `bkgImage/${name}`;
  const pixData = new RetrieveData(url);
  return pixResponse = await pixData.retrieve();
}

async function retrieveTeleportImage(name) {
  const telUrl = `bkgImage/${name}`;
  const telData = new RetrieveData(telUrl);
  const telResponse = await telData.retrieve();
  return telResponse["data"];
}

async function retrieveAlternativeCities(info, input) {
  inputField.value = '';
  inputField.placeholder = 'Enter a new city...';
  inputField.blur();
  disappearElement(document.querySelector('.menuBtn'), 0);
  let resultsCont = document.querySelector('#resultsContainer');
  let alternatesContainer = document.createElement('fieldset');
  let legend = document.createElement('legend');
  let indication = new Indication(resultsCont.children[0], input);
  let spinner = new Spinner(resultsCont);
  resultsCont.scrollTo(0, 0);
  indication.firstIndication();
  spinner.drawSpinner();
  legend.textContent = 'Cities available for this Country:';
  alternatesContainer.append(legend);
  alternatesContainer.classList.add('alternatesContainer');
  const uaUrl = `https://api.teleport.org/api/urban_areas`;
  let urbanAreas = new UARetrieve(uaUrl);
  let urbanAreasList = await urbanAreas.retrieveUrbanAreas();

  try {
    let alternatives = new AlternativeCities(urbanAreasList, info, input, alternatesContainer, resultsCont);
    let alternativesCities = await alternatives.createAlternatives();
    let alternativesButtons = await alternatives.createButtons();
    spinner.removeSpinner();
    indication.secondIndication();
    resultsCont.children[0].classList.add('altPosition');
    resultsCont.children[0].append(alternatesContainer);
    if (alternativesButtons > 8) {
      alternatives.bigContainer();
    } else if (alternativesButtons == 0) {
      alternatesContainer.remove();
      indication.noAltIndication();
    }
  } catch {
    spinner.removeSpinner();
    indication.thirdIndication();
  }

  inputField.addEventListener('change', () => {
    disappearElement(alternatesContainer, 0).then(() => {
      alternatesContainer.remove();
      if (document.querySelector('.descriptionBox')) {
        let appearGrid = new AppearElems('grid', 0, document.querySelector('.descriptionBox'), document.querySelector('.menuBtn'));
        appearGrid.show();
        let appearBlock = new AppearElems('block', 0, document.querySelectorAll('table')[0], document.querySelectorAll('table')[1]);
        appearBlock.show();
        let appearInline = new AppearElems('inline', 0, document.querySelector('h2'), document.querySelector('.rank'));
        appearInline.show();
      }
      indication.nullIndication();
    })
    if (resultsCont.children[0].classList.contains('altPosition')) {
      resultsCont.children[0].classList.remove('altPosition');
    }
    resultsCont.children[0].classList.add('elemsPos');
    appearElement(document.querySelector('.menuBtn'), 500, 'grid');
  });

  alternatesContainer.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON' && event.target !== document.querySelector('.downDirection')) {
      inputField.value = event.target.textContent;
      disappearElement(alternatesContainer, 0).then(() => {
        searchCity(inputField).then(async () => {
          let appearGrid = new AppearElems('grid', 0, document.querySelector('.descriptionBox'), document.querySelector('.menuBtn'));
          appearGrid.show();
          let appearBlock = new AppearElems('block', 0, document.querySelectorAll('table')[0], document.querySelectorAll('table')[1]);
          appearBlock.show();
          let appearInline = new AppearElems('inline', 0, document.querySelector('h2'), document.querySelector('.rank'));
          appearInline.show();
        })
      })
      if (resultsCont.children[0].classList.contains('altPosition')) {
        resultsCont.children[0].classList.remove('altPosition');
      }
      resultsCont.children[0].classList.add('elemsPos');
      indication.nullIndication();
    } else {
      return;
    }
  });
}

async function appearElement(elem, delay, display) {
  let appearGrid = new AppearElems(display, delay, elem);
  appearGrid.show();
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

function createNavButton(direction, container, position) {
  let directionBtn = document.createElement('button');
  directionBtn.style.placeItems = 'center';
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
      directionBtn.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-chevron-down"></i>');
      break;
  }
  container.append(directionBtn);
}

function setInfoButtons(scrollTarget) {
  if (!document.querySelector('.rightDirection')) {
    createNavButton('left', mainContainer, 'fixed');
    createNavButton('right', mainContainer, 'fixed');
  }
  let leftBtn = document.querySelector('.leftDirection');
  let rightBtn = document.querySelector('.rightDirection');

  let rightBtnHeight = mainContainer / 2;
  leftBtn.style.top = document.body.clientHeight / 2 - rightBtnHeight / 2 - ((document.body.clientHeight - document.documentElement.clientHeight) / 2) + 'px';
  rightBtn.style.top = document.body.clientHeight / 2 - rightBtnHeight / 2 - ((document.body.clientHeight - document.documentElement.clientHeight) / 2) + 'px';

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
  });
}

function createPointButtons(container) {
  let pointButtons = new PointButtons(container);
  pointButtons.createButtons();
}

async function createIconBtn(container, icon) {
  let menuBtn = document.createElement('button');
  menuBtn.classList.add('menuBtn');
  menuBtn.insertAdjacentHTML('afterbegin', icon);
  container.append(menuBtn);
}

window.addEventListener('resize', () => {
  location.reload();
});

export {
  searchCity,
  createDescription,
  createDataTable,
  createSaveBtn,
  loadImage,
  retrievePixabay,
  retrieveTeleportImage,
  retrieveAlternativeCities,
  appearElement,
  disappearElement,
  createNavButton,
  setInfoButtons,
  createPointButtons,
  createIconBtn
}