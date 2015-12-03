var indexApp = angular.module('indexApp',[]);

indexApp.controller('greetingController', ['$scope', function($scope){
	$scope.greeting = "hello";
}])