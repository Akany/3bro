/*global define*/
define(function () {
	'use strict';

	return ['loginProxy', 'routeService', function (proxy, routeService) {
		function onSuccess () {
			routeService.add();
		}

		function onFailure () {
			/*
				@TODO
				show error notfication
			*/
		}

		this.registration = function () {
			proxy.registration({
				email: this.email,
				password: this.password
			}).then(onSuccess, onFailure);
		};

		this.validatePassword = function () {
			return this.password === this.repeatPassword;
		};

	}];
});