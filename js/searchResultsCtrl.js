function searchResultsCtrl($location, api) {

	var self = this;

	self.location = $location;   
	self.api = api; 

	self.searchQuery = "";

	api.getTags().then(function(data) {
		self.getTags = data;
	});
}


angular.module('giphyApp').controller('searchResultsCtrl', searchResultsCtrl);

searchResultsCtrl.prototype.getGifsforTag = function(tagName) {
	//call API, handle promise

	var self = this;

	self.api.getGifsforTag(tagName).then(function(data) {
		self.giphyList = data;
	});
};