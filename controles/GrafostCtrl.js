var grafos = angular.module('GrafosApp', []);

grafos.controller('GrafostCtrl', function($scope) { // Nome do Controler - GrafosCtrl
    $scope.cidades = []; // Vetor esta vazio para receber novas cidades

    function Trajeto(id, cidadeOne, cidadeTwo, distancia) {
        this.id = id;
        this.cidadeOne = cidadeOne;
        this.cidadeTwo = cidadeTwo;
        this.distancia = distancia;
    }

    $scope.salvar = function() { // Função para adicionar as cidades e a distância entre elas. Através do Push
        if (!$scope.cidade.id)
            $scope.cidades.push(
                new Trajeto(
                    $scope.cidades.length + 1,
                    $scope.cidade.cidadeOne,
                    $scope.cidade.cidadeTwo,
                    $scope.cidade.distancia
                ));
        $scope.cidade = {};
    };

    $scope.editar = function(id) {
        for (var cidade in $scope.cidades)
            if ($scope.cidades[cidade].id === id) {
                $scope.cidade = $scope.cidades[cidade];
                break;
            }
    };

    $scope.remove = function(id) {
        $scope.cidades = $scope.cidades.filter(function(cidade) {
            return cidade.id !== id;
        });
    };

});
