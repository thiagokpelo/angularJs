var campeonato = angular.module('campeonato', []);

campeonato.controller('campeonatoCtrl',function ($scope) {
	$scope.titulo = "Classificação do Brasileirão";
	$scope.times = [
		{ nome: "Palmeiras", pontos: 22, escudo: "img/Palmeiras_logo.png" },
		{ nome: "Íbis SC", pontos: 23, escudo: "img/Íbis-SC.png" },
		{ nome: "Grêmio", pontos: 17, escudo: "img/Gremio-logo-63728B406B-seeklogo.com.gif" }
	];

	$scope.incluirTime = function (time) {
		$scope.times.push(time);
		delete $scope.time;
	}
});