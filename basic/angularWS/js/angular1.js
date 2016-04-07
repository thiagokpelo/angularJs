var app = angular.module('produtosApp', []);


app.controller('productsCtrl', function ($scope, $http) {
    
    
    $http.get("http://jsonplaceholder.typicode.com/posts")
    
        .then(function (response) {
            $scope.produtos = response.data;
            console.log('Success:', response.data);
        })
        .catch(function (error) {
            console.log('Error: ' + error);
    })
    
});