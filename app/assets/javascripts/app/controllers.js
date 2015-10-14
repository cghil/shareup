shareUpApp.controller('HomeController', ['$scope', 'ArticleService', 'session', 'SessionService', 'Share', function($scope, ArticleService, session, SessionService, Share){


	ArticleService.getLatestFeed()
		.then(function(data){
			$scope.articles = data;
		})

	console.log(session)

	$scope.user = session.user;

	$scope.newShare = {recipient: ''};

	$scope.share = function(recipient, article) {

		var share = new Share({
			url: article.link,
			from_user: $scope.user.id,
			user: recipient
		});

		share.$save();

		$scope.newShare.recipient = '';

	}

}]);