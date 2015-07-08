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
		
		//ran into weird error here,
		//had to set data.gifs on controller for it to work
		//data alone wasn't enough
		
		self.giphyListObject = data;
		self.giphyList = data.gifs;
	});
};