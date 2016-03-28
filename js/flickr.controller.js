angular.module('flickr',['ngAnimate'])

.controller('FlickrController', ['$scope', '$http', '$q', function($scope, $http, $q){
	// $scope.searchTerm = null;
	$scope.getPhotos = getPhotos;
	$scope.showPhotos = false;

	'https://farm{farmId}.staticflickr.com/{serverId}/{id}_{secret}.jpg'

	function getPhotos(searchTerm) {
		// 1. Get search term
		// 2. Request API data
		// 3. Return matching photos
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
		    $scope.photos=data.data.photos.photo;
		    $scope.showPhotos=true;
		    // called when the data is available
		  },
		  function(data, status, headers, config) {
		    console.log('Failure :(', data, status);
		    // called when an error occurs or
		    // the server returns data with an error status
		  });
		// var defer = $q.defer();
		// defer.resolve();
		// return defer.promise;
	}

}]);
