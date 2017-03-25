'use strict';
require('../../container/landing/_landing.scss');
require('./_side-panel.scss');

require('angular').module('portfolio')
.component('sidePanel', {
  template: require('./side-panel.html'),
});
