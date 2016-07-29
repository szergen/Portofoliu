'use strict';

/**
 * @ngdoc overview
 * @name portofoliuProtvApp
 * @description
 * # portofoliuProtvApp
 *
 * Main module of the application.
 */
angular
  .module('portofoliuProtvApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'portfolioList'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
         template: '<portfolio-list></portfolio-list>'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });