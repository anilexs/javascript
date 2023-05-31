// var nb1 = 10;
// if (nb1 < 50){ // si "if" est true :
//     console.log("nb1 est bien inferieur a 50 car jais comme nuber "+ nb1 );
// }else if (nb1 == 50) { // si "if n'est pas true et que "else if" n'est pas true ;
//     console.log("Je suis dant else if");
// }else{ // sinon, si "if" n'est pas true et que "else if" n'est pas true non plus :
//     console.log("Je suis dant else");
// }

// for (var i = 1; i <= 10; i+=2){
//     document.write("<p> Instruction executee : " + i + "</p>");
//     document.write(`<p> Instruction executee : ${i} </p>`);
// }
// var j = 1;
// while (j <= 10 ) {
//     document.write("<hr /><p> instruction executee : " + j + "</p>");
//     j++;
// }
// var monCompte = 1000;
// var temps = 0;
// while(monCompte < 2000){
//     monCompte += 50;
//     temps++;
// }
// document.write("<h3>Sous sur mon compte : " + monCompte + "</h3>");
// document.write("<h3>Jusqu'à 2000€, il me faut : " + temps + " mois</h3>");

// var tps = 0;
// for (var mesSous = 1000; mesSous < 2000; mesSous+=50){
//     tps++;
// }
// document.write("<h3>Le mois suivant j'ai : " + mesSous + "</h3>");
// document.write("<h3>Il aura fallu " + tps + " mois.</h3>");


// var monCompte = 1000;
// var temps = 0;
// while(monCompte < 2000){
//     monCompte += 50;
//     temps++;
// }
// document.write("<h3>Sous sur mon compte : " + monCompte + "</h3>");
// document.write("<h3>Jusqu'à 2000€, il me faut : " + temps + " mois</h3>");

// for(var mesSous = 100; mesSous < 2000; mesSous+=50){
//     tps++;
// }
// document.write("<h3>Le mois suivant j'ai : " + mesSous + "</h3>");
// document.write("<h3>Il aura fallu " + tps + " mois.</h3>");


// var fruits = ["Apple", "Banana"];
// var fruits2 = {
//   0: 'Apple',
//   1: 'Banana',
//   'troisiemeFruit': 'orange'
// };
// var prenom = ["Nawal","Wassila","Rahim","Jérémy","Narcis","Karima","Faissal","Alin","Oliver","Cynthia","Alexis","Michel","Mitra",];
// console.log(fruits.length);
// // le nombre de valeur dant le tableau
// console.log(prenom.length);
// // Acceder(via son index) a un element du tableau
// var first = fruits[0];
// var second = fruits[0];
// var third = fruits2['troisiemeFruit'];
// console.log(second);
// console.log("La valeur du troisième élément : " + third);


// var fruits = ['Apple', 'Banana'];
// var prenom = ['Nawal', 'Wassila', 'Rahim', 'Jérémy', 'Narcis', 'Karima', 'Faïssal', 'Alin', 'Oliver', 'Cynthia', 'Alexis', 'Michel', 'Mitra'];
// console.log(fruits.length);
// // 2
// console.log(prenom.length);

// var fruits = ['Apple', 'Banana', 'Orange'];
// var fruits2 = {
//     0: 'Apple',
//     1: 'Banana',
//     'troisemeFruit': 'orange'
// }

// var prenom = ['Nawal', 'Wassila', 'Rahim', 'Jérémy', 'Narcis', 'Karima', 'Faïssal', 'Alin', 'Oliver', 'Cynthia', 'Alexis', 'Michel', 'Mitra'];
// console.log(fruits.length);
// // 3
// console.log(prenom.length);
// //Accéder(via son index) à un élément du tableau
// var first = fruits[0];
// var second = fruits2[0];
// var third = fruits2['troisemeFruit'];
// console.log(second);
// console.log("La valeur du troisième élément :" +
//     third);

// var couleurs = ['rouge', 'vert', 'bleu'];
// for (var i = 0; i < couleurs.length; i++) {
//     console.log(couleurs[i]);
// }

var couleurs = ['rouge', 'vert', 'bleu'];
for (var w = 0; w < couleurs.length; w++) {
    console.log(couleurs[w]);
    document.write("<p>" + couleurs[w] + "</p>");
}

//Affichage à partir du dernier élément
for (var w = 2; w >= 0; w--) {
    console.log(couleurs[w]);
    document.write("<p>" + couleurs[w] + "</p>");
}