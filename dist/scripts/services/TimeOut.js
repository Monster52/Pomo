(function(){
  function TimeOut($interval){
    TimeOut.counter = 1500;

    var mytimeout;
    
    TimeOut.timing = false;
    TimeOut.breaking = false;

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
        TimeOut.counter = 1500;
        TimeOut.timing = false;
    }

    TimeOut.stop = function(){
      $interval.cancel(mytimeout);
      TimeOut.counter = 300;
      TimeOut.timing = false;
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
