/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/


var app = angular.module('FerretePinturas', []);

app.controller("FaC", function($scope){
$scope.fac=function()
{	
	$scope.resultado=($scope.temp-32) * 5/9;
	console.log($scope.resultado);
}
$scope.caf =function()
{
	$scope.resultado=($scope.temp * 9/5)+32;
	console.log($scope.resultado);

}

});