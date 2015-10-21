/*global define*/
define(function () {
	'use strict';

	return ['listProxy', 'routeService', 'categories',
		function (proxy, routeService, categories) {
			var self = this;

			self.categories = categories;

			function clear() {
				self.category = undefined;
				self.coast = undefined;
			}

			function onSuccess() {
				clear();
			}

			function onFailure() {
				/*
					@TODO
					show error notification
				*/
			}

			self.add = function () {
				proxy.add({
					category: self.category,
					coast: self.coast
				}).then(onSuccess, onFailure);
			};

			self.toList = function () {
				routeService.list();
			};
		}];
});