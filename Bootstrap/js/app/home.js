'use strict';

var app = angular.module('HelpersApp');

	app.controller("homeCtrl", function($scope) {
		$scope.columns = [
			{
				heading: 'Whatever',
				image: 'images/HomePins/notebook_F.svg',
				studentText: 'Our tutors are certified in a variety of subjects, learn whatever you need to know.',
				tutorText: 'Teach whatever you want to teach, we offer certifications in subjects from music theory to string theory'
			},
			{
				heading: 'Whenever',
				image: 'images/HomePins/clock_F.svg',
				studentText: 'Schedule instananeous appointments or in-advance appointments. Learn whenever you want.',
				tutorText: 'Be available for instant appointments, or require a week\'s advance notice, its your choice to teach whenever you want'
			},
			{
				heading: 'Whoever',
				image: 'images/HomePins/ID_card_F.svg',
				studentText: 'You can study with whoever you want, whether they are your classmate or TA.',
				tutorText: 'Choose whoever you want to study with, every appointment requires your approval'
			},
			{
				heading: 'Wherever',
				image: 'images/HomePins/location_F.svg',
				studentText: 'Our built-in map lets you save your favorite locations. Meet wherever you want.',
				tutorText: 'Tell your students where you want to meet through our built-in map. Meet wherever you want, whether its a library or a park.'
			},
			{
				heading: '$$$ever',
				image: 'images/HomePins/money.png',
				studentText: 'Choose the price which suits your needs. You pay only as much as you want.',
				tutorText: 'Set your own prices, get paid however much you want.'
			}
		];

		$scope.studentView = function() {
			$scope.view = false;
		}

		$scope.tutorView = function() {
			$scope.view = true;
		}

		$scope.view = false;
	});

