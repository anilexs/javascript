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


var monCompte = 1000;
var temps = 0;
while(monCompte < 2000){
    monCompte += 50;
    temps++;
}
document.write("<h3>Sous sur mon compte : " + monCompte + "</h3>");
document.write("<h3>Jusqu'à 2000€, il me faut : " + temps + " mois</h3>");

for(var mesSous = 100; mesSous < 2000; mesSous+=50){
    tps++;
}
document.write("<h3>Le mois suivant j'ai : " + mesSous + "</h3>");
document.write("<h3>Il aura fallu " + tps + " mois.</h3>");