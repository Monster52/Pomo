(function(){
  function TimerCtrl($scope, TimeOut, Tasks, $firebase){
    this.timeOut = TimeOut;
    this.tasks = Tasks.all;

    this.createTask = function(taskTitle){
      var taskObj = {
        title: taskTitle,
        createdAt: firebase.database.ServerValue.TIMESTAMP
      }

      Tasks.create(taskObj);
      this.title = '';
    };
  }

  angular
    .module("pomo")
    .controller("TimerCtrl", ["$scope", "TimeOut", "Tasks", TimerCtrl]);
})();
