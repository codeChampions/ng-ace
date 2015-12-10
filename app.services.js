(function() {
  'use strict';

  angular
    .module('ace')
    .factory('CodeService', function($http, $location, _){
      var posLeft = 0;
      var posUp = 0;

      var moveLeft = function(){
        if(posLeft>0){
        $('#char').animate({left: "-=50"}, {duration: 500});
        posLeft -=50;
      }
      };

      var moveRight = function(){
        if(posLeft < 250){
        $('#char').animate({left: "+=50"}, {duration: 500});
        posLeft +=50;
      }
      };

      var moveUp = function(){
        if(posUp > 0){
        $('#char').animate({top: "-=50"}, {duration: 500});
        posUp -= 50;
      }
      };

      var moveDown = function(){
        if(posUp < 150){
        $('#char').animate({top: "+=50"}, {duration: 500});
        posUp += 50;
      }
      };

      var run = function(input){
        eval(input);
        setTimeout(function(){
        if($('#char').position().top === $('#x').position().top && $('#char').position().left === $('#x').position().left){
        alert("Congrats you won!");
        $("#char").css('top', '0px');
        $("#char").css('left', '0px');
        posUp = 0;
        posLeft = 0;
        goFor();

      }
      else{
        alert("Sorry, try again");
        console.log($('#char').position());
        console.log($('#x').position());
        $("#char").css('top', '0px');
        $("#char").css('left', '0px');
        posUp = 0;
        posLeft = 0;

      }}, 3000);

      };

      var goFor = function(){
        $location.path('/for');
        console.log("in for");
      };
      var reRoute = function(){
        $location.path('/');
      };

      return {
        run: run,
        reRoute: reRoute,
      };
    });
}());
