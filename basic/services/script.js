var app = angular.module("macModule", [])
    .controller("macController", function ($scope, stringService) {

        // Implementação do escopo do controlador

        $scope.transformarTexto = function (input) {

            $scope.output = stringService.processarTexto(input);
        }
    });