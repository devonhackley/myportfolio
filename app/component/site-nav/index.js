'use strict';

require('./_site-nav.scss');
require('angular').module('portfolio')
.component('site-nav', {
  template: require('./site-nav.html'),
});
