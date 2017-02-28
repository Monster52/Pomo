(function(){
  function TimeOut($interval){
    TimeOut.counter = 1500;

    var mytimeout;
    TimeOut.timing = false;

    TimeOut.onTimeout = function(){
        TimeOut.counter--;
        TimeOut.timing = true;
    }

    TimeOut.start = function(){
      mytimeout = $interval(TimeOut.onTimeout,1000);
    }

    TimeOut.reset = function(){
        $interval.cancel(mytimeout);
        TimeOut.counter = 1500;
        TimeOut.timing = false;
    }

    return TimeOut;
  }

  angular
    .module("pomo")
    .factory("TimeOut", ["$interval", TimeOut])
})();

// TimeOut.counter = 1500;
//
// var mytimeout;
// var timing;
//
// TimeOut.onTimeout = function(){
//     TimeOut.counter--;
//     timing = true;
//     mytimeout = $timeout(TimeOut.onTimeout,1000);
//
// }
//
// TimeOut.start = function(){
//   mytimeout = $timeout(TimeOut.onTimeout,1000);
// }
//
// TimeOut.reset = function(){
//     $timeout.cancel(mytimeout);
//     TimeOut.counter = 1500;
//
// }
