/**
 * File:    store.
 * Date:    2016/1/25.
 * Creator: Administrator.
 */

const key = 'VUE-CHAT-v1';

// 虚拟数据
if (!localStorage.getItem(key)) {
  var now = new Date();

  var data = {
    // 登录用户
    user: {
      id: 1,
      name: 'Cheney',
      img: 'static/images/1.png'
    },

    // 用户列表
    userList: [
      {
        id: 2,
        name: 'Vue',
        img: 'static/images/2.png'
      },
      {
        id: 3,
        name: 'webpack',
        img: 'static/images/3.jpg'
      },
      {
        id: 4,
        name: 'Coffce',
        img: 'static/images/4.jpg'
      }
    ],

    // 会话列表
    sessionList: [
      {
        userId: 2,
        messages: [
          {
            text: 'Hello，这是一个基于Vue + FIS3构建的一个简单的Chat，聊天记录保存在localStorge。简单演示了Vue的基础特性和fis3的构建。',
            date: now
          },
          {
            text: '项目地址: https://github.com/cheneyliu/vue-fis-chat',
            date: now
          },
          {
            text: '项目地址: https://github.com/cheneyliu/vue-fis-chat',
            date: now,
            self: true
          },
        ]
      },
      {
        userId: 3,
        messages: []
      },
      {
        userId: 4,
        messages: [
          {
            text: 'Hello，这是一个基于Vue + Webpack构建的简单chat示例，聊天记录保存在localStorge。简单演示了Vue的基础特性和webpack配置。',
            date: now
          },
          {
            text: '项目地址: https://github.com/coffcer/vue-chat',
            date: now
          },
          {
            text: '该项目模仿了->项目地址: https://github.com/coffcer/vue-chat',
            date: now
          }
        ]
      }
    ],
  };

  localStorage.setItem(key, JSON.stringify(data));
}

exports.fetch = function() {
  return JSON.parse(localStorage.getItem(key));
};

exports.save = function() {
  localStorage.setItem(key, JSON.stringify(store));
};
