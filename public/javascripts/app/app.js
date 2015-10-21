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
	routeService,
	categories
) {
	'use strict';

	ng.module('app', ['ngRoute', 'ngCookies', 'hmTouchEvents'])
		.controller('loginController', loginController)
		.controller('registrationController', registrationController)
		.controller('addController', addController)
		.controller('listController', listController)
		.service('loginProxy', loginProxy)
		.service('listProxy', listProxy)
		.service('routeService', routeService)
		.constant('categories', categories)
		.config(route);

	ng.bootstrap(ng.element('body'), ['app']);
});