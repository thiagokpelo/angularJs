/// <reference path="../bower_components/angular/angular.min.js" />
/// <reference path="../bower_components/angular-route/angular-route.min.js" />
/// <reference path="../bower_components/angular-cookies/angular-cookies.min.js" />
/// <reference path="../bower_components/angular-resource/angular-resource.min.js" />
/// <reference path="/usr/local/bin/jasmine.js" />
/// <reference path="../js/app.js" />
/// <reference path="../js/controllers.js" />

describe('Hello World', function () {
	beforeEach(module('helloWorldApp'));

	describe('MainCtrl', function () {
		var scope, ctrl;

		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			ctrl = $controller('MainCtrl', {$scope: scope});
		}));

		it('should create initialed message', function () {
			expect(scope.message).toEqual('Hello World!');
		});
	});

	describe('ShowCtrl', function () {
		var scope, ctrl;

		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			ctrl = $controller('ShowCtrl', {$scope: scope});
		}));

		it('should create initialed message', function () {
			expect(scope.message).toEqual('Show The World!');
		});
	});

	describe('CustomerCtrl', function () {
		var scope, ctrl;

		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			ctrl = $controller('CustomerCtrl', {$scope: scope});
		}));

		it('should create initialed message', function () {
			expect(scope.customerName).toEqual("Bob's Burguers");
		});
	});
});