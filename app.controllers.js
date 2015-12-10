(function() {
  'use strict';

  angular
    .module('ace')
    .controller('MainController', function($scope){

    })
    .controller('CodeController', function($scope, $location, CodeService){
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
      if($location.url()==='/ace'){
      $scope.aceModel = '//Javascript goes here \n moveDown();';
      }
      else{
        $scope.aceModel ='//edit using JavaScript\n // use this loop to move in the x-direction \n for(var x = 0; x < FILL_IN_VALUE; x++){ \n\n } \n //use this loop to move in the y-direction \n for(var y=0; y < FILL_IN_VALUE; y++){\n\n}';
      }

      $scope.run = function(){
        //eval($scope.aceModel);
        CodeService.run($scope.aceModel);
      };

      $scope.reRoute = function(){
        CodeService.reRoute();
      };
    });
}());
