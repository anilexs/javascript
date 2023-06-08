function additionDesChifres (paramNum, paramString, paramArray){
    for(var i = 0; i < paramNum; i++){
        paramArray.push(i);
    }
    
    var result = [paramString, paramArray]; 
    return result;
}
var num = 15;
var chaineCaractere = "le resultat de notre fonction : ";
var tab = [];

var valeurRetour = additionDesChifres(15, "le resultat de notre fonction : ", []);
var valeurRetour2 = additionDesChifres(num, chaineCaractere, tab);
console.log(valeurRetour);
console.log(valeurRetour2);