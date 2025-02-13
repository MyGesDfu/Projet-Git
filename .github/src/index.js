document.addEventListener("DOMContentLoaded", function () {
   const submitButton = document.getElementById("submit-button");
   
   if (!submitButton) {
       console.error("Bouton de soumission introuvable");
       return;
   }
   
   function checkButtonVisibility() {
       const formContainer = document.getElementById("form-container");
       if (formContainer) {
           const rect = submitButton.getBoundingClientRect();
           const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
           
           if (!isVisible) {
               submitButton.style.position = "fixed";
               submitButton.style.bottom = "10px";
               submitButton.style.right = "10px";
               submitButton.style.backgroundColor = "#007bff";
               submitButton.style.color = "white";
               submitButton.style.padding = "10px 20px";
               submitButton.style.borderRadius = "5px";
               submitButton.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
           } else {
               submitButton.style.position = "static";
           }
       }
   }
   
   window.addEventListener("scroll", checkButtonVisibility);
   window.addEventListener("resize", checkButtonVisibility);
   
   checkButtonVisibility();
});