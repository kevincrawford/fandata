export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('passing', {
      url: '/passing',
      templateUrl: 'app/passing/passing.html',
      controller: 'PassingController',
      controllerAs: 'passing'
    })
    .state('receiving', {
      url: '/receiving',
      templateUrl: 'app/receiving/receiving.html',
      controller: 'ReceivingController',
      controllerAs: 'receiving'
    })
    .state('rushing', {
      url: '/rushing',
      templateUrl: 'app/rushing/rushing.html',
      controller: 'RushingController',
      controllerAs: 'rushing'
    })
    .state('defense', {
      url: '/defense',
      templateUrl: 'app/defense/defense.html',
      controller: 'DefenseController',
      controllerAs: 'defense'
    })
    .state('kicking', {
      url: '/kicking',
      templateUrl: 'app/kicking/kicking.html',
      controller: 'KickingController',
      controllerAs: 'kicking'
    });

  $urlRouterProvider.otherwise('/');
}
