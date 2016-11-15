"use strict";

var Promise = global.Promise;
var regeneratorRuntime = global.regeneratorRuntime;
var co = global.co;

var _marked = [xxx].map(regeneratorRuntime.mark);

//index.js
//获取应用实例
var app = getApp();
Page({
    data: {
        motto: 'Hello World',
        userInfo: {}
    },
    //事件处理函数
    bindViewTap: function bindViewTap(e) {
        wx.navigateTo({
            url: '../logs/logs'
        });
    },
    onLoad: function onLoad() {
        xxx();
        console.log('onLoad');
        var that = this;
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            });
        });
        wx.getStorage({
            key: 'qwqw',
            success: function success(res) {
                console.log(res.data);
            },
            fail: function fail(e) {
                debugger;
            }
        });
    }
});

function xxx() {
    return regeneratorRuntime.wrap(function xxx$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}