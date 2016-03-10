var singleApp = angular.module('singleApp', ['ngRoute']);


singleApp.config(function($routeProvider){


	$routeProvider

	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})
	.when('/about', {
		templateUrl: 'pages/about.html',
		controller: 'aboutController'
	})
	.when('/contact', {
		templateUrl: 'pages/contact.html',
		controller: 'contactController'
	})
	.otherwise({redirectTo: '/'});
});


singleApp.controller('mainController', function($scope){
	$scope.message = 'Everyone come and see how good I look!!!';
});

singleApp.controller('aboutController', function($scope){
	$scope.message = 'Look! I am an about page.';
});

singleApp.controller('contactController', function($scope){
	$scope.message = 'Contact us! Jk. This is just a demo.';
});