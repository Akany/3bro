/*global define*/
define(function () {
	'use strict';

	return ['$http', function ($http) {
		var self = this;

		self.login = function (data) {
			return $http.put('api/login', data);
		};

		self.user = function (userHash) {
			return $http.get('api/login/' + userHash);
		};

		self.registration = function (data) {
			return $http.post('api/login', data);
		};
	}];
})