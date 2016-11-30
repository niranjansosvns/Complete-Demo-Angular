'use strict';

/**
 * @ngdoc function
 * @name ngArchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngArchApp
 */
angular.module('ngArchApp')
  .controller('MainCtrl', function ($scope) {
      $scope.user = {name: 'Niranjan', last: 'Verma'};
      $scope.submit = function() {
      alert('Well !!! Done your form is valid');
     };
  });
