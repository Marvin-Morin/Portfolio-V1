const burger = document.querySelector('#burger');
const nav = document.querySelector('nav ul');

let check = true;

burger.addEventListener('click', () => {


    burger.src = (check = check) ? `./Portfolio/ressources/icons/close-blanc.png` : `./Portfolio/ressources/icons/burger.png`;

    if (check = check) {
        nav.classList.remove('navfermeture');
        nav.classList.add('navouverture');

    } else {
        nav.classList.remove('navouverture');
        nav.classList.add('navfermeture');
    }

    check = !check;

});



/*************************************************************************************** */




/* ANIMATION DOM */

const unecompetence = document.querySelectorAll('.unecompetence');



let options = {
    rootMargin: "-10% 0px",
    threshold: 0
};


function handleIntersect(entries) {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style = "opacity: 1; transform: translateX(0%);";
        }
    })
};




const observer = new IntersectionObserver(handleIntersect, options);

unecompetence.forEach(section => {
    observer.observe(section)
});



const indicateurDeScroll = document.querySelector('#indicateurdescroll');
const comptetencetitre = document.querySelector('#comptetencetitre');
const topIndicator = document.querySelector('#top');

window.addEventListener('scroll', () => {

    let scrollY = this.scrollY;

    scrollY <= 1300 ? topIndicator.style.display = 'none' : topIndicator.style.display = 'flex';
    scrollY >= 110 ? indicateurDeScroll.style.display = 'none' : indicateurDeScroll.style.display = 'flex';
});




/*************************************************************************************** */





/*****  Mon fichier "Json" qui contient toutes les images de mon carousel :     */
let mesProjetImages = [

    {
        adresse: `La-Creme.png`
    },

    {
        adresse: `BG-Aleatoire.png`
    },

    {
        adresse: `frontend-mentor-exercice.png`
    },

    {
        adresse: `Rotation_Image.png`
    },

    {
        adresse: `Quiz.png`
    },

    {
        adresse: `wp-shop.png`
    },

    {
        adresse: `calculatrice-image.png`
    },

    {
        adresse: `API-TVMAZE.png`
    }
];

/* Un module explicatif pour chaque projet    */
let messageExplicatif = [

    {
        message: `Une maquette que j'ai développée en cours de front.`,
        lien: `Mes-projets/Front-End/HTML-CSS/La-Creme/index.html`
    },

    {
        message: `Apprendre à gérer des valeurs aléatoirs en javascript.`,
        lien: `Mes-projets/Perso/JavaScript/BG_aleatoire/index.html`
    },

    {
        message: `Une maquette du site "Front-end mentor que j'ai codé pour améliorer mes compétences en HTML / CSS et Javascript.`,
        lien: `Mes-projets/Front-End/HTML-CSS/Frontend-mentor/index.html`
    },

    {
        message: `Je voulais faire cette exercice pour apprendre à gérer les values en javascript.`,
        lien: `Mes-projets/Perso/JavaScript/Rotation-une-image`
    },

    {
        message: `Apprendre l'algorithmie avec TypeScript.`,
        lien: `Mes-projets/Perso/JavaScript/Quiz/index.html`
    },

    {
        message: `Apprendre à maitriser le CMS Wordpress ainsi que les extensions : WooCommerce, Yoast SEO, SecuPress Free, UpdraftPlus, WP-Optimize.`,
        lien: `https://marvin.fronthub.fr/wp/`
    },

    {
        message: `Apprendre à maitriser l'algorithmie / les opérateurs en TypeScript.`,
        lien: `Mes-projets/Perso/JavaScript/Calculatrice/index.html`
    },

    {
        message : `Apprendre à maitriser une API en manipulant un fichier Json.`,
        lien: ` Mes-projets/Front-End/JavaScript/API-METEO/index.html`
    }
];




//Je prends mon id "imagesprojets" afin de créer à l'interieur un élément image afin d'afficher mon image de mon projet
const mesprojets = document.querySelector('#imagesprojets');
const img = document.createElement('img');

//Je créer le bouton retour
const boutonRetour = document.createElement('button');
boutonRetour.classList.add('boutonretour');
boutonRetour.innerHTML = 'Retour';


//Je mets boutonRetour à ma div "mesprojets"
mesprojets.appendChild(boutonRetour);
//J'apporte à ma section mesprojets l'élément img
mesprojets.appendChild(img);
//Je mets par défaut la première image de mon fichier "Json" mesProjetImages qui se situe à l'index 0
img.setAttribute('src', `./Portfolio/ressources/imagesprojets/La-Creme.png`);



/* Création d'un module explicatif pour chaque images :      */
let module = document.createElement('div');
//Je mets une class à ma module pour la styliser
module.classList.add('module');
//J'apporte module dans ma div mesprojets
mesprojets.appendChild(module);

