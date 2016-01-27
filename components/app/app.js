/**
 * File:    app.
 * Date:    2016/1/25.
 * Creator: Administrator.
 */
// Vue module
var Vue = require('modules/vue.js');
// Vue require
var store = require('common/store.js');
    card = require('card/card.js'),
    list = require('list/list.js'),
    text = require('text/text.js'),
    message = require('message/message.js');
// Canvas Background
var bgCanvas = require('common/background.js');
// mock data
var Mock = require('modules/mock.js');
//console.log(Mock);
// Vue init
exports.init = function(selector, options) {
  //Vue.config.debug = true;
  var app = new Vue({
    el: selector,
    data: function() {
      var serverData = store.fetch();

      return {
        // 登录用户
        user: serverData.user,
        // 用户列表
        userList: serverData.userList,
        // 会话列表
        sessionList: serverData.sessionList,
        // 搜索key
        search: '',
        // 选中的会话
        sessionIndex: 0
      };
    },
    template: __inline('app.html'),
    components: {
      'w-card': card,
      'w-list': list,
      'w-text': text,
      'w-message': message
    },
    computed: {
      session: function() {
        return this.sessionList[this.sessionIndex];
      }
    },
    watch: {
      // 监听sessionList的变化, 保存到localStorage中
      sessionList: {
        deep: true,
        handler: function(){
          store.save({
            user: this.user,
            userList: this.userList,
            sessionList: this.sessionList
          });
        }
      }
    }
  });
};

exports.bgInit = function(selector) {
  bgCanvas.init(selector);
};
