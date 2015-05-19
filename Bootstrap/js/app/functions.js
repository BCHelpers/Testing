'use strict';

var app = angular.module('HelpersApp');

	app.factory('after', function() {
		return function(character, word) {
			var afterChar = word.substring(word.indexOf(character) + 1);
			return afterChar;
		}
	});

		app.factory('range', function() {
		return function(start, end) {
			var range = [];
			for (var i=end; i >= start; i--) {
				range.push(i);
			}
			return range;
		}
	});