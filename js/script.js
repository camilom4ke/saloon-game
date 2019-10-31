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

const ennemies = [{
    name: "Papy",
    niveau: 1,
    propositions: [
        { sentence: "Offrir un gilet jaune", value: false },
        { sentence: "Proposer de diviser l'addition", value: false },
        { sentence: "Voler sa carte Navigo", value: true },
        { sentence: "Monter dans le Kangoo", value: false },
        { sentence: "Envoyer une grenade dispersante", value: true },
        { sentence: "Filmer en cachette Nasser", value: false },
        { sentence: "Proposer de niquer la mode", value: true },
        { sentence: "Demander de rembourser Neslet", value: false },
        { sentence: "Offrir du safran", value: false },
    ],
    picture: "images/papy.png",
    health: 20,
},
{
    name: "Memer",
    niveau: 2,
    propositions: [
        { sentence: "Mettre un coup de tête", value: false },
        { sentence: "Appeler la Sacem pour lui", value: true },
        { sentence: "Essayer de l'attraper", value: false },
        { sentence: "Sentir son haleine", value: false },
        { sentence: "Proposer une session studio", value: false },
        { sentence: "Demander les streams d'Odin", value: true },
        { sentence: "Réclamer 2174¥ (18€)", value: true },
        { sentence: "Acheter un castor", value: false },
        { sentence: "Mettre du Khaled", value: false },
        { sentence: "Lui offrir une statut de Bouddha", value: true },
        { sentence: "L'attacher dans un cachot", value: false },
        { sentence: "Ah l'ancien", value: false },
    ],
    picture: "images/Memer.png",
    health: 40,
},
{
    name: "Syrine",
    niveau: 3,
    propositions: [
        { sentence: "Envoyer un bouton de fièvre", value: true },
        { sentence: "Proposer un dîner", value: false },
        { sentence: "Acheter du Palace", value: false },
        { sentence: "Demander la sortie de son 1er film", value: true },
        { sentence: "Proposer un apéro sans babs", value: false },
        { sentence: "Lui demander d'offrir de la sap à Rodela", value: false },
        { sentence: "Appeler SOS père battu", value: true },
        { sentence: "Proposer un week-end avec Papy", value: false },
        { sentence: "Lui demander un docu Netflix", value: false },
        { sentence: "Demander des nouvelles d'Akim et son job perdu", value: true },
        { sentence: "Offrir du Célio", value: false },
        { sentence: "Dire Bonjour Frérot", value: false },
    ],
    picture: "images/Syrine.png",
    health: 50,
},
{
    name: "Zayjeul",
    niveau: 4,
    propositions: [
        { sentence: "Demander des nouvelles de Shanon", value: false },
        { sentence: "Demander de répeter: je suis passé chez Sosh", value: true },
        { sentence: "Demander des nouvelles du poulailler", value: false },

        { sentence: "Demander à Neslet de le stranguler", value: true },
        { sentence: "Proposer un voyage sans jumper à la dernière minute", value: false },
        { sentence: "Lui trouver un appart", value: false },

        { sentence: "Voir son historique Google", value: true },
        { sentence: "Proposer un vol direct pour Dubai", value: false },
        { sentence: "Proposer d'installer des placos", value: false },

        { sentence: "Demander de soulever ses cheveux", value: true },
        { sentence: "Proposer un séjour au Vietnam", value: false },
        { sentence: "Proposer un vol aller 10€ pour Tunis avec Groshien", value: false },
    ],
    picture: "images/Zayjeul.png",
    health: 60,
},
{
    name: "Sneazz",
    niveau: 5,
    propositions: [
        { sentence: "Ah l'ancien", value: false },
        { sentence: "Ah l'ancien", value: false },
        { sentence: "Ah l'ancien", value: false },
        { sentence: "Ah l'ancien", value: true },
        { sentence: "Ah l'ancien", value: true },
        { sentence: "Ah l'ancien", value: true },
    ],
    picture: "images/Sneazzy.png",
    health: 100,
},

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

function battle(player, ennemi) {

}