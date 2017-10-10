'use strict';

class Carousel {
  constructor(element) {
    this.element = element;
  }

  move(index) {
    let shift = index * 130;
    this.element.querySelector('.carousel__images').style.marginLeft = `-${shift}px`;

  }
}

let carousel1 = new Carousel(document.querySelector('#carousel1'));
carousel1.move(1);

let carousel2 = new Carousel(document.querySelector('#carousel2'));
carousel2.move(2);