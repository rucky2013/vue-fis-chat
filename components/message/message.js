/**
 * File:    app.
 * Date:    2016/1/25.
 * Creator: Administrator.
 */
var Vue = require('modules/vue.js');

module.exports = Vue.extend({
  props: ['session', 'user', 'userList'],
  computed: {
    sessionUser:function() {
      var _this = this;
      var users = _this.userList.filter(function(item){
        return item.id === _this.session.userId;
      });

      return users[0];
    }
  },
  filters: {
    // 筛选出用户头像
    avatar: function(item) {
      // 如果是自己发的消息显示登录用户的头像
      var user = item.self ? this.user : this.sessionUser;
      return user && user.img;
    },
    // 筛选出用户名
    userwith: function(user) {
      return this.sessionUser.name;
    },
    // 将日期过滤为 hour:minutes
    time: function(date) {
      if (typeof date === 'string') {
        date = new Date(date);
      }
      return date.getHours() + ':' + date.getMinutes();
    }
  },
  directives: {
    // 发送消息后滚动到底部
    'scroll-bottom': function () {
      // TODO 未定义 _this
      var _this = this;
      Vue.nextTick(function(){
        _this.el.scrollTop = _this.el.scrollHeight - _this.el.clientHeight;
      });
    }
  },
  template: __inline('message.html')
});
