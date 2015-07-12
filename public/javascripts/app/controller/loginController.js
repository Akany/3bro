/*global define*/
define(function () {
	'use strict';

	return ['loginProxy', 'routeService', function (proxy, routeService) {
		function onFailure() {
			/*
				@TODO
				show error notification
			*/
		}

		function onSuccess() {
			routeService.add();
		}

		this.login = function () {
			proxy.login({
				email: this.email,
				password: this.password
			}).then(onSuccess, onFailure);
		};

		this.toRegistration = function () {
			routeService.registration();
		};
	}];
});