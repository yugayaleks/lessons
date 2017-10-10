'use strict';

class ToolTip {
  constructor(element) {
    this.element = element;
    this.element.insertAdjacentHTML('beforeEnd', '<div class="tooltip__message">1</div>');

    this.toolTipMessage = this.element.querySelector('.tooltip__message');

    this.element.addEventListener('mouseover',(event) => {
      this.onMouseover(event);
    });

    this.element.addEventListener('mouseout',(event) => {
      this.onMouseout(event);
    });
  }



  onMouseover(event) {
    let toolTipText = event.target.dataset.tooltip;

    if (!toolTipText) {
      return;
    }

    this.toolTipMessage.innerHTML = toolTipText;
    this.toolTipMessage.classList.remove('tooltip__message--hidden');

    let coord = event.target.getBoundingClientRect();
    let y = (this.toolTipMessage.clientHeight > coord.top)
      ?  coord.bottom + window.pageYOffset
      : coord.top - this.toolTipMessage.clientHeight + window.pageYOffset;
    let x = coord.left - (this.toolTipMessage.clientWidth - coord.width) / 2 + window.pageXOffset ;

    this.toolTipMessage.style.left = x + 'px';
    this.toolTipMessage.style.top = y + 'px';
  }

  onMouseout(event) {
    let toolTipText = event.target.dataset.tooltip;
    if (toolTipText) {
      this.toolTipMessage.innerHTML = '';
      this.toolTipMessage.classList.add('tooltip__message--hidden');
    }
  }
}


let toolTip = new ToolTip(document.body);