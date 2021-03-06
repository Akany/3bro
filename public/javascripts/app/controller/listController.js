/*global define*/
define([
	'moment'
], function (moment) {
	'use strict';

	return ['listProxy', 'routeService', 'categories',
		function (proxy, routeService, categories) {
			var self = this;

			self.items = [];

			self.filter = {
				coast: undefined,
				category: undefined,
				from: moment().startOf('month').toDate(),
				to: moment().endOf('day').toDate()
			};

			self.categories = [{
				name: 'Any category',
				value: undefined
			}].concat(categories);

			self.getTotal = sum;

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

			function sum() {
				var total = 0;

				self.items.forEach(function (item) {
					total = total + item.coast;
				});

				return total;
			}
		}];
});