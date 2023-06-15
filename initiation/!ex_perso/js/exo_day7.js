var beta1 = ['alexis','marinet','adrient','chloe','nino','allia','rose','jouleca','zoe','luka','chat noir','ladybug'];
var beta2 = ['belle','gentie','attentionné','amoureu','romantique','enervent','enthousiasme','fatigue','calme','enrager','adorable','kawaii'];
function rend(nam, adj){
    for (var i=0; i<beta1.length; i++){
        var rendom = Math.floor(Math.random() * nam.length);
        var rendom2 = Math.floor(Math.random() * adj.length);
        document.write(beta1[rendom]+ " et " +beta2[rendom2] +"<br>");
    }
}
rend(beta1, beta2);