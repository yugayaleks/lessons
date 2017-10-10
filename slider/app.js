'use strict';

class Slider  {
  constructor({element}) {
    this.element = element;
    this.thumbElement = element.querySelector('.slider__thumb');
    let isPressed = false;

    this.thumbElement.addEventListener('mousedown', (event) => {
      isPressed = true;
      console.log('кнопка зажата');
    });

    document.addEventListener('mouseup', (event) => {
      isPressed = false;
      console.log('кнопка разжата');
    });
    
    document.addEventListener('mousemove', (event) => {
      if (isPressed) {
        this.move(event.clientX);
      }
    });
  }

  move (clientX) {
    let sliderPosition = this.element.getBoundingClientRect();
    let x = clientX - sliderPosition.left;
    if (x <= 0) {
      x = 0;
    }
    if (x >= sliderPosition.width -this.thumbElement.clientWidth) {
      x = sliderPosition.width - this.thumbElement.clientWidth;
    }
    this.thumbElement.style.left = x + 'px';

  }

}

let slider = new Slider({
  element: document.querySelector('#slider')
});

let slider1 = new Slider({
  element: document.querySelector('#slider1')
});