var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
	$locationProvider.html5mode(true);

	$routeProvider
	.when('/', {
		templateUrl: 'app/views/home.html',
		controller: 'HomeCtrl'
	})
	.when('/sobre', {
		templateUrl: 'app/views/sobre.html',
		controller: 'SobreCtrl'
	})
	.when('/contato', {
		templateUrl: 'app/views/contato.html',
		controller: 'ContatoCtrl'
	})

	.otherwise({redirectTo: '/'});
})