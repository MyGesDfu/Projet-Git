// Simuler une base de données de produits (à remplacer par une API en production)
const products = [
   "T-shirt",
   "Jeans",
   "Chaussures de sport",
   "Veste en cuir",
   "Sac à dos",
   "Casque audio",
   "Montre connectée",
   "Lampe de bureau",
   "Ordinateur portable",
   "Tablette"
];

// Fonction pour afficher les suggestions en temps réel
function showSuggestions(query) {
   // Si le champ est vide, cacher les suggestions
   if (!query) {
       document.getElementById('suggestions').style.display = 'none';
       return;
   }

   // Filtrer les produits en fonction de la requête
   const filteredSuggestions = products.filter(product => product.toLowerCase().includes(query.toLowerCase()));

   // Récupérer le conteneur de suggestions
   const suggestionsContainer = document.getElementById('suggestions');
   suggestionsContainer.innerHTML = '';  // Vider les suggestions précédentes

   // Si des résultats sont trouvés
   if (filteredSuggestions.length > 0) {
       // Afficher les suggestions
       filteredSuggestions.forEach(product => {
           const suggestionItem = document.createElement('div');
           suggestionItem.classList.add('suggestion-item');
           suggestionItem.textContent = product;
           suggestionItem.addEventListener('click', () => {
               document.getElementById('search-input').value = product; // Remplacer par la suggestion sélectionnée
               suggestionsContainer.style.display = 'none'; // Cacher les suggestions
           });
           suggestionsContainer.appendChild(suggestionItem);
       });
       suggestionsContainer.style.display = 'block'; // Afficher le conteneur des suggestions
   } else {
       suggestionsContainer.style.display = 'none'; // Cacher si aucun résultat
   }
}

// Ajouter un écouteur d'événement pour la saisie dans le champ de recherche
document.getElementById('search-input').addEventListener('input', (event) => {
   const query = event.target.value;
   showSuggestions(query);
});

// Fermer les suggestions si l'utilisateur clique en dehors
document.addEventListener('click', (event) => {
   if (!event.target.closest('#search-container')) {
       document.getElementById('suggestions').style.display = 'none';
   }
});
