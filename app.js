angular.module('bedazzled', ['ui.router', 'firebase'])

.config(function( $stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/')

	$stateProvider
		.state('landing', {
			url: '/'
			, templateUrl: '/views/landing/landing.html'
		})
		.state('mainPage', {
			url: '/main'
			, templateUrl: '/views/main/main.html'
		})
		.state('make', {
			url: '/make'
			, templateUrl: '/views/make/make.html'
		})
		.state('wish', {
			url: '/wish'
			, templateUrl: '/wish.html'
		})
		.state('grant', {
			url: '/grant'
			, templateUrl: '/views/grant/grant.html'
		})
		.state('browse', {
			url: '/browse'
			, templateUrl:'/browse.html'
		})

})

.constant('firebaseUrl', {
	ref: 'https://bedazzled.firebaseio.com/'
})