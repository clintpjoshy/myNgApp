(function(angular) {
  'use strict';
  var myApp = angular.module("myApp", ["ngRoute"]);

  myApp.controller('FirstController', ['$scope', function($scope) {
    $scope.tabs = [
      {name: 'Home', path: 'home'},
      {name: 'About Me', path: 'aboutMe'},
      {name: 'Interests', path: 'interests'},
      {name: 'Technical Knowledge', path: 'technicalKnowledge'},
      {name: 'Current Study', path: 'currentStudy'},
      {name: 'My Dream', path: 'myDream'}
    ];
  }])

  myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider

    .when("/home", {
      templateUrl: "/src/home/home.html"
    })

    .when("/aboutMe", {
      templateUrl: "/src/aboutMe/aboutMe.html"
    })

    .when("/interests", {
      templateUrl: "/src/interests/interests.html"
    })

    .when("/technicalKnowledge", {
      templateUrl: "/src/technicalKnowledge/technicalKnowledge.html"
    })

    .when("/currentStudy", {
      templateUrl: "/src/currentStudy/currentStudy.html"
    })

    .when("/myDream", {
      templateUrl: "/src/myDream/myDream.html"
    })

    .otherwise({
      template: '<div>Not Found!!</div>'
    })
  }]);
})(window.angular);
