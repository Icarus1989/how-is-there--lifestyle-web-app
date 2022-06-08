import axios from 'axios';
import {
  createIconBtn,
  createPointButtons,
  setInfoButtons,
  createNavButton,
  appearElement,
  disappearElement,
  searchCity,
  loadImage,
  createSaveBtn,
  createDataTable,
  createDescription,
  retrieveAlternativeCities,
  retrieveTeleportImage,
  retrievePixabay
} from '/src/client/js/index.js';

class Spinner {
  constructor(container) {
    this.container = container;
    this.layerOne = document.createElement('div');
    this.layerTwo = document.createElement('div');
    this.layerThree = document.createElement('div');
    this.layerFour = document.createElement('div');
  }
  drawSpinner() {
    this.layerOne.classList.add('spinnerContainer');
    this.layerTwo.classList.add('circleSegments');
    this.layerOne.append(this.layerTwo);
    this.layerThree.classList.add('spinner');
    this.layerOne.append(this.layerThree);
    this.layerFour.classList.add('spinnerIcon');
    this.layerFour.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-globe"></i>');
    this.layerOne.append(this.layerFour);
    this.container.append(this.layerOne);
  }
  removeSpinner() {
    this.layerOne.remove();
  }
}

class Indication {
  constructor(container, input) {
    this.p = document.createElement('p');
    this.input = input;
    this.container = container;

  }
  writeText(text) {
    this.p.textContent = text;
    this.container.append(this.p);
  }
  firstIndication() {
    this.writeText(`The city ${this.input} is not been found - searching for other cities in this country...`);
    this.p.classList.add('tempIndication');
    this.p.style.left = this.container.getBoundingClientRect().width / 2 - this.p.getBoundingClientRect().width / 2 + 'px';
  }

  secondIndication() {
    this.writeText(`The city ${this.input} is not been found.`);
    this.p.classList.remove('tempIndication');
    this.p.classList.add('indications');
  }

  thirdIndication() {
    this.writeText(`The City ${this.input} is not been found or there is no city with this name - try to reinsert the city name`);
  }

  fourthIndication() {
    this.writeText(`${this.input} - please check your connection.`);
    this.p.classList.add('indications');
  }

  fifthIndication() {
    this.writeText(`${this.input} - unknown error, please reload the page.`);
    this.p.classList.add('indications');
  }

  noAltIndication() {
    this.writeText(`No cities data for this country, please try another city.`);
    this.p.classList.add('indications');
  }

  async nullIndication() {
    this.p.textContent = '';
    this.p.remove();
  }
}

class PointButtons {
  constructor(container) {
    this.container = container;
    this.buttonSection = document.createElement('div');
    this.pages = Array.from(this.container.children).filter(elem => elem.className == 'dataDisplay');
  }

  createButtons() {
    this.buttonSection.setAttribute('id', 'buttonsContainer');
    this.container.parentElement.append(this.buttonSection);
    for (this.page of this.pages) {
      this.point = document.createElement('button');
      this.point.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-circle"></i>');
      this.point.classList.add('pointButton');
      this.buttonSection.append(this.point);
      this.point.addEventListener('click', (event) => {
        if (event.target.tagName == 'BUTTON' || event.target.closest('i')) {
          this.container.scrollTo({
            top: 0,
            left: this.pages[(Array.from(this.buttonSection.children)).indexOf(event.target.closest('button'))].offsetLeft,
            behavior: "smooth"
          });
        }
      });
    }

    for (let i = 0; i < this.buttonSection.children.length; i++) {
      this.buttonSection.children[0].style.color = "rgb(74, 126, 223)";
      this.buttonSection.children[i].style.color = "rgb(126, 126, 126)";
    }

    this.container.addEventListener('scroll', () => {
      for (let i = 0; i < this.buttonSection.children.length; i++) {
        if (this.container.scrollLeft > this.pages[i].offsetLeft - 5 && this.container.scrollLeft < this.pages[i].offsetLeft + this.pages[i].clientWidth - 5) {
          this.buttonSection.children[i].style.color = "rgb(74, 126, 223)";
        } else {
          this.buttonSection.children[i].style.color = "rgb(126, 126, 126)";
        }
      }
    });
  }
}

