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
      name: 'dashboard',
      url:'/dashboard',
      template: '<dashboard></dashboard>',
    },
    {
      name: 'projects',
      url: '/projects',
      template: '<projects></projects>',
    },
    {
      name: 'contact',
      url: '/contact',
      template: '<contact></contact>',
    },
  ];
  routes.forEach(route => $stateProvider.state(route));
}]);

require('./container/landing');
require('./container/dashboard');

require('./component/about');
require('./component/site-nav');
require('./component/side-panel');
