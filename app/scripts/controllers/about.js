'use strict';

/**
 * @ngdoc function
 * @name ngArchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngArchApp
 */
angular.module('ngArchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
