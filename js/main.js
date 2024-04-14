const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// dichiaro la variabile contenitore
const carouselImagesContainer = document.querySelector('.my-carousel-images');

// imposto forEach
images.forEach((image, index) => {
  // per ogni immagine creo un div
  const slide = document.createElement('div');
  slide.className = 'my-carousel-item';
  if (index === 0) {
    // active per gestire quale elemento del carosello è visibile all'utente: il primo
    slide.classList.add('active');
    console.log('La prima carrozza è attiva');
  }

  // creo l'elemento immagine
  const imageElement = document.createElement('img');
  imageElement.src = image.image;
  imageElement.alt = image.title;
  imageElement.className = 'img-fluid';

  // appendo l'immagine
  slide.appendChild(imageElement);

  // div per titolo e descrizione
  const descriptionDiv = document.createElement('div');
  descriptionDiv.className = 'item-description px-3';

  // Inserisco titolo nel div
  const titleElement = document.createElement('h2');
  titleElement.textContent = image.title;
  console.log(titleElement);
  descriptionDiv.appendChild(titleElement);

  // inserisco la descrizione nel div
  const textElement = document.createElement('p');
  textElement.textContent = image.text;

  // appendo titolo e descrizione al div
  slide.appendChild(descriptionDiv);

  // appendo il div al contenitore
  carouselImagesContainer.appendChild(slide);
});