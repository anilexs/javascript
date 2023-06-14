// var celsius = prompt("degret celsius ?", "celsius");
// if (Number(celsius)){
//     var fahrenheit = celsius * (9/5) + 32;
//     document.write("la convertion de " + celsius + "°C en fahrenheit et de " + fahrenheit + " °F");

// }else{
//     document.write("une erreur et survenue");
// };

var fahrenheit = prompt("degret fahrenheit ?", "fahrenheit");
if (Number(fahrenheit)){
    var celsius = (fahrenheit - 32) * 5/9;
    document.write("la convertion de " + fahrenheit + "°F en fahrenheit et de " + celsius + " °C");

}else{
    document.write("une erreur et survenue");
};