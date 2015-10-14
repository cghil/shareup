var shareUpApp = angular.module('shareUpApp', ['ngRoute', 'ngResource']);

shareUpApp.config(function($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl: "templates/dashboard.html",
		controller: 'HomeController',
		resolve: {
			session: function(SessionService) {
				return SessionService.getCurrentUser();
			}
		}
	})
	.otherwise({redirectTo: '/'});
});