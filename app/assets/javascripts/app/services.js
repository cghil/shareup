shareUpApp.factory('ArticleService', ['$http', '$q', function($http, $q){

	var service = {
		getLatestFeed: function(){
			var d = $q.defer();
			$http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load' +'?v=1.0&num=50&callback=JSON_CALLBACK&q='+encodeURIComponent('http://feeds.huffingtonpost.com/huffingtonpost/raw_feed'))
				.then(function(data, status){
					if (data.status === 200) {
						d.resolve(data.data.responseData.feed.entries);
					} else {
						d.reject(data);
					}
				});
			return d.promise;
		}
	};

	return service;

}]);

// I could just make a services folder then place each factory or service in its own file
// 1. Share Service
shareUpApp.factory('Share', ['$resource', function($resource){

	var Share = $resource('/api/shares/:id.json',
		{id: '@id'},
		{}
	);

	return Share;

}]);

// 2. SessionService

shareUpApp.factory("SessionService", ['$http', '$q', function($http, $q){

	var service = {
		getCurrentUser: function(){
			if (service.isAuthenticated()) {
				return $q.when(service.currentUser);
			} else {
				return $http.get('/api/current_user').then(function(resp) {
					return service.currentUser = resp.data;
				});
			}
		},

		currentUser: null,

		isAuthenticated: function(){
			return !!service.currentUser;
		}
	};
	return service;
}]);