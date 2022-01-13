/*
Exercise #1
Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?
*/

function transaccion(){
	var tran = prompt("Dame cuentas transacciones hiciste");
	var costo = prompt("Dame el costo total de las transacciones");
	var resultado = (tran*3) + (costo*1.01);
	alert(resultado);
}
transaccion();