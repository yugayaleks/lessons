'use strict';

class Draggable {
  constructor({element}) {
    this.element = element;
    let isPressed = false;

    this.element.addEventListener('mousedown', (event) => {
      isPressed = true;
      let position = this.element.getBoundingClientRect();
      this.shiftX = event.clientX - position.left;
      this.shiftY = event.clientY - position.top;

    });

    document.addEventListener('mouseup', (event) => {
      isPressed = false;
    });

    document.addEventListener('mousemove', (event) => {
      if (isPressed) {
        this.move({
          x: event.pageX - this.shiftX,
          y: event.pageY - this.shiftY,

        });

      }

    });
  }

  move({x, y}) {
    this.element.style.left = x + 'px';
    this.element.style.top = y + 'px';
    this.element.style.position = 'absolute';

  }
}

Array.from(
  document.querySelectorAll('.draggable')
)
  .forEach((element) => {
    new Draggable({element});
  });

