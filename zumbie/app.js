angular.module('app', []);

angular.module('app').controller('zumbisCtrl', function($scope) {

	$scope.ocorrencias = [];

	$scope.adiciona = function(ocorrencia, formIsValid) {
		if(formIsValid){
			$scope.ocorrencias.push(angular.copy(ocorrencia));
		} else {
			alert('form invalido');
		}
	}
});

angular.module('app').directive('ngBlur', function() {

	return {
		restrict: 'A',
		require: 'ngModel',
		link: function($scope, $element, $attrs, ngModel) {
			$element.on('blur', function() {
				if(ngModel.$invalid){
					$element.addClass('error');
				} else {
					$element.removeClass('error');
				};
			});
		}
	};
});