class Menu {
  constructor(inputField, container, icon) {
    this.container = container;
    this.icon = icon;
    this.inputField = inputField;
    this.inputContainer = this.inputField.parentElement;
  }
  async createButton() {
    this.menuButton = document.createElement('button');
    this.menuButton.classList.add('menuBtn');
    this.menuButton.insertAdjacentHTML('afterbegin', this.icon);
    this.container.append(this.menuButton);
  }
  createMenu() {
    this.container.addEventListener('click', async (event) => {
      if (event.target == this.menuButton.querySelector('i') || event.target == this.menuButton) {
        this.menu = await axios.get('/menu');
        this.response = await this.menu["data"];
        this.menuContainer = document.createElement('div');
        this.header = document.createElement('h3');
        this.list = document.createElement('ul');
        this.menuContainer.classList.add('menuContainer');
        this.header.classList.add('menuHeader');
        this.list.classList.add('menuList');

        this.header.textContent = 'Cities on database...';
        this.menuContainer.style.top = (-((this.container.scrollHeight / 100) * 70)) + 'px';

        this.menuContainer.append(this.header);
        this.container.append(this.menuContainer);

        this.arr = [];
        for (this.elem of this.response.data) {
          this.arr.push(this.elem.name);
        }
        this.arr = this.arr.sort().map((elem) => {
          this.elem = elem;
          this.listElement = document.createElement('li');
          this.deleteBtn = document.createElement('button');
          this.listElement.insertAdjacentHTML('afterbegin', '<button></button>');
          this.listElement.firstElementChild.textContent = this.elem;
          this.listElement.querySelector('button').classList.add('cityButton');
          this.deleteBtn.classList.add('deleteButton');
          this.deleteBtn.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-xmark"></i>');
          this.listElement.append(this.deleteBtn);
          this.list.append(this.listElement);
          this.menuContainer.append(this.list);
          this.listElement.addEventListener('click', async (btnEvent) => {
            if (btnEvent.target.tagName == 'BUTTON' && btnEvent.target.classList.contains('cityButton')) {
              clearTimeout(this.timeout);
              this.inputField.value = btnEvent.target.textContent;
              this.menuContainer.style.top = (-((this.container.scrollHeight / 100) * 70)) + 'px';
              this.closeBtn.remove();
              searchCity(this.inputField, this.inputField);

              if (this.menuContainer.querySelector('.downDirection')) {
                disappearElement(this.menuContainer.querySelector('.downDirection'), 0);
              }

              this.menuContainer.addEventListener('transitionend', () => {
                this.menuContainer.remove();
                this.header.remove();
                this.list.remove();
              });

              if (this.inputContainer.getBoundingClientRect().y > this.container.clientHeight / 25) {
                this.inputContainer.animate([{
                  transform: `translateY(-${this.container.clientHeight / 2 - this.inputContainer.clientHeight - (document.body.clientHeight - document.documentElement.clientHeight) / 2}px)`
                }], {
                  duration: 700,
                  easing: 'linear',
                  direction: 'normal',
                  iteration: 1,
                  fill: 'forwards'
                });
              }


            } else if ((btnEvent.target.tagName == 'BUTTON' && btnEvent.target.classList.contains('deleteBtn')) || (btnEvent.target.tagName == 'I' && btnEvent.target.classList.contains('fa-xmark'))) {
              this.cityName = btnEvent.target.parentElement.firstElementChild.textContent || btnEvent.target.parentElement.parentElement.firstElementChild.textContent;
              this.cancelData = {
                name: this.cityName
              };

              this.cancelRequest = await axios({
                method: 'post',
                url: '/cancelDb',
                data: this.cancelData,
                responseType: 'json'
              });

              this.cancelInfo = await this.cancelRequest["data"];
              btnEvent.target.closest('li').remove();
            }
          })

        });


        if (this.list.children.length == 0) {
          this.menuContainer.style.height = '100px';
          this.header.textContent = 'No cities saved.';
        } else if (this.list.clientHeight > this.menuContainer.clientHeight) {
          this.list.style.marginBottom = (this.list.children[0].getBoundingClientRect().height) * 2 + 'px';
          createNavButton('down', this.menuContainer, 'absolute');
          this.menuContainer.addEventListener('scroll', () => {

            this.downBtn = this.menuContainer.querySelector('.downDirection');
            this.downBtn.style.position = 'fixed';
            this.downBtn.style.top = this.menuContainer.getBoundingClientRect().height - this.downBtn.getBoundingClientRect().height + this.menuContainer.getBoundingClientRect().y - 2 + 'px';
            this.downBtn.style.overflow = 'hidden';

            if (this.menuContainer.scrollTop >= this.menuContainer.scrollHeight - this.menuContainer.clientHeight) {
              this.iElement = document.createElement('i');
              this.iElement.classList.add('fa-solid', 'fa-chevron-up');
              this.downBtn.firstElementChild.replaceWith(this.iElement);
            } else {
              this.iElement = document.createElement('i');
              this.iElement.classList.add('fa-solid', 'fa-chevron-down');
              this.downBtn.firstElementChild.replaceWith(this.iElement);
            }

          });
        } else {
          this.list.style.marginBottom = '20px';
        }
        this.timeout = setTimeout(() => {
          this.menuContainer.style.top = '-10px';
          this.menuContainer.style.transition = `translate(0px ${this.menuContainer.clientHeight})`;
          document.querySelector('.fa-xmark').parentElement.style.display = 'block';
        }, 500);

        createIconBtn(this.container, '<i class="fa-solid fa-xmark"></i>').then(() => {
          this.closeBtn = document.querySelectorAll('.menuBtn')[1];
          this.closeBtn.classList.add('menuBtnOpen');
          this.closeBtn.style.zIndex = 13;
        }).then(() => {
          this.closeBtn.addEventListener('click', () => {
            if (this.menuContainer.querySelector('.downDirection')) {
              disappearElement(this.menuContainer.querySelector('.downDirection'), 0);
            }
            this.closeBtn.classList.remove('menuBtnOpen');
            clearTimeout(this.timeout);
            this.closeBtn.remove();
            this.menuContainer.style.top = (-((this.container.scrollHeight / 100) * 70)) + 'px';
            this.menuContainer.addEventListener('transitionend', () => {
              this.menuContainer.remove();
              this.header.remove();
              this.list.remove();
            });
          });
        });
      } else if (this.closeBtn && !this.menuContainer.contains(event.target)) {
        let closeEvent = new Event('click');
        this.closeBtn.dispatchEvent(closeEvent);
      }
    });
  }
}

