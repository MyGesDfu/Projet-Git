// image.js

// Description du bug :
// Les images ne se chargent pas correctement sur la page d'accueil. Au lieu des images, des icônes "image manquante" sont affichées.

// Fonction pour vérifier si une image se charge correctement
function checkImageLoading() {
   const images = document.querySelectorAll('img'); // Récupère toutes les images sur la page
   images.forEach((img) => {
       // Si l'image échoue à se charger, elle sera remplacée par une icône d'image manquante
       img.addEventListener('error', () => {
           console.error(`Image manquante : ${img.src}`);
           // Remplacer le chemin par une icône d'image manquante
           img.src = 'path/to/missing-image-icon.png'; // Changez ce chemin pour celui de votre icône d'erreur
       });

       // Quand l'image se charge correctement
       img.addEventListener('load', () => {
           console.log(`Image chargée correctement : ${img.src}`);
       });
   });
}

// Fonction pour simuler la reproduction du bug
function reproduceBug() {
   console.log('Étape 1 : Aller sur la page d\'accueil du site.');
   console.log('Étape 2 : Observer les sections avec des images.');
   console.log('Étape 3 : Les images ne se chargent pas et sont remplacées par des icônes d’erreur.');
}

// Comportement attendu
function expectedBehavior() {
   console.log('Les images devraient se charger correctement et s\'afficher dans les sections prévues, sans erreurs.');
}

// Exécuter le script une fois que le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
   checkImageLoading(); // Vérifie le chargement des images à l'ouverture de la page
   reproduceBug(); // Simule le comportement du bug
   expectedBehavior(); // Logue le comportement attendu
});

// Capture d'écran :
// (Ajouter une capture d’écran montrant les icônes d’image manquante dans la console du navigateur ou en affichant un message d'erreur dans l'UI de la page.)

// Informations de débogage supplémentaires
const systemInfo = {
   desktop: {
       os: 'Windows 10',
       browser: 'Mozilla Firefox',
       version: '110.0'
   },
   smartphone: {
       device: 'iPhone 11',
       os: 'iOS 16',
       browser: 'Safari',
       version: 'Dernière version'
   },
   additionalContext: 'Ce problème semble survenir uniquement sur les pages avec plusieurs images à charger en même temps. Les images se chargent correctement lorsque seules quelques images sont présentes.'
};

console.log('Informations système :', systemInfo);
