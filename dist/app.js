"use strict";

var Promise = global.Promise = require('npm/promise/index.js').Promise;
require('npm/regenerator-runtime/index.js');
var regeneratorRuntime = global.regeneratorRuntime;
var co = global.co = require('npm/co/index.js');

var _marked = [fuck, fucku].map(regeneratorRuntime.mark);

//app.js
App({
    onLaunch: function onLaunch() {
        //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
    },
    getUserInfo: function getUserInfo(cb) {
        var that = this;
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo);
        } else {
            //调用登录接口
            wx.login({
                success: function success() {
                    wx.getUserInfo({
                        success: function success(res) {
                            that.globalData.userInfo = res.userInfo;
                            typeof cb == "function" && cb(that.globalData.userInfo);
                        }
                    });
                }
            });
        }
    },
    globalData: {
        userInfo: null
    }
});

var wxp = require('./utils/wxp.js');

function sleep(time, arg) {
    console.log('sleep start at:' + new Date());
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(arg);
            console.log('sleep end at:' + new Date() + ';arg:' + arg);
        }, time);
    });
}

function fuck() {
    var arg1, arg2, arg3;
    return regeneratorRuntime.wrap(function fuck$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return sleep(1000, 'a');

                case 2:
                    arg1 = _context.sent;
                    _context.next = 5;
                    return sleep(2000, 'b');

                case 5:
                    arg2 = _context.sent;
                    _context.next = 8;
                    return sleep(1500, 'c');

                case 8:
                    arg3 = _context.sent;
                    return _context.abrupt('return', arg3);

                case 10:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

function fucku(arg) {
    var arg1, arg2, res;
    return regeneratorRuntime.wrap(function fucku$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return sleep(1000, arg);

                case 2:
                    arg1 = _context2.sent;

                    console.log('fuck haha');
                    return _context2.delegateYield(fuck(), 't0', 5);

                case 5:
                    arg2 = _context2.t0;

                    console.log('fuck() return:' + arg2);
                    _context2.next = 9;
                    return wxp(wx.showModal, {
                        title: 'showModal',
                        content: '还想再来一次吗?',
                        confirmText: '再来一次',
                        cancelText: '结束吧'
                    });

                case 9:
                    res = _context2.sent;

                    if (!res.confirm) {
                        _context2.next = 12;
                        break;
                    }

                    return _context2.delegateYield(fucku(arg), 't1', 12);

                case 12:
                    return _context2.abrupt('return', arg1);

                case 13:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}
co(fucku('hahaha')).then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.error(error);
});