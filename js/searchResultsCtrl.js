function searchResultsCtrl($location, api) {

	this.location = $location;   
	this.api = api; 


}

angular.module('giphyApp').controller('searchResultsCtrl', searchResultsCtrl);