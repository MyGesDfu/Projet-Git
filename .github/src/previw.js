// preview.js

document.getElementById('preview-btn').addEventListener('click', function() {
   // Récupérer les valeurs des champs du formulaire
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const message = document.getElementById('message').value;

   // Afficher la prévisualisation
   document.getElementById('preview-name').textContent = name;
   document.getElementById('preview-email').textContent = email;
   document.getElementById('preview-message').textContent = message;

   // Cacher le formulaire et afficher la prévisualisation
   document.getElementById('contact-form').style.display = 'none';
   document.getElementById('preview').style.display = 'block';
});

// Lorsque l'utilisateur veut modifier le formulaire
document.getElementById('edit-btn').addEventListener('click', function() {
   // Réinitialiser le formulaire et retourner à la vue formulaire
   document.getElementById('contact-form').style.display = 'block';
   document.getElementById('preview').style.display = 'none';
});

// Lorsque l'utilisateur soumet le formulaire
document.getElementById('submit-btn').addEventListener('click', function() {
   // Ici vous pouvez envoyer le formulaire via un AJAX, ou un formulaire classique
   alert("Le formulaire a été soumis !");
   // Réinitialiser le formulaire
   document.getElementById('contact-form').reset();
   document.getElementById('contact-form').style.display = 'block';
   document.getElementById('preview').style.display = 'none';
});
