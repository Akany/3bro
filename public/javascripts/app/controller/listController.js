/*global define*/
define(function () {
	'use strict';

	return ['listProxy', 'routeService', function (proxy, routeService) {
		var self = this;

		self.items = [];

		function onLoad(response) {
			self.items = response.data;
		}

		function load() {
			proxy.get().then(onLoad);
		}

		self.toAdd = function () {
			routeService.add();
		};

		load();
	}];
});