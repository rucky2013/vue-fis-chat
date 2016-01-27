/**
 * File:    app.
 * Date:    2016/1/25.
 * Creator: Administrator.
 */
var Vue = require('modules/vue.js');

module.exports = Vue.extend({
  props: ['session'],
  data:function() {
    return {
      text: ''
    };
  },
  methods: {
    inputing:function(e) {
      if (e.ctrlKey && e.keyCode === 13 && this.text.length) {
        this.session.messages.push({
          text: this.text,
          date: new Date(),
          self: true
        });
        this.text = '';
      }
    }
  },
  template: __inline('text.html')
});