class CityData {
  constructor(inputElement, container) {
    this.inputElement = inputElement;
    this.url = `https://api.teleport.org/api/cities/?search=${this.inputElement.value}&embed=city:search-results/city:item/city:country&embed=city:search-results/city:item/city:admin1_division&embed=city:search-results/city:item/city:urban_area&embed=ua:item/ua:scores&embed=ua:item/ua:images&embed=city:search-results/city:item/city:timezone/tz:offsets-now`;
    this.container = container;
    this.savingCount = 0;
    this.fromDb = false;
    this.descriptionBox = document.querySelector('.descriptionBox');
    this.resultsContainer = document.querySelector('#resultsContainer');

  }

  async cityInfo() {
    this.response = await axios.get(this.url);
    return this.info = await this.response["data"];
  }

  async cityQueryDb() {
    this.info = await this.cityInfo();
    this.name = (this.inputElement.value[0]).toUpperCase() + (this.inputElement.value).slice(1);
    this.city = (await (this.info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["full_name"]).split(',')[0]) || (this.name);

    this.dbQueryName = {
      name: this.city
    };

    this.dbQuery = await axios({
      method: 'post',
      url: '/queryDb',
      data: this.dbQueryName,
      responseType: 'json'
    });

    this.dbResponse = await this.dbQuery["data"];
    this.dbDatas = this.dbResponse.data;

    // document.querySelector('.saveBtn') ? .remove();
    if (document.querySelector('.saveBtn')) {
      document.querySelector('.saveBtn').remove();
    }

    createSaveBtn(this.container);
    return this.dbResponse;
  }

