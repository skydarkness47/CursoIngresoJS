/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var app = angular.module('FerreteIluminacion', []);

app.controller("controladorIluminacion", function($scope){

$scope.CalcularPrecio=function()
{
	// PUNTO A
	if($scope.precio > 5)
	{
		$scope.descuento = (Number($scope.precio) * 35) * 0.50;
		$scope.resultado =calcularP() - $scope.descuento; 
		console.log($scope.resultado);
	}
	// PUNTO B
	if($scope.precio == 5 && ($scope.marca == "ArgentinaLuz"))
	{
		$scope.descuento = ($scope.precio * 35) * 0.40;
			$scope.resultado =calcularP() - $scope.descuento; 
		console.log($scope.resultado);

	}
	else if($scope.precio == 5 && ($scope.marca != "ArgentinaLuz" ))
	{
		$scope.descuento = ($scope.precio * 35) * 0.30;
			$scope.resultado =calcularP() - $scope.descuento;  
		console.log($scope.resultado);
	}
	// PUNTO C
	if($scope.precio == 4 && ($scope.marca == "ArgentinaLuz" || $scope.marca == "FelipeLamparas"))
	{
		$scope.descuento = ($scope.precio * 35) * 0.25;
				$scope.resultado =calcularP() - $scope.descuento; 
		console.log($scope.resultado);

	}else if($scope.precio == 4 && !($scope.marca == "ArgentinaLuz" || $scope.marca == "FelipeLamparas"))
	{
		$scope.descuento = ($scope.precio * 35) * 0.20;
				$scope.resultado =calcularP() - $scope.descuento; 
		console.log($scope.resultado);
	}

		// PUNTO D
	if($scope.precio == 3 && ($scope.marca == "ArgentinaLuz"))
	{
		$scope.descuento = ($scope.precio * 35) * 0.15;
			$scope.resultado =calcularP() - $scope.descuento; 
		console.log($scope.resultado);

	}
	else if($scope.precio == 3 && ($scope.marca == "FelipeLamparas" ))
	{
		$scope.descuento = ($scope.precio * 35) * 0.10;
			$scope.resultado =calcularP() - $scope.descuento; 		$scope.resultado =calcularP() - $scope.descuento;  
		console.log($scope.resultado);
	}else if($scope.precio == 3 && !($scope.marca == "ArgentinaLuz" || $scope.marca == "FelipeLamparas"))
	{
		$scope.descuento = ($scope.precio * 35) * 0.05;
				$scope.resultado =calcularP() - $scope.descuento;  
		console.log($scope.resultado);
	}
}
 function calcularP()
{
	return Number($scope.precio) * 35 ;
}


});