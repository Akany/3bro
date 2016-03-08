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
	'./constant/categories',
	'css!style/style.css',
	'ngRoute',
	'ngCookies',
	'angular-hammer',
	'bootstrap',
	'./change-animation/change-animation.bundle'
], function (
	ng,
	route,
	loginController,
	registrationController,
	addController,
	listController,
	loginProxy,
	listProxy,
	routeService,
	categories
) {
	'use strict';

	return ng.module('app', ['ngRoute', 'ngCookies', 'hmTouchEvents', 'change-animation'])
		.controller('loginController', loginController)
		.controller('registrationController', registrationController)
		.controller('addController', addController)
		.controller('listController', listController)
		.service('loginProxy', loginProxy)
		.service('listProxy', listProxy)
		.service('routeService', routeService)
		.constant('categories', categories)
		.config(route);
});