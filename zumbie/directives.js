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

angular.module('app').directive('ngZumbiSubmit', function() {

	return {
		restrict: 'E',
		require: '^form',
		scope: {
			submit: '&'
		},
		template: '<button type="submit" class="btn btn-primary">Salvar</button>',
		link: function($scope, $element, $attrs, formCtrl) {
			$element.on('click', function(){
				if (formCtrl.$valid) {
					$scope.submit();
				} else {
					alert('Form Invalido');
				}
			})
		}
	};
});

angular.module('app').directive('ngCepValidator', function() {

	return {
		restrict: 'A',
		require: 'ngModel',
		link: function($scope, $element, $attrs, ngModel) {

			$scope.$watch($attrs.ngModel, function(value) {
				if (value) {
					if (value.match(/^[0-9]{5}-[0-9]{3}$/)) {
						// setar como valido
						ngModel.$setValidity($attrs.ngModel, true);
					} else {
						//setar como invalido
						ngModel.$setValidity($attrs.ngModel, false);
					}
				} else {
					// setar como invalido
					ngModel.$setValidity($attrs.ngModel, false);
				}
			})
		}
	};
});