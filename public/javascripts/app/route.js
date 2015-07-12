/*global define*/
define(function () {
	'use strict';

	return ['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

		$routeProvider
			.when('/login', {
				templateUrl: 'views/login.html',
				controller: 'loginController as loginCtrl'
			})

			.when('/add', {
				templateUrl: 'views/add.html',
				controller: 'addController as addCtrl'
			})

			.when('/registration', {
				templateUrl: 'views/registration.html',
				controller: 'registrationController as registrationCtrl'
			})

			.when('/list', {
				templateUrl: 'views/list.html',
				controller: 'listController as listCtrl'
			})

			.otherwise({
				redirectTo: '/login'
			});

			$locationProvider.html5Mode(true);
	}]
})