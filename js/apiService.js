function ApiService($http) {

  this.http = $http;

  this.BASE_URL = 'http://www.gifbase.com';

}

angular.module('giphyApp').service('api', ApiService);

ApiService.prototype.getTags = function() {
  var self = this;

  return self.http.get(self.BASE_URL + '/js/tags.json')
  .then(function(response) {
    return response.data;
  });
};

ApiService.prototype.getGifsforTag = function(tagName) {
	var self = this;

	return self.http.get(self.BASE_URL + '/tag/' + tagName + '?format=json')
	.then(function(response) {
		return response.data;
	});
};

ApiService.prototype.getGifDetails = function(gifID) {
	var self = this;

	return self.http.get(self.BASE_URL + '/gif/[' + gifID + ']?format=json')
	.then(function(response) {
		return response.data;
	});
};


