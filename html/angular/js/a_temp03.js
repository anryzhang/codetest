// Created by zr8732@126.com  on 2014/5/17.

var routeApp = angular.module("routeApp",['ngRoute']);
routeApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/temp',{
            templateUrl:'atemp03.html',
            controller:'RoteListCtl'
        })
        .otherwise({
            redirecoTo:'/'
        })


}]);
routeApp.controller('RoteListCtl',function($scope,$routeParams){
    $scope.id = $routeParams.id;
});