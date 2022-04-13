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
    // this.pages.forEach(()=>{

    // })
    for (this.page of this.pages) {
      this.point = document.createElement('button');
      // console.log(this.point);
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

    // Array.from(this.buttonSection.children).map((elem) => {

    // });

    // for (let i = 0; i < document.querySelectorAll('.pointButton'); i++) {
    //   this.point[i].addEventListener('click', (event) => {
    //     // alert('click');
    //     if (event.target.tagName == 'BUTTON' || event.target.closest('i')) {
    //       // console.log('click');
    //       console.log((Array.from(this.buttonSection.children)).indexOf(this.point[i]));
    //       this.container.scrollTo({
    //         top: 0,
    //         left: this.pages[i].offsetLeft,
    //         behavior: "smooth"
    //       });
    //     }
    //   });
    // }


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
  constructor() {

  }
}