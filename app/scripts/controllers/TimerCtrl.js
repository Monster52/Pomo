(function(){
  function TimerCtrl(TimeOut){
    this.timeOut = TimeOut
  }

  angular
    .module("pomo")
    .controller("TimerCtrl", ["TimeOut", TimerCtrl]);
})();
