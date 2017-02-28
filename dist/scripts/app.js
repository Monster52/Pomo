(function() {
     function config($stateProvider, $locationProvider) {
       $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });

      $stateProvider
         .state('home', {
           url: '/',
           templateUrl: '/templates/home.html'
         })
         .state('timer', {
           url: '/timer',
           controller: 'TimerCtrl as timer',
           templateUrl: '/templates/timer.html'
         });
     }

     angular
         .module('pomo', ['ui.router'])
         .config(config);
 })();
