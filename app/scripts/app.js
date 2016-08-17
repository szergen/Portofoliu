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
    'portfolioList',
    'detailsPage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
         template: '<portfolio-list></portfolio-list>'
      })
      .when('/details/:itemId', {
         template: '<details-page></details-page>'
      })
      .otherwise({
        redirectTo: '/'
      });
  });