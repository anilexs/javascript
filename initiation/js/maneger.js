// // Tournez manège

// // 		Ecrivez un programme manege.js qui fait faire 10 tours de manège en affichant un message à chaque tour.

// // 		C'est le tour de manège n°1
// // 		C'est le tour de manège n°2
// // 		C'est le tour de manège n°3
// // 		C'est le tour de manège n°4
// // 		C'est le tour de manège n°5
// // 		...


// // Ensuite, améliorez votre programme pour que le nombre de tours soit saisi par l'utilisateur.
// // Testez avec des compteurs initialisés à d'autres valeurs que Zéro dans votre code.

// // Résultat :
// var manege = 0;
// while (manege < 10){
//     manege++;
//     document.write("C'est le tour de manège n°" +manege + "<br>");
// }

// for (var i = 1; i <= 10; i++){
//     document.write("C'est le tour de manège n°" +i + "<br>");
// }

// var nbTours = parseInt(prompt("nb tour :", "10"));
// var conte = 1;
// while (conte <= nbTours){
//     document.write("C'est le tour de manège n°" +conte + "<br>");
//     conte++;
// }
var nbtours2 = parseInt(prompt("nb tour :", "10"));
for (var tour = 1; tour <= nbtours2; tour++){
    document.write("C'est le tour de manège n°" +tour + "<br>");
}
