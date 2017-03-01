(function(){
  function TimeOut($interval){
    TimeOut.counter = 20; // 1500
    TimeOut.timing = false;
    TimeOut.breaking = false;

    var mytimeout;
    var workCount = 0;
    var ding = new buzz.sound( "/assets/music/ding2.mp3", {
      preload: true
    });

    TimeOut.onTimeout = function(){
        TimeOut.counter--;
        TimeOut.timing = true;
        if(TimeOut.counter <= 0){
          TimeOut.stop();
          TimeOut.breaking = true;
        }
    }

    TimeOut.start = function(){
      mytimeout = $interval(TimeOut.onTimeout,1000);
    }

    TimeOut.reset = function(){
        $interval.cancel(mytimeout);
        ding.play();
        TimeOut.counter = 20; //1500
        TimeOut.timing = false;
    }

    TimeOut.stop = function(){
      $interval.cancel(mytimeout);
      workCount++;
      if( workCount < 4 ){
        ding.play();
        TimeOut.counter = 10; //300
        TimeOut.timing = false;
      } else {
        ding.play();
        TimeOut.counter = 30; //1800
        TimeOut.timing = false;
        workCount = 0;
      }
    }

    TimeOut.break = function(){
      TimeOut.counter--;
      TimeOut.breaking = true;
      TimeOut.timing = null;
      if(TimeOut.counter <= 0){
        TimeOut.reset();
        TimeOut.breaking = false;
      }
    }

    TimeOut.startBreak = function(){
      mytimeout = $interval(TimeOut.break,1000);
    }

    return TimeOut;
  }

  angular
    .module("pomo")
    .factory("TimeOut", ["$interval", TimeOut])
})();
