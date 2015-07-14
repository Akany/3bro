require.config({
	paths: {
		style: '../stylesheets',
		angular: 'vendor/angular/angular',
		ngRoute: 'vendor/angular-route/angular-route',
		ngCookies: 'vendor/angular-cookies/angular-cookies',
		jquery: 'vendor/jquery/dist/jquery',
		bootstrap: 'vendor/bootstrap/dist/js/bootstrap',

		css: 'vendor/require-css/css'
	},

	shim: {
		angular: {
			deps: ['jquery'],
			exports: 'angular'
		},

		ngRoute: {
			deps: ['angular']
		},

		ngCookies: {
			deps: ['angular']
		},

		bootstrap: {
			deps: ['jquery', 'css!vendor/bootstrap/dist/css/bootstrap']
		},

		jquery: {
			exports: 'jquery'
		}
	},

	deps: ['app/app']
});