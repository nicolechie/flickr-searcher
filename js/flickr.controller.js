angular.module('flickr',['ngAnimate'])

.controller('FlickrController', ['$scope', '$http', '$q', function($scope, $http, $q){
	$scope.getPhotos = getPhotos;
	$scope.showPhotos = false;
	$scope.results = false;
	$scope.searching = false;
	$scope.tag = '';
	$scope.failure = false;
	
	function getPhotos(searchTerm) {
		$scope.searching = true;
		$scope.tag = searchTerm;

		var params = {
		    method: 'flickr.photos.search',
		    api_key: '446cc7d031a22669d9e39d05e8a2f231',
		    tags: searchTerm,
		    format: 'json',
		    nojsoncallback: 1
		}

		$http({
		    url: 'https://api.flickr.com/services/rest',
		    method: 'GET',
		    params: params,
		})
		  .then(function(data, status, headers, config) {
		    console.log('Success!', data);
		    $scope.searching=false;
		    $scope.searchTerm='';
		    $scope.results=true;
		    $scope.photos=data.data.photos.photo;
		    $scope.totalResults=data.data.photos.total;
		    $scope.showPhotos=true;
		  },
		  function(data, status, headers, config) {
		    console.log('Failure :(', data, status);
		    scope.failure=true;
		  });
		// var defer = $q.defer();
		// defer.resolve();
		// return defer.promise;
	}

}]);
