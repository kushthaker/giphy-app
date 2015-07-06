function ApiService($http) {

  this.$http = $http;

  this.URL = 'http://www.gifbase.com/js/tags.json';
}

angular.module('giphyApp').service('api', ApiService);

ApiService.prototype.getTags = function() {
  var self = this;

  return self.$http.get(self.URL)
  .then(function(response) {
    return response.data;
  });
};