  async notInDatabase() {
    this.saveButton = document.querySelector('.saveBtn');
    this.urlScores = await this.info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_links"]["ua:scores"]["href"];
    this.dataScores = await axios.get(this.urlScores);
    this.infoScores = await this.dataScores["data"];
    this.nameAndState = await this.info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["full_name"];
    this.continent = await this.info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["continent"];
    this.fullName = `${this.nameAndState}, ${this.continent}`;
    this.ranking = await this.infoScores["teleport_city_score"];
    this.saveButton.style.color = 'rgb(126, 126, 126)';
    appearElement(this.saveButton, 500, 'grid');
    this.saveButton.addEventListener('click', async (event) => {
      if ((event.target == this.saveButton.querySelector('i') || event.target == this.saveButton) && !(this.savingCount > 0) && (this.fromDb == false)) {

        this.dbData = {
          name: this.city,
          title: this.fullName,
          data: this.infoScores
        }

        this.saveDb = await axios({
          method: 'post',
          url: '/saveDb',
          data: this.dbData,
          responseType: 'json'
        });

        this.saveButton.style.color = 'rgb(74, 126, 223)';
        this.saveButton.classList.add('saveBtnActive');
        this.savingCount++;
      }
    });

    return this.infoScores;
  }

  async inDatabase() {
    this.saveButton = document.querySelector('.saveBtn');
    appearElement(this.saveButton, 500, 'grid');
    this.infoScores = this.dbDatas;
    this.completeName = this.dbResponse.title.split(', ');
    this.cityName = this.completeName[0];
    this.nameAndState = `${this.completeName[0]}, ${this.completeName[1]}`;
    this.continent = this.completeName[2];
    this.ranking = this.dbDatas["teleport_city_score"];
    this.savingCount = 1;
    this.fromDb = true;
    this.saveButton.style.color = 'rgb(74, 126, 223)';
    this.saveButton.classList.add('saveBtnActive');
    return this.infoScores;
  }

  async createElements(dataInfo) {
    this.infoScores = dataInfo;
    this.fullName = `${this.nameAndState}, ${this.continent}`;
    if (this.container.clientWidth > this.container.clientHeight) {
      setInfoButtons(this.resultsContainer);
    } else if (this.container.clientWidth < this.container.clientHeight && !document.querySelector('#buttonsContainer')) {
      createPointButtons(this.resultsContainer);
    }
    this.cityDescription = await this.infoScores["summary"];
    createDescription(this.nameAndState, this.continent, this.ranking, document.querySelector('.descriptionBox'), this.cityDescription, document.querySelectorAll('.dataDisplay')[0]);
    this.tableData = this.infoScores["categories"];
    this.dataFirstPart = this.tableData.slice(0, 9);
    this.dataSecondPart = this.tableData.slice(9, this.tableData.length);
    createDataTable(document.querySelectorAll('table')[0], this.dataFirstPart, document.querySelectorAll('.dataDisplay')[1]);
    createDataTable(document.querySelectorAll('table')[1], this.dataSecondPart, document.querySelectorAll('.dataDisplay')[2]);

    this.firstContainer = document.querySelector('#imgContainer');
    this.firstPath = 'client/assets/tempImages/edge.png';
    this.secondContainer = document.querySelector('#secondImgContainer');
    this.secondPath = 'client/assets/tempImages/image.png';

    retrievePixabay(this.city).then(() => {
      loadImage(this.secondContainer.querySelector('img'), this.secondContainer, document.querySelector('#resultsContainer'), this.secondPath, 'city image');
      loadImage(this.firstContainer.querySelector('img'), this.firstContainer, document.querySelector('#resultsContainer'), this.firstPath, 'city edge image');
    }).catch(() => {
      retrieveTeleportImage(this.city).then(() => {
        loadImage(this.secondContainer.querySelector('img'), this.secondContainer, document.querySelector('#resultsContainer'), this.secondPath, 'city image');
        loadImage(this.firstContainer.querySelector('img'), this.firstContainer, document.querySelector('#resultsContainer'), this.firstPath, 'city edge image');
      })
    });

  }

  async deleteElements(elems) {
    if (this.descriptionBox) {
      this.elems = elems;
      for (let elem of this.elems) {
        elem.remove();
      }
    }
  }

