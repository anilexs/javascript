var heur = prompt("quelle heur et il :");
while(Number(heur)>24 || isNaN(heur)){
    heur = prompt("merci de metre l heur actuelle :");
}

var minut = prompt("conbien de minute :");
while(Number(minut)>60 || isNaN(minut)){
    minut = prompt("merci de metre le nombre de minute :");
}

var seconde = prompt("conbien de seconde :");
while(Number(seconde)>60 || isNaN(seconde)){
    seconde = prompt("merci de metre le nombre de seconde :");
}

if ((heur >= 0) && (heur <= 23) && (minut >= 0) && (minut <= 59) && (seconde >= 0) && (seconde <= 59)){
    seconde++;
    if (seconde === 60){
        seconde = 0;
        minut++;
    } if (minut === 60){
        minut = 0;
        heur++;
    }if (heur === 24){
        heur = 0;
    } 
    document.write("<h3>Dans une seconde il sera " + heur + " h " + minut + " m " + seconde + " s</h3>");
} else {
    // heure incorrecte
    document.write("Heure incorrecte !");
}

