shareUpApp.controller('HomeController', ['$scope', 'ArticleService', function($scope, ArticleService){

	ArticleService.getLatestFeed()
		.then(function(data){
			$scope.articles = data;
			console.log(data);
		})

}]);