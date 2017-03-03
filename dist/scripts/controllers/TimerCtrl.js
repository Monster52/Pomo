(function(){
  function TimerCtrl($scope, TimeOut, Tasks, $firebase){
    this.timeOut = TimeOut;
    $scope.tasks = Tasks.all;

    $scope.createTask = function(){
      Tasks.create($scope.task).then(function(data){
        $scope.task.title = ''
      })
    };
  }

  angular
    .module("pomo")
    .controller("TimerCtrl", ["$scope", "TimeOut", "Tasks", TimerCtrl]);
})();
