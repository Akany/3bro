/*global define*/
define(function () {
	'use strict';

	return ['$location', function ($location) {
		var self = this;

		self.login = function () {
			$location.url('/login');
		};

		self.add = function () {
			$location.url('/add');
		};

		self.registration = function () {
			$location.url('/registration');
		};

		self.list = function () {
			$location.url('/list');
		};
	}]
})