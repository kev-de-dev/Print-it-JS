// Définition des diapositives du carrousel
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Récupération des éléments HTML du carrousel
const imgSlider = document.querySelectorAll('.img__slider'); // Les images du carrousel
const dots = document.querySelectorAll('.dot'); // Les points de navigation (dots)

let currentSlideIndex = 0; // Variable pour stocker l'index de la diapositive affichée actuellement
const totalSlides = imgSlider.length; // Nombre total d'images dans le carrousel

const previousButton = document.querySelector('.precedent'); // Le bouton "précédent"
const nextButton = document.querySelector('.suivant'); // Le bouton "suivant"

// Fonction pour enlever la classe 'active' de toutes les images du carrousel
function removeActiveImages() {
  imgSlider.forEach((slide) => slide.classList.remove('active'));
}

// Fonction pour enlever la classe 'dot_selected' de tous les points de navigation (dots)
function removeActiveDots() {
  dots.forEach((dot) => dot.classList.remove('dot_selected'));
}

// Fonction pour gérer le carrousel
function handleCarousel(slideDirection) {
  // Mise à jour de l'index en fonction de la direction (1 pour le suivant, -1 pour le précédent)
  currentSlideIndex += slideDirection;

  // Vérification si l'index dépasse les limites du carrousel
  if (currentSlideIndex < 0) {
    currentSlideIndex = totalSlides - 1; // Revenir à la dernière diapositive si on dépasse le début
  } else if (currentSlideIndex >= totalSlides) {
    currentSlideIndex = 0; // Revenir à la première diapositive si on dépasse la fin
  }

  // Mise à jour des éléments visuels
  removeActiveImages();
  imgSlider[currentSlideIndex].classList.add('active');
  removeActiveDots();
  dots[currentSlideIndex].classList.add('dot_selected');
}

// Gestion du clic sur le bouton "suivant"
nextButton.addEventListener('click', () => handleCarousel(-1)); 

// Gestion du clic sur le bouton "précédent"
previousButton.addEventListener('click', () => handleCarousel(1)); 


// Fonction pour gérer le carrousel automatiquement toutes les 3 secondes
function autoCarousel() {
  handleCarousel(1);
}

// Démarrer le carrousel automatique en appelant la fonction autoCarousel() toutes les 3 secondes
setInterval(autoCarousel, 3250);


