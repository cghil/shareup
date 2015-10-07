var shareUpApp = angular.module('shareUpApp', ['ngRoute', 'myApp.controllers']);

shareUpApp.config(function($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl: '/templates/dashboard.html',
		controller: 'HomeController'
	})

	.otherwise({redirectTo: '/'});
});