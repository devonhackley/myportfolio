'use strict';

require('./_about.scss');

require('angular').module('portfolio')
.component('about', {
  template: require('./about.html'),
});
