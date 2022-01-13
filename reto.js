/*
Part 3

Challenge Yourself

A teacher wants to create a rubric for grading. The rubric is from 0 - 11.
Part 1

A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.
Part 2

A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.
Part 3

A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.
*/
(function (grad) {
	//comprobamos que el rango de edad sea correcto
	 if (grad <= 11 && grad >= 0) {
		 if (grad >= 5) {
			 console.log("Passed: " + true);
		 }
		 else {
			 console.log("Passed: " + false)
		 }
 
		 if (grad>=8 && grad <11) {
			 console.log("Excelent")
		 }
		 
		 if(grad == 11) {
			 console.log("Perfect")
		 }
	 }
	 else {
		 console.log("Valor no aceptado.")
	 }
	  
	})(prompt("Ingresa calificación"));