/* Je créer mon élément img qui va contenir ma croix     */
let imgCroix = document.createElement('img');
imgCroix.classList.add('croix');
//J'ajoute src='+mon chemin d'accès à ma croix'
imgCroix.setAttribute('src', `./Portfolio/ressources/icons/close-bleu.png`);
//Que j'apporte dans mon module
module.appendChild(imgCroix);


/* Importer un paragraphe pour écrire le message explicatif à l'intérieur    */
const monParagraphe = document.createElement('p');
//J'apporte mon "p" dans mon module
module.appendChild(monParagraphe);
//Pour mon premier projet par défaut je met mon premier message :
monParagraphe.innerHTML = `Une maquette que j'ai développée en cours de front`;

//Je vais créer un bouton qui va contenir un lien "a" qui sera nommé "lien dans mon fichier "Json" des texts de mon module pour indiquer le lien vers le projet
const boutonVersProjet = document.createElement('a');
boutonVersProjet.classList.add('boutonprojet');
boutonVersProjet.innerHTML = 'Voir le projet';
module.appendChild(boutonVersProjet);
boutonVersProjet.setAttribute('href', `Mes-projets/Front-End/HTML-CSS/La-Creme/index.html`);

//Je sauvegarde ma position actuel dans mon fichier "Json"
//Par defaut, je l'initialise à 0 car j'ai envie de montrer en premier mon projet "la crème" qui est à l'index 0
let sauvegardeDeMaPositionDansMesImages = 0;

//Ma fonction qui va me permettre de naviguer dans mon fichier "Json" grâce à l'indentation de index à ma position sauvegardeDeMaPositionDansMesImages qui se fera en paramêtre de ma fonction "affichageEnTempsReelDeMonImageDemande" à chaque clique de mes boutons
const affichageEnTempsReelDeMonImageDemande = (index) => {
    //sauvegardeDeMaPositionDansMesImages + sauvegardeDeMaPositionDansMesImages + index qui va être incrémenter à chaque clique sur un de mes bouton
    sauvegardeDeMaPositionDansMesImages += index;
    //Si sauvegardeDeMaPositionDansMesImages est superieur ou égale à tout mon fichier "Json", alors je revien à l'index 0 de ce fichier
    if ((sauvegardeDeMaPositionDansMesImages >= mesProjetImages.length) && (sauvegardeDeMaPositionDansMesImages >= messageExplicatif.length)) {
        sauvegardeDeMaPositionDansMesImages = 0;
    }
    //Si sauvegardeDeMaPositionDansMesImages est inférieur à 0 de mon fichier "Json", alors je retourne de -1 à l'index actuel de ce fichier
    if (sauvegardeDeMaPositionDansMesImages < 0) {
        //Nous retourne -1 (images)
        sauvegardeDeMaPositionDansMesImages = mesProjetImages.length - 1;
        sauvegardeDeMaPositionDansMesImages = messageExplicatif.length - 1;
    }
    //J'affiche une image de mon fichier "Json" en fonction de la où l'index qui est sauvegardé dans "sauvegardeDeMaPositionDansMesImages" se situe dans ce fichier
    img.setAttribute('src', `./Portfolio/ressources/imagesprojets/` + mesProjetImages[sauvegardeDeMaPositionDansMesImages].adresse);


    //J'assoscie mon fichier "Json" de mes messages explicatif à l'index qui est sauvegardé dans "sauvegardeDeMaPositionDansMesImages" se situe dans le fichier "mesProjetImages" pour assoscié le bon message au bon projet
    // messageExplicatif = sauvegardeDeMaPositionDansMesImages;
    monParagraphe.innerHTML = messageExplicatif[sauvegardeDeMaPositionDansMesImages].message;
    boutonVersProjet.setAttribute('href', messageExplicatif[sauvegardeDeMaPositionDansMesImages].lien);
}

//Chaque click sur l'image d'un projet ouvrira le module associé :
img.addEventListener('click', () => {
    module.style.display = 'flex';
    // monParagraphe.innerHTML = messageExplicatif[sauvegardeDeMaPositionDansMesImages].message;
});

//Pour chaque clique sur la croix, cela modifie le module en display = none;
imgCroix.addEventListener('click', () => {
    module.style.display = 'none';
});

//Je créer le bouton suivant
const boutonSuivant = document.createElement('button');
boutonSuivant.innerHTML = 'Suivant';
//J'apporte boutonSuivant à ma div mesprojets
mesprojets.appendChild(boutonSuivant);


//Je modifie ma position sauvegarder "sauvegardeDeMaPositionDansMesImages" en indexant de 1 où -1 grâce au paramêtre index de cette même fonction
boutonRetour.addEventListener('click', () => affichageEnTempsReelDeMonImageDemande(-1));
boutonSuivant.addEventListener('click', () => affichageEnTempsReelDeMonImageDemande(1));


const contactliste = document.querySelector('#contactliste');
const mail = document.querySelector('#mail');

contactliste.addEventListener('click', () => {
    alert('Formulaire de contact crée coté Front mais en attente du back-end pour la finalisation.');
    mail.click();
});