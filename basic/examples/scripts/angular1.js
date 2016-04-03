var app = angular.module("macModule", []);

//Criando e registrando o controller
app.controller("macController", function ($scope) {
	$scope.mensagem = "AngularJS Conceitos Básicos";
});