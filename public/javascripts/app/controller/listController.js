/*global define*/
define(function () {
	'use strict';

	return ['listProxy', 'routeService', 'categories',
		function (proxy, routeService, categories) {
			var self = this;

			self.items = [];

			self.filter = {
				coast: undefined,
				category: undefined
			};

			self.categories = [{
				name: 'Any category',
				value: undefined
			}].concat(categories);

			function onLoad(response) {
				self.items = response.data;
			}

			function load() {
				proxy.get(self.filter).then(onLoad);
			}

			self.toAdd = function () {
				routeService.add();
			};

			self.updateFilter = function () {
				load();
			};

			load();
		}];
});