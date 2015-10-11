/*global define*/
define(function () {
	'use strict';

	return ['listProxy', 'routeService', function (proxy, routeService) {
		var self = this;

		self.categories = [{
			name: 'Trafic',
			value: 'trafic'
		}, {
			name: 'Food',
			value: 'food'
		}, {
			name: 'Clothes',
			value: 'clothes'
		}];

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