  createAlternatives(info) {
    this.inputElement.textContent = '';
    this.inputElement.placeholder = 'Enter a new city...';
    this.inputElement.blur();
    this.info = info;
    retrieveAlternativeCities(this.info, this.inputElement.value);
  }
}

class Description {
  constructor(state, continent, rank, textbox, description, container) {
    this.container = container;
    this.state = state;
    this.continent = continent;
    this.rank = rank;
    this.textbox = textbox;
    this.description = description;
  }

  async createTitle() {
    this.header = document.querySelector('h2');
    if (this.header) {
      this.header.textContent = `${await this.state}, ${ await this.continent}`;
    } else {
      this.header = document.createElement('h2');
      this.header.textContent = `${await this.state}, ${ await this.continent}`;
      this.container.append(this.header);
    }
  }

  async createText() {
    this.textbox = document.querySelector('.descriptionBox');
    if (this.textbox) {
      for (this.elem of this.textbox.querySelectorAll('p')) {
        this.elem.remove();
      }
      this.textbox.insertAdjacentHTML('afterbegin', this.description);
    } else {
      this.textbox = document.createElement('div');
      this.textbox.insertAdjacentHTML('afterbegin', this.description);
      this.container.append(this.textbox);
    }
    this.textbox.classList.add('descriptionBox');
  }

  async createRank() {
    this.rankBox = document.querySelector('.rank');
    if (this.rankBox) {
      this.rankBox.textContent = `Teleport City Score: ${this.rank.toPrecision(4)}%`;
    } else {
      this.rankBox = document.createElement('p');
      this.rankBox.textContent = `Teleport City Score: ${this.rank.toPrecision(4)}%`;
      this.container.append(this.rankBox);
    }
    this.rankBox.classList.add('rank');
  }


}

class UARetrieve {
  constructor(url) {
    this.url = url;

  }
  async retrieveUrbanAreas() {
    this.listData = await axios.get(this.url);
    this.completeUAList = await this.listData["data"]["_links"]["ua:item"];
    this.requests = this.completeUAList.map(async (elem) => {
      this.uaData = await axios.get(elem["href"]);
      this.uaName = await this.uaData["data"]["_links"]["ua:identifying-city"]["name"];
      this.ua_iso_alpha2 = await (this.uaData["data"]["_links"]["ua:countries"][0]["href"]).slice(-3, -1);
      return this.uaObj = {
        name: this.uaName,
        iso_alpha2: this.ua_iso_alpha2
      }
    })
    return Promise.all(this.requests);
  }
}

class AlternativeCities {
  constructor(uaArray, info, input, container, parentContainer) {
    this.UrbanAreas = uaArray;
    this.inputElement = document.querySelector('#insertInput');
    this.info = info;
    this.input = input;
    this.container = container;
    this.parentContainer = parentContainer;
  }

  async createAlternatives() {
    this.country = this.info["_embedded"]["city:search-results"][0]["_embedded"]["city:item"]["_embedded"]["city:country"]["iso_alpha2"];
    this.filteredArr = [];
    this.UrbanAreas.map(ua => {
      if (ua["iso_alpha2"] == this.country) {
        this.filteredArr.push(ua["name"]);
      }
    });
  }

  async createButtons() {
    this.counter = 0;
    this.filteredArr.sort().map((elem) => {
      this.btn = document.createElement('button');
      this.btn.textContent = elem;
      this.container.append(this.btn);
      this.btn.classList.add('altButtons');
      this.counter++;
    });
    return this.counter;
  }

