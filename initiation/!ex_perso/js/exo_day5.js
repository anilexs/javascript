// var nombre1 = 5;
// var nombre2 = 3;
// var nombre3;
// console.log(nombre1);
// console.log(nombre2);

// nombre3 = nombre1;
// nombre1 = nombre2;
// nombre2 = nombre3;

// console.log(nombre1);
// console.log(nombre2);

var nombre = prompt("Quel est votre âge?");

while (nombre <= 3 || nombre>= 120 || (isNaN(nombre))) {
  nombre = prompt("Quel est votre âge?");
}

var majoriteFR = 18;

function afficheAge(agePersonne, ageAdulte){
    if ((agePersonne > 3) && (agePersonne < ageAdulte)){
      alert("Vous n'êtes pas encore majeur !")
    }

    if ((agePersonne >= ageAdulte) && (agePersonne <= 120)){
      alert("Bienvenue, vous êtes majeur.")
    }
}
afficheAge(nombre, majoriteFR);