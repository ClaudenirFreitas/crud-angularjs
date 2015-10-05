var grafos = angular.module('GrafosApp', []); 
grafos.controller('GrafostCtrl', function ($scope) { // Nome do Controler - GrafosCtrl 
	$scope.cidades = []; // Vetor esta vazio para receber novas cidades
	



  $scope.adicionar = function(){ // Função para adicionar as cidades e a distância entre elas. Através do Push
  	$scope.cidades.push({
  		cidadeOne:$scope.cidades.cidadeOne,
  		cidadeTwo:$scope.cidades.cidadeTwo,
  		distancia:$scope.cidades.distancia + " KM" 
  	});
  };
  
  $scope.remove = function($index){ 
  	$scope.cidades.splice($index, 1); 
  };

});

