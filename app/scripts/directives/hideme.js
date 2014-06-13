'use strict';

/**
 * @ngdoc directive
 * @name wsApp.directive:hideMe
 * @description
 * # hideMe
 */
angular.module('wsApp')
    .directive("hideMe", function() {
        return function(scope, element, attrs) {
            scope.$watch(attrs.hideMe, function(newVal) {
                if (newVal) {
                    TweenMax.to(element, 1, {opacity: 0, visibility: 'hidden'});
                } else {
                    TweenMax.to(element, 1, {opacity: 1, visibility: 'visible'});
                }
            })
        }
});
