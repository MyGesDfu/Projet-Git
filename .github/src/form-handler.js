// form-handler.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
   event.preventDefault();  // Empêcher la soumission du formulaire par défaut

   // Récupérer les valeurs des champs
   const name = document.getElementById('name').value.trim();
   const email = document.getElementById('email').value.trim();
   const message = document.getElementById('message').value.trim();

   // Réinitialiser le message de réponse précédent
   const responseMessage = document.getElementById('response-message');
   responseMessage.textContent = '';
   responseMessage.classList.remove('error', 'success');

   // Validation côté client
   if (name === '' || email === '' || message === '') {
       responseMessage.textContent = 'Tous les champs sont obligatoires.';
       responseMessage.classList.add('error');
       return;
   }

   // Créer un objet de données pour l'envoi
   const formData = new FormData();
   formData.append('name', name);
   formData.append('email', email);
   formData.append('message', message);

   // Effectuer l'envoi du formulaire via AJAX (avec Fetch)
   fetch('/contact', {
       method: 'POST',
       body: formData
   })
   .then(response => {
       if (response.ok) {
           return response.json();
       } else {
           throw new Error('Erreur serveur');
       }
   })
   .then(data => {
       // Si le serveur renvoie un message de succès
       responseMessage.textContent = 'Message envoyé avec succès !';
       responseMessage.classList.add('success');
       // Réinitialiser le formulaire après l'envoi
       document.getElementById('contact-form').reset();
   })
   .catch(error => {
       // Gestion de l'erreur serveur (par exemple erreur 500)
       responseMessage.textContent = 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer plus tard.';
       responseMessage.classList.add('error');
   });
});
