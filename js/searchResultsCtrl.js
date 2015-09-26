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
		
		self.giphyListObject = data;
		console.log(data);
	});
};

searchResultsCtrl.prototype.getDetails = function(gifID) {

	this.location.path('/giphy/' + gifID);

}

//1. use resolve in router to load API before details page
//2. use routeprovider to give gifdetails controller details
//3. click tag to search h
//4. 



