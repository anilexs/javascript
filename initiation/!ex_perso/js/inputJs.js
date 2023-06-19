// Récupère la liste déroulante #pays et le span .code
const listePays = document.getElementById("pays");
const codeSelectionne = document.querySelector("span.code");

// Sur changement de la valeur de la liste déroulante
listePays.addEventListener("change", function() {
   // Récupère la valeur de l'option sélectionnée
   let codePays = listePays.value;
   // Modifie le contenu texte du span .code
   codeSelectionne.innerText = codePays;
});