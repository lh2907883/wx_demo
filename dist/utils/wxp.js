"use strict";

var Promise = global.Promise;
var regeneratorRuntime = global.regeneratorRuntime;
var co = global.co;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

module.exports = function (api, arg) {
    var obj = _extends({}, arg);
    return new Promise(function (resolve, reject) {
        obj.success = resolve;
        obj.fail = function (res) {
            if (res && res.errMsg) {
                reject(new Error(res.errMsg));
            } else {
                reject(res);
            }
        };
        api.call(wx, obj);
    });
};