'use strict';

var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl', [
	'$scope', '$location', '$http', function ($scope, $location, $http) {
		$scope.message = "Hello World!";
}]);

helloWorldControllers.controller('ShowCtrl', [
	'$scope', '$location', '$http', function ShowCtrl ($scope, $location, $http) {
		$scope.message = "Show The World!";
}]);