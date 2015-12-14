(function() {
  'use strict';

  angular
    .module('ace')
    .factory('CodeService', function($http, $location, _){
      var posLeft = 0;
      var posUp = 0;
      var down = 0;
      var right = 0;

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
        right++;
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
        down++;

      }
      };

      var run = function(input){
        try{
          $('#error').html("");
          eval(input);
          if(down != 2) throw "You need to move down twice";
          if(right != 3) throw "You need to move right three times";
        }
        catch(err){
          $('#error').html('Error: '+err);
        }
        setTimeout(function(){
        if($('#char').position().top === $('#x').position().top && $('#char').position().left === $('#x').position().left){
        var next = confirm("Go to next lesson?");
        if(next === true){
          $location.path('/for');
        }
        else{
        $("#char").css('top', '0px');
        $("#char").css('left', '0px');
        posUp = 0;
        posLeft = 0;
        down = 0;
        right = 0;
      }

      }
      else{
        alert("Sorry, try again");
        console.log($('#char').position());
        console.log($('#x').position());
        $("#char").css('top', '0px');
        $("#char").css('left', '0px');
        posUp = 0;
        posLeft = 0;
        down = 0;
        right = 0;

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
