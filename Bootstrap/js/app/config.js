'use strict';

var app = angular.module('HelpersApp');

	app.config( function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'home.html',
					controller: 'homeCtrl'
				})
				.state('aboutUs', {
					url: '/aboutUs',
					templateUrl: 'aboutUs.html'
				})
				.state('contactUs', {
					url: '/contactUs',
					templateUrl: 'contactUs.html'
				})
				.state('faq', {
					url: '/faq',
					templateUrl: 'faq.html'
				})
				.state('login', {
					url: '/login',
					templateUrl: 'login.html'
				})
				.state('signUp', {
					url: '/signUp',
					templateUrl: 'signUp.html'
				})

	});
