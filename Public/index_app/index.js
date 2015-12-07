var indexApp = angular.module('indexApp',[]);

indexApp.controller('greetingController', ['$scope', function($scope){
	$scope.greeting = "hello";
}])

indexApp.directive('myFirstDirective', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		template: "<div>We've made our very first directive. It's boring, but it's ours!</div>",
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
	};
});

indexApp.directive('logOnBlur', function(){
	return function (scope, element){
		element.bind("blur", function () {
			console.log("The contents have changed for element named" + this.name);
		})
	}
});


indexApp.directive('strikeThroughOnClick', function(){
	return function (scope, element, attribute){
		element.bind("click", function (){
			element.toggleClass('stricken');
		})
	}
})