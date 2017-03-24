'use strict';

require('./_landing.scss');

require('angular').module('portfolio')
.component('landing', {
  template: require('./landing.html'),
  controller: ['$log', '$location', function($log, $location){
    this.$onInit = () => {
      this.enterHandleSubmit = () => {
        $log.log('we are leaving the landing page');
        $location.path('/dashboard');
      };
    };
  }],
});
