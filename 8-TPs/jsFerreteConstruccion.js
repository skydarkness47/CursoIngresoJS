/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var app = angular.module('FerreteConstruccion', []);

app.controller("controlCalculo", function($scope){
$scope.test ="Hola angular";
$scope.rectangulo=function()
{
	$scope.resultado = $scope.ancho * $scope.largo;
	console.log($scope.resultado);
}
$scope.circulo =function()
{
	$scope.resultado = (Number(3,14) * $scope.radio) ^Number(2);
	console.log($scope.resultado);

}
$scope.material = function(){
	$scope.cemento = "cemento : " + (Number($scope.largo) * Number($scope.ancho)) * 2;
	$scope.cal = "cal : " + (Number($scope.largo) * Number($scope.ancho)) * 3;
	$scope.resultado = $scope.cemento + $scope.cal;
	console.log($scope.resultado);
}

});