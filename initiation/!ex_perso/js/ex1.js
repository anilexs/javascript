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

// var couleurs = ['rouge', 'vert', 'bleu'];
// for (var w = 0; w < couleurs.length; w++) {
//     console.log(couleurs[w]);
//     document.write("<p>" + couleurs[w] + "</p>");
// }

// //Affichage à partir du dernier élément
// for (var w = 2; w >= 0; w--) {
//     console.log(couleurs[w]);
//     document.write("<p>" + couleurs[w] + "</p>");
// }

// var fruits =["Apple", "Banana"];
// console.log(fruits);
// //Ajouter à la fin du tableau
// var newLength = fruits.push('Orange', 'Citron');

// // AU LIEU DE MODIFIER LE TABLEAU ON EN CREE UN AUTRE IDENTIQUE
// console.log('Tableau fruits initial : ' + fruits);
// //Ajouter à la fin du tableau
// var newLength = fruits.push('Orange', 'Citron');

// console.log('Tableau fruits ajout des deux éléments : ' + fruits);
// // console.log(typeof fruits);
// // console.log(newLength);

// var lastElement = fruits.pop();

// console.log('Tableau fruits après avoir supprimé le dernier élement : ' + fruits);
// console.log('La taille finale du tableau : ' + fruits.length);
// console.log(typeof fruits);
// console.log('La valeur du dernier élement supprimé : ' + lastElement);

// var fruits =["Apple", "Banana"];
// console.log('Tableau fruits initial : ' + fruits);
// //Ajouter à la fin du tableau
// var newLength = fruits.push('Orange', 'Citron');


// console.log('Tableau fruits ajout des deux éléments : ' + fruits);
// // console.log(typeof fruits);
// // console.log(newLength);

// var lastElement = fruits.pop();

// console.log('Tableau fruits après avoir supprimé le dernier élement : ' + fruits);
// console.log('La taille finale du tableau : ' + fruits.length);
// console.log(typeof fruits);
// console.log('La valeur du dernier élement supprimé : ' + lastElement);

// var fruits =["Apple", "Banana"];
// console.log('Tableau fruits initial : ' + fruits);
// //Ajouter à la fin du tableau
// var newLength = fruits.push('Orange', 'Citron');


// console.log('Tableau fruits ajout des deux éléments : ' + fruits);
// console.log(typeof fruits);
// console.log(typeof newLength);
// console.log(newLength);

// var lastElement = fruits.pop();

// console.log('Tableau fruits après avoir supprimé le dernier élement : ' + fruits);
// console.log('La taille finale du tableau : ' + fruits.length);
// console.log(typeof lastElement);
// console.log('La valeur du dernier élement supprimé : ' + lastElement);

// var first = fruits.shift(); 

// EX 05/06/23

// var string = prompt("", "prenon");
// var number = prompt("", "age");
// if ((Number(number)) && (isNaN(string))){
    //     console.log(typeof string + "il devrais etre string");
    //     console.log(typeof number + "il devrais etre number");
    
    // }else{
        //     console.log("nan");
        // }
    function MyName (string, number){
        var string = prompt("votre prenom ?", "prenom");
        var number = prompt("votre age ?", "age");
        number = parseInt(number);
    if (Number(number) && isNaN(string)){
    console.log(typeof string + "il devrais etre string");
    console.log(typeof number + "il devrais etre number");
    document.write("Je m'appelle " + string + " et j'ais  " + number + " ans");

    }else{
    console.log("nan");
    document.write("navrais mais sais non !!! en 1 sais votre prenom et en 2 votre age");
    }
}
MyName();

// v2
    var prenom = prompt("Saisir votre prénom :");
var age = prompt("Saisir votre âge :");

// console.log(prenom,age);

//2- vérification des valeurs
if (isNaN(prenom) && !isNaN(age)) {
    affichagePrenomAge(prenom, age); 
}

function affichagePrenomAge(val1, val2) {
    var result = "Je m'appelle " + val1 + "et j'ai " + val2 + "ans";
    document.write(result);
}