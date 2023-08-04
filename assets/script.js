//////////////////////     Déclaration des variables de const   ///////////////////////////

//const= constante 
const slides = [
  //slide = Tableau  : array
  {
    image: "slide1.jpg", 
    //  image: "slide.jpg", =Chemin de l'image associée à cette diapositive.
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>", 
    // propriétés :Tagline 
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

///////////////////////////////   const = document.querySelectorAll('.');  ///////////////////////////////////////////////

const imgSlider = document.querySelectorAll('.img__slider'); //<img class="banner-img img__slider" 
// Sélectionne toutes les images du carrousel

//  sélectionne tous les points de navigation (dots) en utilisant la classe CSS '.dot'
const dots = document.querySelectorAll('.dot'); 
// Sélectionne tous les points de navigation (dots)

// On sélectionne le bouton "précédent" en utilisant la classe CSS '.precedent'
const previousButton = document.querySelector('.precedent'); 
// Sélectionne le bouton "précédent"

// On sélectionne le bouton "suivant" en utilisant la classe CSS '.suivant'
const nextButton = document.querySelector('.suivant'); 
// Sélectionne le bouton "suivant" 


//Variables :
// La propriété 'length' de la variable 'imgSlider' =  nombre total d'images présentes dans le carrousel
const totalSlides = imgSlider.length; // length= longueur

//ce qui permet de connaître le nombre total d'images dans le carrousel. 
//Cela sera utile pour gérer le défilement et la mise à jour du carrousel.

//currentSlideIndex: C'est une variable déclarée avec le mot-clé let.
// Elle est utilisée pour stocker l'index de la diapositive actuellement affichée dans le carrousel. 
// Variable pour stocker l'index de la diapositive affichée actuellement
let currentSlideIndex = 0; 
// let = déclaration
// currentSlideIndex = variables
//Elle est initialisée à 0.

// Gestion du clic sur le bouton "précédent"
previousButton.addEventListener('click', () => handleCarousel(1)); 

// Gestion du clic sur le bouton "suivant"
nextButton.addEventListener('click', () => handleCarousel(-1)); 

function removeActiveImages() {
  imgSlider.forEach((slide) => slide.classList.remove('active'));
  // Fonction pour enlever la classe 'active' de toutes les images du carrousel
}

// Fonction pour enlever la classe 'dot_selected' de tous les points de navigation (dots)
function removeActiveDots() {
  dots.forEach((dot) => dot.classList.remove('dot_selected'));
}

// Fonction pour gérer le carrousel en fonction de la direction (1 pour le suivant, -1 pour le précédent)
function handleCarousel(slideDirection) {
  // On met à jour l'index de la diapositive actuellement affichée en fonction de la direction 
  currentSlideIndex += slideDirection;

  // Vérification si l'index dépasse les limites du carrousel
  if (currentSlideIndex < 0) {
    // Si l'index devient négatif, cela signifie que l'on a atteint le début du carrousel
    currentSlideIndex = totalSlides - 1;  
    // et on revient alors à la dernière diapositive en ajustant l'index à 'totalSlides - 1'
  }
  // Si l'index dépasse le nombre total d'images du carrousel, 
  //cela signifie que l'on a atteint la fin du carrousel et on revient alors à la première diapositive 
  //en ajustant l'index à 0
  else if (currentSlideIndex >= totalSlides) {
    currentSlideIndex = 0;
  }

  // Mise à jour des éléments visuels
  // On commence par enlever la classe 'active' de toutes les images du carrousel
  removeActiveImages();
  // Ensuite, on ajoute la classe 'active' à l'image correspondant à l'index de la diapositive actuellement affichée
  imgSlider[currentSlideIndex].classList.add('active');

  // Même chose pour les points de navigation (dots)
  // On enlève la classe 'dot_selected' de tous les points de navigation
  removeActiveDots();
  // Ensuite, on ajoute la classe 'dot_selected' au point de navigation correspondant à l'index de la diapositive actuellement affichée
  dots[currentSlideIndex].classList.add('dot_selected');

  // Ces lignes de code permettent de mettre en évidence visuellement la diapositive actuellement affichée en ajoutant la classe 'active' à l'image correspondante et en ajoutant la classe 'dot_selected' au point de navigation correspondant. Lorsque l'utilisateur clique sur les boutons "précédent" ou "suivant", l'index de la diapositive (`currentSlideIndex`) est mis à jour, ce qui déclenche cette fonction de mise à jour des éléments visuels pour refléter la diapositive actuellement affichée.

  // Enfin, on met à jour le tagline en affichant le texte correspondant à la diapositive actuellement affichée
  const tagLineElement = document.getElementById('tagline');
  tagLineElement.innerHTML = slides[currentSlideIndex].tagLine;
}
// Fonction pour gérer le carrousel automatiquement toutes les 3 secondes
function autoCarousel() {
  handleCarousel(1);
}
// Démarrer le carrousel automatique en appelant la fonction autoCarousel() toutes les 3500 millisecondes
setInterval(autoCarousel, 3500);
// Appeler handleCarousel au chargement de la page pour afficher le tagline de la première diapositive
handleCarousel(0);




