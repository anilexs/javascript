{/* FizzBuzz
Ecrivez un programme qui affiche tous les nombres entre 1 et 100 avec les exceptions suivantes :

		Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3.
		Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3.
		Ensuite, améliorez votre programme pour qu'il affiche "FizzBuzz" à la place des nombres divisibles à la fois
			par 3 et par 5.
		Cet exercice a de nombreuses solutions possibles et constitue un test d'entretien d'embauche classique qui
		élimine un nombre significatif de candidats. Accrochez-vous pour le réussir !
	 */}

for (var i = 1; i<=100; i++){
    if ((i % 3 === 0) && (i % 5 === 0)){
        document.write("FizzBuzz <br>");
    }else if (i % 3 === 0){
        document.write("Fizz <br>");
    }else if (i % 5 === 0) {
        document.write("Buzz <br>");
    }else{
        document.write(i + "<br>");
    }

}