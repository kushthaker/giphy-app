function searchResultsCtrl($location, api) {

	this.location = $location;   
	this.api = api; 
	
	this.searchQuery = "";
}

angular.module('giphyApp').controller('searchResultsCtrl', searchResultsCtrl);