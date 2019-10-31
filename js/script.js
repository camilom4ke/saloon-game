// Selects elements
var mainContainer = document.getElementById("main-container");
var sliderMask = document.querySelector(".mask.w-slider-mask");

// Define player objects
const players = [{
    name: "Brajer",
    disponibility: "Malheureusement disponible",
    disponibilityClass: "perso-1-available",
    disponibilityStatus: true,
    image: "images/Brajer.png",
    srcset: "images/Brajer-p-500.png 500w, images/Brajer.png 800w",
    quote: "Hey, je prépare un nouveau festoch, tu viens ?",
    healthStatus: "faible",
    healthLevel: 20,
    healthClass: "health-faible",
},
{
    name: "Metiah",
    disponibility: "disponible",
    disponibilityClass: "perso-1-available",
    disponibilityStatus: true,
    image: "images/H.png",
    srcset: "images/H-p-500.png 500w, images/H.png 800w",
    quote: "Qui a mangé mon flan coco pendant que je dormais ?",
    healthStatus: "modérée",
    healthLevel: 50,
    healthClass: "health-moderee",
},
{
    name: "Grillz",
    disponibility: "indisponible - a débloquer",
    disponibilityClass: "non-dispo",
    disponibilityStatus: false,
    conditionUnlock: "vaincre le roi chien",
    image: "images/Screenshot_7.png",
    srcset: "images/Screenshot_7-p-500.png 500w, images/Screenshot_7.png 800w",
    quote: "Alfred ? T'es où ? Quelqu'un a vu mon assistant ?",
    healthStatus: "élévée",
    healthLevel: 70,
    healthClass: "health-eleve"
},
{
    name: "Nasser",
    disponibility: "personnage légendaire - a débloquer",
    disponibilityClass: "non-dispo",
    disponibilityStatus: false,
    conditionUnlock: "vaincre le roi chien avec Brajer",
    image: "images/Nasser.png",
    srcset: "images/Nasser-p-500.png 500w, images/Nasser.png 800w",
    quote: "Hey Snedz, c'est qui le boss de la night ?",
    healthStatus: "légendaire",
    healthLevel: 100,
    healthClass: "health-legendaire",
}
]


// define ennemies objects 

const ennemies = [
    {name : ""

    }
]


// function level


// function choice

function choosePlayer(player) {

    player.forEach(element => {
        sliderMask.innerHTML += `<div class="slide w-slide">
        <a href="index.html" class="link-block w-inline-block">
          <div class="available-perso ${element.disponibilityClass}">${element.disponibility}<br><span
          class="condition-unlock">${!element.conditionUnlock ? "" : element.conditionUnlock}</span></div>
          <img src="${element.image}" srcset="${element.srcset}" sizes="(max-width: 479px) 46vw, (max-width: 767px) 41vw, (max-width: 991px) 218.40000915527344px, 240px" alt="" class="image-perso">
          <h2 class="name-perso">${element.name}</h2>
          <p class="quote-perso">${element.quote}</p>
          <p class="health-perso">Santé : <span class="health-level-perso ${element.healthClass}">${element.healthStatus}</span></p>
        </a>
      </div>`

    });

    return sliderMask;

}

// choosePlayer(players);


// function battle

function battle (player, ennemi) {

}