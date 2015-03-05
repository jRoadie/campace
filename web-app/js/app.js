(function() {
    var campace = angular.module('campace', ['ngRoute']);

    campace.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/campace/user', {
            templateUrl: '/campace/templates/menu.html',
            controller: 'RouteController'
        }).when('/campace/user/edit?id=:id', {
            templateUrl: 'angular-route-template-1.jsp',
            controller: 'RouteController'
        }).otherwise({
            redirectTo: '/campace'
        })
    }]);

    campace.controller('RouteController', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.id = $routeParams.id
    }]);

})();