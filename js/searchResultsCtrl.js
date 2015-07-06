function searchResultsCtrl($location, api) {

	var self = this;

	self.location = $location;   
	self.api = api; 

	self.searchQuery = "";

	self.getTags = api.getTags().then(function(data) {
		self.getTags = data;

	});
}


angular.module('giphyApp').controller('searchResultsCtrl', searchResultsCtrl);