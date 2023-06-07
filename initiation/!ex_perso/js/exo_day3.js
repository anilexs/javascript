var whil = 0;
var devVitry = []
while (whil < 12){
    devVitry.push(prompt())
    console.log(devVitry);
    whil++;
}
function affichagePrenoms (prenomsDev){ 
    var listeDeveloppeurs = "Liste des développeurs de Vitry : ";
    for (var i = 0; i < prenomsDev.length; i++) {
        listeDeveloppeurs += prenomsDev[i];
    if (i !== prenomsDev.length - 1) {
        listeDeveloppeurs += " ";
    }
    }
    document.write("<p>"+listeDeveloppeurs+"</p>");
}
affichagePrenoms(devVitry);