(function(angular) {
  'use strict';
  var myApp = angular.module("myApp", []);
  myApp.controller('FirstController', ['$scope', function($scope) {
    $scope.tabs = ['Home', 'About Me', 'Interests', 'Technical Knowledge', 'Current Study', 'My Dream'];
  }])
})(window.angular);
