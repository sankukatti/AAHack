(function () {
  'use strict';

  // Setting up route
  angular
    .module('experiences.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('experience', {
        url: '/experience',
        templateUrl: '/modules/experiences/client/views/experience.client.view.html',
        controller: 'ExperienceController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
});
