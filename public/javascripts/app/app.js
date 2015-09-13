/*global define*/
define([
	'angular',
	'./route',
	'./controller/loginController',
	'./controller/registrationController',
	'./controller/addController',
	'./controller/listController',
	'./proxy/loginProxy',
	'./proxy/listProxy',
	'./service/routeService',
	'ngRoute',
	'ngCookies',
	'bootstrap'
], function (
	ng,
	route,
	loginController,
	registrationController,
	addController,
	listController,
	loginProxy,
	listProxy,
	routeService
) {
	'use strict';

	ng.module('app', ['ngRoute', 'ngCookies'])
		.controller('loginController', loginController)
		.controller('registrationController', registrationController)
		.controller('addController', addController)
		.controller('listController', listController)
		.service('loginProxy', loginProxy)
		.service('listProxy', listProxy)
		.service('routeService', routeService)
		.config(route);

	ng.bootstrap(ng.element('body'), ['app']);
});