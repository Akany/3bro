/*global define*/
define(function () {
	'use strict';

	return ['$routeProvider', '$locationProvider',
		function ($routeProvider, $locationProvider) {
			var user;

			user = ['loginProxy', '$cookies', 'routeService', '$q',
				function (loginProxy, $cookies, routeService, $q) {
					var hash = $cookies.get('user'),
						defer = $q.defer();

					if (!hash) {
						routeService.login();
						defer.reject();
					}

					loginProxy.user(hash).then(defer.resolve, defer.reject);

					return defer;
				}];

			$routeProvider
				.when('/login', {
					templateUrl: 'views/login.html',
					controller: 'loginController as loginCtrl'
				})

				.when('/add', {
					templateUrl: 'views/add.html',
					controller: 'addController as addCtrl',
					resolve: {
						user: user
					}
				})

				.when('/registration', {
					templateUrl: 'views/registration.html',
					controller: 'registrationController as registrationCtrl'
				})

				.when('/list', {
					templateUrl: 'views/list.html',
					controller: 'listController as listCtrl',
					resolve: {
						user: user
					}
				})

				.otherwise({
					redirectTo: '/add'
				});

				$locationProvider.html5Mode(true);
		}];
});