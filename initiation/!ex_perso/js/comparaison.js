var val1 = prompt("number", "8");
var val2 = prompt("number", "9");
while (isNaN(val1)){
    val1 = prompt("number", "8");
}
while (isNaN(val2)){
    val2 = prompt("number", "9");
}
if (val1 > val2){
    document.write(val1 +" et plus grand que "+ val2);
}else if (val1 < val2){
    document.write(val2 +" et plus grand que "+ val1);
}else if(val1 == val2){
    document.write(val1 +" et "+ val2 + " sont égales");
}else{
    document.write("code erreur : 183-275-c55");
}