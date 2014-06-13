'use strict';

/**
 * @ngdoc function
 * @name wsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wsApp
 */
angular.module('wsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
