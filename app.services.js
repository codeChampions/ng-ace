(function() {
  'use strict';

  angular
    .module('ace')
    .factory('CodeService', function($http, _){
      var run = function(input){
        console.log(input);
      };

      return {
        run: run
      };
    });
}());
