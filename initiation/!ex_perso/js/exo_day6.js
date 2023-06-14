
var adjectif = []
var prenom = []

// for(var boucle = 0; boucle < 24; boucle++){
//     if (prenom.length <= 11){
//         prenom.push(prompt("prenom", "prenom"));
//         console.log(prenom);
//     } else if(adjectif.length <= 12){
//         adjectif.push(prompt("adjectif", "adjectif"));
//         console.log(adjectif);
//     }else{
//         break;
//     }
// }
function func (tab1, tab2){
    for (var i = 0; i < tab1.length; i++) {
    document.write(tab1[i] + " ");
    }
    for (var i = 0; i < tab2.length; i++) {
    document.write(tab2[i] + " ");
    }
    var space1 = tab1.join(" ");
    var space2 = tab2.join(" ");
    var retour = [space1 + space2];
    return retour;
}
var beta1 = ['alexis','marinet','adrient','chloe','nino','allia','rose','jouleca','manom','luka','chat noir','ladybug'];
var beta2 = ['adjextif1','adjextif2','adjextif3','adjextif4','adjextif5','adjextif6','adjextif7','adjextif8','adjextif9','adjextif10','adjextif11','adjextif12'];
// func(prenom, adjectif);
func(beta1, beta2);