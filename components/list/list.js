/**
 * File:    app.
 * Date:    2016/1/25.
 * Creator: Administrator.
 */
var Vue = require('modules/vue.js');

module.exports = Vue.extend({
  props: ['userList', 'sessionIndex', 'session', 'search'],
  template: __inline('list.html'),
  methods: {
    select:function (index) {
      this.sessionIndex = index;
    }
  },
  filters: {
    search:function (list) {
      var _this = this;
      return list.filter(function(item){
        return item.name.indexOf(_this.search) > -1;
      });
    }
  },
});
