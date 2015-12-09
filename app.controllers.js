(function() {
  'use strict';

  angular
    .module('ace')
    .controller('MainController', function($scope){

    })
    .controller('CodeController', function($scope, CodeService){
      $scope.mode = 'Javascript';
      $scope.aceOption = {
        mode: $scope.mode.toLowerCase(),
        theme: 'monokai',
        onLoad: function(_ace){
          $scope.modeChanged = function(){
            _ace.getSession().setMode("ace/mode/" + $scope.mode.toLowerCase());
          };
        }
      };
      $scope.aceModel = '//Javascript goes here \n var myName = "Terry";';

      $scope.run = function(){
        eval($scope.aceModel);
        CodeService.run($scope.aceModel);
      };

    });
}());
