'use strict';

var app = angular.module('HelpersApp');

app.controller('signupCtrl', function($scope, range, registerUser, after) {
		$scope.signupSubmit = function(isValid) {
			if ($scope.checkValid(isValid)) {
				console.log('hi');
			}
		}

		$scope.checkValid = function(isValid) {
			var passMatch = $scope.match($scope.confirmPassword, $scope.newUser.password);
			var emailMatch = $scope.match($scope.confirmEmail, $scope.newUser.email);
			var isBC = $scope.bcEmail();

			return isValid && passMatch && emailMatch && isBC;
		} 

		$scope.match = function(itemA, itemB) {
			if (itemA === itemB) {
				return true;
			}
			else {
				return false;
			}
		}

		$scope.bcEmail = function() {
			if (after('@', $scope.newUser.email) === 'bc.edu') {
				return true;
			}
			else {
				return false;
			}
		}

		$scope.enterPress = function(event) {
			if (event.charCode === 13) {
				$scope.loginAttempt($scope.info);
			}
		}

		$scope.register = function(newUser, isValid) {
			if ($scope.checkValid(isValid)) {
				registerUser.register($scope, newUser);
			}
		}

		$scope.range = range;
	});

		app.factory('registerUser', function($http) {
		return {
			register: function($scope, userInfo) {
				var $promise = $http({
					method: "POST",
					url: "http://54.172.140.235/api/v1/createuser/",
					headers: {'Content-Type': "application/json"},
					data: JSON.stringify(userInfo)
				});

				$promise.success(function(result) {
					alert("Congradulations on signing up!");
				})
			}
		}
	});