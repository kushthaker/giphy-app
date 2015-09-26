var app = angular.module('giphyApp', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'searchResults.html',
		controller: 'searchResultsCtrl as ctrl'
	})
	.otherwise({
		redirectTo: '/',
	})

});