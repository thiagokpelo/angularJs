var app = angular.module("filtros", [])

    .controller('filtrosCtrl', function($scope){
       
        $scope.funcionarios = [
            { nome: "Thiago", nascimento: new Date("March 21 1988"), sexo: "Masculino", salario: 3500.78 },
            { nome: "Tatiane", nascimento: new Date("March 21 1988"), sexo: "Feminino", salario: 2800.30 },
            { nome: "Esdras", nascimento: new Date("March 21 1988"), sexo: "Masculino", salario: 10000.20 },
            { nome: "Sandra", nascimento: new Date("March 21 1988"), sexo: "Masculino", salario: 1500.98 },
            { nome: "Diogo", nascimento: new Date("March 21 1988"), sexo: "Masculino", salario: 6000.30 },
        ];
        
        $scope.hoje = new Date();
        $scope.alfabeto = "abcdefghijklmnopqrstuvxz";
        $scope.numeroLinhas = 3;
    });