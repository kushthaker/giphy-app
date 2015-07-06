var app = angular.module('giphyApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: 'searchResults.html',
		controller: 'searchResultsCtrl as ctrl'
	})
	.when('/giphy/:giphyId', {
		templateUrl: 'gifDetails.html',
		controller: 'gifDetailsCtrl as ctrl'
	})
	.otherwise({
		redirectTo: '/home',
	})

});