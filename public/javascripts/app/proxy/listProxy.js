/*global define*/
define(function () {
	'use strict';

	return ['$http', function ($http) {
		this.add = function (data) {
			return $http.post('api/list', data);
		};

		this.get = function () {
			return $http.get('api/list');
		};

	}];
});