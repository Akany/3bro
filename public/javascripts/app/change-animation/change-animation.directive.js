/*global define*/
define([
	'./change-animation.module'
], function (module) {
	'use strict';

	var CHANGEIN = 'change-in';
	var CHANGEOUT = 'change-out';
	var CHANGEACTIVE = 'change-active';

	module.directive('changeAnimation', changeAnimationDirecive);

	function changeAnimationDirecive($q) {
		return {
			restrict: 'A',
			link: function ($scope, $element, $attrs) {
				var watcher = $scope.$watch(getValue, function (newValue, previousValue) {
					init();

					if (newValue !== previousValue) {
						init = animate;
					}
				});

				function init() {
					setViewValue();
				}

				function getValue() {
					return $scope.$eval($attrs.changeAnimation);
				}

				function animate() {
					animateOut()
						.then(setViewValue)
						.then(animateIn);
				}

				function setViewValue() {
					$element.text(getValue());
				}

				function animateOut() {
					return animateClass(CHANGEOUT);
				}

				function animateIn() {
					return animateClass(CHANGEIN);
				}

				function animateClass(className) {
					var defer = $q.defer();

					$element.on('animationend', onAnimationEnd);
					$element.addClass(className);

					function onAnimationEnd() {
						$element.off('animationend', onAnimationEnd);
						$element.removeClass(className);
						$element.toggleClass(CHANGEACTIVE);
						defer.resolve();
					}

					return defer.promise;
				}
			}
		};
	}
});