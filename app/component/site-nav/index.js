'use strict';

require('./_site-nav.scss');
require('angular').module('portfolio')
.component('siteNav', {
  template: require('./site-nav.html'),
});
