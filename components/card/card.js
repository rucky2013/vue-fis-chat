/**
 * File:    card.
 * Date:    2016/1/25.
 * Creator: Administrator.
 */
var Vue = require('modules/vue.js');

module.exports = Vue.extend({
  props: ['user', 'search'],
  template: __inline('card.html')
})