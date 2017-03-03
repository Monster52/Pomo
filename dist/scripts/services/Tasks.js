(function(){
  function Tasks($firebaseArray){
    var ref = firebase.database().ref();

    var tasks = $firebaseArray(ref);



    return {
      all: tasks,
      create: function(task){
        return tasks.$add(task)
      },
      delete: function(taskId){
        return tasks.$remove(taskId)
      }
    };

  }

  angular
    .module("pomo")
    .factory("Tasks", ["$firebaseArray", Tasks])
})();
