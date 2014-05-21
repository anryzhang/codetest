// Created by zr8732@126.com  on 2014/5/16.

var appModule = angular.module('app',[]);
appModule.directive('hello',function(){
    return{
        restrict:'EA',
        replace:true,
        transclude:true,
        template:'<div>' +
            '<div class="title" ng-click="toggle()">{{title}}</div>' +
            '<div class="body" ng-show="showMe" ng-transclude></div>' +
            '</div>',
        link: function (scope, element, attrs) {
            scope.showMe = false;
            scope.toggle = function toggle(){
                scope.showMe = !scope.showMe;
            }
        }
    }
});
appModule.controller('myController',function($scope){
    $scope.title = '点击展开';
    $scope.text = "这里是内部的内容";
});




