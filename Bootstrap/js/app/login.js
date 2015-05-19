'use strict';

var app = angular.module('HelpersApp');

	app.controller("loginCtrl", function($scope, $localStorage, $location, $state, 
				loginService, updateInfo, range, getInfo) {

		$scope.logUserIn = function(result) {
			$scope.signedIn = true;
			$scope.account = result;
			$scope.save();
			$location.path('login');
		}

		$scope.failedLogin = function() {
			$scope.failed = true;
		}

		$scope.loginAttempt = function(info) {
			loginService.login(info, $scope);//Call loginService
		}

		$scope.save = function() {
			$localStorage.account = $scope.account;
		}

		$scope.load = function() {
			if (typeof $localStorage.account === 'undefined' || $localStorage.account === null) {
				$scope.account = null;
				$scope.signedIn = false;
			}
			else {
				$scope.account = $localStorage.account;
				$scope.signedIn = true;
			}
		}

		$scope.logOut = function() {
			$scope.signedIn = false;
			$scope.failed = false; 
			$scope.account = null;
			$scope.save();
			$location.path('home');
		}

		$scope.updateInfo = function() {/*FIX THIS */
			updateInfo.update($scope, apikey);
			console.log($scope.account);
		}

		$scope.printInfo = function() {
			getInfo.print($scope, apikey);
		}

		$scope.failedLogin = false; 
		$scope.load();
		$scope.range = range;
		$scope.stateList = $state.get();
		var apikey =  'ApiKey ' + $scope.account.email + ":" + $scope.account.apikey;
	});

	app.factory('loginService', function($http) {
		return {
			login: function(user, $scope) {
				var $promise = $http({
	      	method: "POST",
	      	url: "http://54.172.140.235/api/v1/user/login/",
	      	headers: {'Content-Type': "application/json"},
	      	data: JSON.stringify(user)
	      });

	      $promise.success(function(result) {//The user logged in successfully
	      	$scope.logUserIn(result);
	      }).error(function() {//The user's credentials were invalid
	      	$scope.failedLogin();
	      });
			}
		}
	});

	app.factory('updateInfo', function($http) {
		return {
			update: function($scope, apikey) {
				var $promise = $http({
					method: "PUT",
					url: "http://54.172.140.235/api/v1/user/3/",
					headers: {
						'Content-Type': "application/json",
						'AUTHORIZATION': apikey
					},
					data: $scope.account
				});

				$promise.success(function(result) {
					console.log("Updated information");
					alert("UPDATE THIS FUNCTION YOU DULLARD!");
				}).error(function(result) {
					console.log("YOU FAILED");
				})
			}
		}
	});

	app.factory('getInfo', function($http) {
		return {
			print: function($scope, apikey) {
				var $promise = $http({
					method: "GET",
					url: 'http://54.172.140.235/api/v1/user/3/',
					headers: {
						'Content-Type': 'application/json',
						'AUTHORIZATION': apikey
					}
				});

				$promise.success(function(result) {
					console.log(result)
				}).error(function(result) {
					console.log("FAILED INFO REQUEST");
				})
			}
		}
	});

	app.factory('forgotPassword', function($http) {
		return {
			forgot: function($scope) {
				var $promise = $http({
					method: "POST",
					url: 'http://54.172.140.235/api/v1/user/password/reset/',
					headers: {
						'Content-Type': 'application/json'
					},
					data: $scope.account.email
				});

				$promise.success(function(result) {
					alert("Your password has been reset, check your email");
				}).error(function(result) {
					alert("You entered a non existent email");
				})
			}
		}
	});

	app.factory('validation', function($http) {
		return {
			validate: function(email, digit) {
				var $promise = $http({
					method: "POST",
					url: 'http://54.172.140.235/api/v1/user/digit/',
					headers: {
						'Content-Type': 'application/json',
					},
					data: {'email': email, 'digit': digit }
				});

				$promise.success(function(result) {
					alert("You have vertified your account");
				}).error(function(result) {
					if (result["status"] === "The email already verified") {
						alert("You have already been vertified");
					} else if (result["status"]  === "Digit expired") {
						alert("Sorry this digit has expired, another email has been sent to your account");
					} else if (result["status"]  === "Invalid digit") {
						alert("Sorry you entered an incorrect digit");
					} else if (result["status"]  === "Invalid digit format, the digit should be a 4 digit number") {
						alert("Please enter a 4 digit number");
					} else {
						alert("I'm afraid I'm not sure what went wrong");
					}
				})
			}
		}
	});

