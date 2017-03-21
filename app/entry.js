'use strict';

require('./scss/main.scss');

const angular =require('angular');
const uiRouter = require('angular-ui-router');

angular.module('portfolio', [uiRouter])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('','/landing');

  let routes = [
    {
      name: 'landing',
      url: '/landing',
      template: '<landing></landing>',
    },
    {
      name: 'about-me',
      url:'/about',
      template: '<about></about>',
    },
    {
      name: 'projects',
      url: '/projects',
      template: '<projects></projects>',
    },
    {
      name: 'resume',
      url: '/resume',
      template: '<resume></resume>',
    },
  ];
  routes.forEach(route => $stateProvider.state(route));
}]);

require('./container/landing');
