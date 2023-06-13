var day = prompt("ecrire un jour de la semain", "lundi");
// (maj et minuscule)
day = day.toLowerCase();
// while (Number(day)) {
//     day = prompt("ecrire un jour de la semain", "lundi");
// }
switch (day) {
  case "lundi":
    document.write("demain nous seron mardi");
    break;
  case "mardi":
    document.write("demain nous seron mercredi");
    break;
  case "mercredi":
    document.write("demain nous seron jeudi");
    break;
  case "jeudi":
    document.write("demain nous seron vendredi");
    break;
  case "vendredi":
    document.write("demain nous seron samedi");
    break;
  case "samedi":
    document.write("demain nous seron dimanche");
    break;
  case "dimanche":
    document.write("demain nous seron lundi");
    break;
  default:
    document.write("nous prenons que les jours de la semaine");
    day = prompt("ecrire un jour de la semain", "lundi");
}

// var dayif = prompt("ecrire un jour de la semain", "lundi");
// while (Number(dayif)) {
//   dayif = prompt("ecrire un jour de la semain", "lundi");
// }
// if (dayif == "lundi") {
//   document.write("demain nous seron mardi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron mercredi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron jeudi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron vendredi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron samedi");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron dimanche");
// } else if (dayif == "mardi") {
//   document.write("demain nous seron lundi");
// } else {
//   document.write("nous prenons que les jours de la semaine");
// }