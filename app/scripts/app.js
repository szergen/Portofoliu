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
  .module('portofoliu', [
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
      .otherwise({
        redirectTo: '/'
      });
  });