  async bigContainer() {
    this.container.style.overflowY = 'scroll';
    createNavButton('down', this.container, 'absolute');
    this.downBtn = this.container.querySelector('.downDirection');
    this.downBtn.style.width = this.container.clientWidth + 'px';
    this.downBtn.style.height = '8vh';
    this.downBtn.style.top = this.container.offsetTop + this.container.getBoundingClientRect().height - this.container.querySelector('.downDirection').offsetHeight + 'px';
    this.downBtn.style.left = this.container.getBoundingClientRect().left + (this.container.clientLeft) + 'px';
    this.downBtn.setAttribute('id', 'altDownButton');
    this.container.querySelectorAll('.altButtons')[this.container.querySelectorAll('.altButtons').length - 1].classList.add('lastMargin');


    this.container.addEventListener('scroll', (event) => {
      this.downBtn.style.position = 'fixed';
      this.downBtn.style.top = this.container.getBoundingClientRect().bottom - this.downBtn.getBoundingClientRect().height + 'px';
      this.downBtn.style.left = this.container.getBoundingClientRect().left + (this.container.clientLeft) + 'px';
      this.downBtn.style.overflow = 'hidden';

      if (this.container.scrollTop >= this.container.scrollHeight - this.container.clientHeight) {
        this.iElement = document.createElement('i');
        this.iElement.classList.add('fa-solid', 'fa-chevron-up');
        this.downBtn.firstElementChild.replaceWith(this.iElement);
      } else {
        this.iElement = document.createElement('i');
        this.iElement.classList.add('fa-solid', 'fa-chevron-down');
        this.downBtn.firstElementChild.replaceWith(this.iElement);
      }
    });
    this.parentContainer.addEventListener('scroll', () => {
      if (this.container.querySelector('.downDirection')) {
        this.container.querySelector('.downDirection').position = 'absolute';
        this.container.querySelector('.downDirection').style.left = this.container.getBoundingClientRect().left + (this.container.clientLeft) + 'px';
      }
    });
  }
  async zeroAlternatives() {

  }
}

class AppearElems {
  constructor(display, delay, ...elems) {
    this.display = display;
    this.delay = delay;
    this.elems = elems;
  }

  show() {
    this.elems.map(async (elem) => {
      if (elem) {
        elem.style.display = this.display;
        this.opacity = 0.0;
        return await new Promise((resolve) => {
          setTimeout(() => {
            this.interval = setInterval(() => {
              this.opacity = this.opacity + 0.1;
              elem.style.opacity = this.opacity;
              if (this.opacity > 1.0) {
                this.opacity = 1.0;
                clearInterval(this.interval);
              }
            }, 20);
          }, this.delay);
          resolve();
        });
      } else {
        return;
      }
    });
  }
}

class RetrieveData {
  constructor(url) {
    this.url = url;
  }
  async retrieve() {
    return this.response = await axios.get(this.url);
  }
}


class createDraw {
  constructor(container, resultsContainer, path, altTag) {
    this.container = container;
    this.resultsContainer = resultsContainer;
    this.path = path;
    this.altTag = altTag;
  }
  calcMeasures() {
    this.image.style.width = "250vw";
    this.image.style.height = (this.container.clientHeight * 1.01) + "px";
    if (this.container.clientHeight < this.container.clientWidth) {
      this.image.style.width = "100vw";
      this.image.style.height = this.container.clientHeight + "px";
      this.image.style.left = "-10%";
      this.image.style.top = "-50vh";
    } else {
      this.image.style.position = "relative";
      this.image.style.left = "-10%";
      this.image.style.bottom = "0px";
    }
  }

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  drawImg() {
    this.image = document.createElement('img');
    this.image.src = '';
    this.wait(1200).then(() => {
      return axios.get(this.path, {
        responseType: "blob"
      });
    }).then((response) => {
      this.urlObj = URL.createObjectURL(response["data"]);
    }).then(() => {
      this.image.src = this.urlObj;
    }).then(() => {
      this.image.addEventListener('load', () => {
        this.image.setAttribute('alt', this.altTag);
        this.container.append(this.image);
      });
      this.image.addEventListener('error', () => {
        this.drawImg();
        this.calcMeasures();
      })
    }).catch((err) => {
      console.log(err);
      this.drawImg();
      this.calcMeasures();
    });

  }

  scrollMovement() {
    this.resultsContainer.scrollTo(0, 0);
    this.resultsContainer.addEventListener('scroll', (event) => {
      this.image.style.left = (-((event.target.scrollLeft / (event.target.scrollWidth - event.target.clientWidth)) * 100)) - 10 + '%';
    });
  }
}

export {
  Spinner,
  Indication,
  PointButtons,
  Menu,
  CityData,
  Description,
  UARetrieve,
  AlternativeCities,
  AppearElems,
  RetrieveData,
  createDraw
}