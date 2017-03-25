'use strict';
require('../../container/landing/_landing.scss');
require('./_side-panel.scss');

require('angular').module('portfolio')
.component('side-panel', {
  template: require('./side-panel.html'),
});
