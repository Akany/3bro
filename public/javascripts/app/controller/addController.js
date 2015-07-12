/*global define*/
define(function () {
	'use strict';

	return ['listProxy', function (proxy) {
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
			/*
				@TODO
				add save request
			*/

			proxy.add({
				category: self.category,
				coast: self.coast
			}).then(onSuccess, onFailure);
		};
	}];
});