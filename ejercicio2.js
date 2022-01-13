/*
Exercise #2
Part 1

Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.
*/

function saludar(name1,name2,name3){
	var nombres = {
		nom1: prompt("Nombre 1: "), nom2: prompt("Nombre 2"), nom3: prompt("Nombre 3")
	}
	console.log("Welcome: " + nombres.nom1 + ", " + nombres.nom2 + ", " + nombres.nom3);
	

}
saludar();

/*
Part 2

Ed would like to create a function that takes in a birth year and returns the age.

i.e. 1990 returns 30
*/

function edad(){
	var anio = prompt("Dame tu año de nacimiento: ");
	var edad = 2022 - anio;
	console.log("Tu edad es: " + edad);
};
edad();

/*
Part 3

Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.
*/


function welcome(){
	var nombres = {
		nom1: prompt("Nombre 1: "),
		nom2: prompt("Nombre 2: "),
		nom3: prompt("Nombre 3: ")
	}
	var edades = {
		edad1: prompt("Edad 1: "),
		edad2: prompt("Edad 2: "),
		edad3: prompt("Edad 3: ")
	}
	console.log("Welcome: " + nombres.nom1 + " edad: " + edades.edad1 + ", " + nombres.nom2 + " edad: " + edades.edad2 + ", " + nombres.nom3 + " edad: " + edades.edad3);
};
welcome();