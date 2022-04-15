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
    this.p.style.width = '73vw';
    this.writeText(`The city ${this.input} is not been found - searching for other cities in this country...`);
    this.p.style.left = this.container.getBoundingClientRect().width / 2 - this.p.getBoundingClientRect().width / 2 + 'px';
    this.p.classList.add('tempIndication');
  }
  secondIndication() {
    this.writeText(`The city ${this.input} is not been found.`);
    this.p.classList.remove('tempIndication');
    this.p.classList.add('indications');
  }
  thirdIndication() {
    this.writeText(`The City ${this.input} is not been found or there is no city with this name - try to reinsert the city name or check your internet connection`);
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
    // this.closeBtn = document.querySelectorAll('.menuBtn')[1];
    // this.iElement = document.createElement('i');
    // this.timeout = 



  }
  async createButton() {
    this.menuButton = document.createElement('button');
    this.menuButton.classList.add('menuBtn');
    this.menuButton.insertAdjacentHTML('afterbegin', this.icon);
    this.container.append(this.menuButton);
  }
  createMenu() {
    this.menuButton.addEventListener('click', async (event) => {
      if (event.target == this.menuButton.querySelector('i') || event.target == this.menuButton) {
        this.menu = await fetch('/menu');
        this.response = await this.menu.json();
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

          // console.log(this.listElement);

          this.listElement.addEventListener('click', async (btnEvent) => {
            if (btnEvent.target.tagName == 'BUTTON' && btnEvent.target.classList.contains('cityButton')) {
              console.log('click');
              console.log(btnEvent.target);
              clearTimeout(this.timeout);
              this.inputField.value = btnEvent.target.textContent;
              this.menuContainer.style.top = (-((this.container.scrollHeight / 100) * 70)) + 'px';
              this.closeBtn.remove();
              searchCity(this.inputField, this.inputField);
              if (this.menuContainer.querySelector('.downDirection')) {
                disappearElement(this.menuContainer.querySelector('.downDirection'), 0);
              }
              this.menuContainer.addEventListener('transitionend', () => {
                console.log('end');

                this.menuContainer.remove();
                this.header.remove();
                this.list.remove();
                console.log(this.header);
              });

              this.inputContainer.animate([{
                transform: `translateY(-${this.container.scrollHeight / 2 - this.inputContainer.clientHeight}px)`
              }], {
                duration: 1000,
                easing: 'ease',
                direction: 'normal',
                iteration: 1,
                fill: 'forwards'
              });
            } else if ((btnEvent.target.tagName == 'BUTTON' && btnEvent.target.classList.contains('deleteBtn')) || (btnEvent.target.tagName == 'I' && btnEvent.target.classList.contains('fa-xmark'))) {
              // console.log('clock');
              this.cityName = btnEvent.target.parentElement.firstElementChild.textContent || btnEvent.target.parentElement.parentElement.firstElementChild.textContent;
              console.log(this.cityName);
              // console.log(this.)
              this.cancelData = {
                name: this.cityName
              };
              this.cancelOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.cancelData)
              }
              this.cancelRequest = await fetch('/cancelDb', this.cancelOptions);
              this.cancelInfo = await this.cancelRequest.json();
              console.log(this.cancelInfo);
              btnEvent.target.closest('li').remove();
            }
          })
        });

        this.list.style.marginBottom = (this.list.children[0].getBoundingClientRect().height) * 2 + 'px';

        if (this.list.clientHeight > this.menuContainer.clientHeight) {
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
          this.closeBtn.style.zIndex = 13;
        }).then(() => {
          this.closeBtn.addEventListener('click', () => {
            if (this.menuContainer.querySelector('.downDirection')) {
              disappearElement(this.menuContainer.querySelector('.downDirection'), 0);
            }
            clearTimeout(this.timeout);

            this.closeBtn.remove();
            this.menuContainer.style.top = (-((this.container.scrollHeight / 100) * 70)) + 'px';

            this.menuContainer.addEventListener('transitionend', () => {
              this.menuContainer.remove();
              this.header.remove();
              this.list.remove();
            });

          });

        })





      }
    })
  }
}