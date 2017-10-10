'use strict';

class Gallery {
  constructor({element, pictures}) {
    this.element = element;
    this.pictures = pictures;

    this.render();

    this.element.querySelector('.gallery__thumbs').addEventListener('click', (event) => {
      event.preventDefault();
      let a = event.target.closest('a');
      this.element.querySelector('.gallery__large-img').src = a.href;
    });
  }


  render() {
    this.element.classList.add('gallery');
    let picturesHtml = '';

    this.pictures.forEach(({large, thumb, title}) => {
      picturesHtml += `
        <a href="${large}" title="${title}"><img src="${thumb}"></a>
      `;
    });

    this.element.innerHTML = `
      <p>
        <img class="gallery__large-img" 
             src="${this.pictures[0].large}" 
             alt="Large image">
      </p>
    
      <div class="gallery__thumbs">
        ${picturesHtml}
      </div>
    `;
  }


}


let gallery1 = new Gallery({
  element: document.querySelector('#gallery1'),
  pictures: [
   
    {
      large: 'https://js.cx/gallery/img2-lg.jpg',
      thumb: 'https://js.cx/gallery/img2-thumb.jpg',
      title: 'Image2',
    },
    {
      large: 'https://js.cx/gallery/img3-lg.jpg',
      thumb: 'https://js.cx/gallery/img3-thumb.jpg',
      title: 'Image3',
    },
    {
      large: 'https://js.cx/gallery/img4-lg.jpg',
      thumb: 'https://js.cx/gallery/img4-thumb.jpg',
      title: 'Image4',
    },
    {
      large: 'https://js.cx/gallery/img5-lg.jpg',
      thumb: 'https://js.cx/gallery/img5-thumb.jpg',
      title: 'Image5',
    },
    {
      large: 'https://js.cx/gallery/img6-lg.jpg',
      thumb: 'https://js.cx/gallery/img6-thumb.jpg',
      title: 'Image6',
    },
  ]
});