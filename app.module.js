(function() {
  'use strict';

  angular
    .module('ace',[
      'ngRoute',
      'underscore',
      'ui.bootstrap',
      'ui.ace'
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          template: '<h1>Welcome to the Ace Angular Trial</h1><a href="#/ace" class="btn btn-primary">Go to Ace</a>',
          controller: 'MainController'
        })
        .when('/ace', {
          templateUrl: 'views/ace.html',
          controller: 'CodeController'
        })
        .when('/for',{
          templateUrl: 'views/for.html',
          controller: 'CodeController'
        })
        .when('/404', {
          template: '<h1>Sorry page not found</h1>',
          controller: 'MainController'
        })
        .otherwise({redirectTo: '/404'});
    });

    angular
      .module('underscore', [])
        .factory('_', function($window){
          return $window._;
        });
}());
