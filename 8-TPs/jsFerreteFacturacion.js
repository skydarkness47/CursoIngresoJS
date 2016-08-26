var app = angular.module('FerreteFacturacion', []);

app.controller("controladorFacturacion", function($scope){
$scope.test ="Hola angular";
$scope.sumar=function()
{
	$scope.resultado= sumartodo();
	console.log($scope.resultado);

}
$scope.promedio =function()
{
	$scope.resultado = sumartodo() / 3;
	console.log($scope.resultado);

}
$scope.precio = function(){
$scope.resultado = sumartodo() * 1.21;
	console.log($scope.resultado);

}
function sumartodo()
{
	return 	Number($scope.valor1)+Number($scope.valor2)+Number($scope.valor3);

}
});