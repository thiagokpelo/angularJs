var app = angular.module('Blog', ['ngRoute']);

app.config(function ($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'pages/home.html'
	})
	.when('/artigos', {
		templateUrl: 'pages/artigos.html',
		controller: 'ArtigosCtrl'
	})
	.when('/sobre', {
		templateUrl: 'pages/sobre.html',
		controller: 'SobreCtrl'
	})
	.otherwise({redirectTo: '/'});
});

app.controller('ArtigosCtrl', function($scope) {

	$scope.titulo = 'Artigos';
	$scope.artigos = [
		'AngularJs - Principios e Iniciante',
		'Javascript Orientado a Objeto - Testes e Estudo',
		'Less - Meu pré-processador Css preferido'
	]
})
.controller('SobreCtrl', function($scope) {

	$scope.titulo = 'Sobre';
	$scope.nome = 'Thiago Capelo .Net';
	$scope.sobre = 'Artigos sobre tecnologias Front-end';
})