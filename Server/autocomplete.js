'use strict';

class Autocomplete {
  constructor({element}) {
    this.element = element;
    this.inputElement = this.element.querySelector('.autocomplete__field');
    this.listElement = this.element.querySelector('.autocomplete__list');

    this.loadData(
      (data) => {
        console.log(data);
      }
    );

    this.inputElement.addEventListener('input', (event) => {
      this.loadData(
        (data) => {
          this.render();
        }
      );


    });
  }

  loadData(x) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `data.json?query=${this.inputElement.value}`, true);
    xhr.addEventListener('load', () => {
      let cities = JSON.parse(xhr.responseText);

      //todo:
      this.cities = cities.filter((city) => {
        return String(city).startsWith(this.inputElement.value);
      });

      x(cities);

    });
    xhr.send();
  }

  render() {
    this.listElement.innerHTML = '';
    this.cities.forEach((city) => {
        this.listElement.innerHTML += `<li>${city}</li>`;

    });
  }
}

