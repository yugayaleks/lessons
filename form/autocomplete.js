'use strict';

let cities = [
  1,
  11,
  112,
  11111,
  12,
  123,
  2,
  21,
  212,
  3
];

class Autocomplete {
  constructor({element}) {
    this.element = element;
    this.inputElement = this.element.querySelector('.autocomplete__field');
    this.listElement = this.element.querySelector('.autocomplete__list');


    this.inputElement.addEventListener('input', (event) => {
      console.log(event);
      console.log(this.inputElement.value);
      this.render();
    });
  };

  render() {
    this.listElement.innerHTML = '';
    cities.forEach((city) => {
      if (String(city).startsWith(this.inputElement.value)) {
        this.listElement.innerHTML += `<li>${city}</li>`;
      }
    });
  };
}

let filed = new Autocomplete({
  element: document.querySelector('.autocomplete')
});