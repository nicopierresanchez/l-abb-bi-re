const message =
  "Merci d'avoir soumis votre requète. L'Abbé Bière répondra sous peu.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    alert(message);
  });
