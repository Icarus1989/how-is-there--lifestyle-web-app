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
    this.p.style.width = '73vw';
    this.container.append(this.p);
  }
  firstIndication() {
    this.p.style.left = this.container.getBoundingClientRect().width / 2 - this.p.getBoundingClientRect().width / 2 + 'px';
    this.writeText(`The city ${this.input} is not been found - searching for other cities in this country...`);
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