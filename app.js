angular.module('testRunner', [
'ui.router',
'testRunner.main',
])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('main', {
    url: '/',
    templateUrl: 'main/main.html',
    controller: 'mainCtrl',
  })

  $urlRouterProvider.otherwise('/');

});
