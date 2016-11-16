module.exports = function(api, arg) {
    var obj = {...arg };
    return new Promise(function(resolve, reject) {
        obj.success = resolve;
        obj.fail = function(res) {
            if (res && res.errMsg) {
                reject(new Error(res.errMsg));
            } else {
                reject(res);
            }
        };
        api.call(wx, obj);
    });
}