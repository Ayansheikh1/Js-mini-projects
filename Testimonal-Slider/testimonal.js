


const testimonals= [
  {
    name: 'Ayan',
    text: 'Silence.....the only language i fluent in.',
    imgUrl:'images\photo-1570295999919-56ceb5ecca61.avif'
  },
  {
    name: 'Anam',
    text: 'Silence.....the only language i fluent in.',
    imgUrl:'images\photo-1570295999919-56ceb5ecca61.avif'
  },
  {
    name: 'Ashar',
    text: 'Silence.....the only language i fluent in.',
    imgUrl:'images\photo-1570295999919-56ceb5ecca61.avif'
  }
];

testimonals.forEach((testimonal) => {
 const name = testimonal.name;
 const text = testimonal.text;
 const imgUrl = testimonal.imgUrl;

 function updateTestimonal(){
  document.querySelector('.js-container').innerHTML = `
  <img class="image" src="${imgUrl}">
     <p class="text">
      ${text}
     </p>
     <p class="writer-name">${name}</p>
  `;

  setTimeout(() => {
    updateTestimonal()
  },10000);
 }

updateTestimonal();

 

 
});

}

