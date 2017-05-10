module.exports = function (promise, timeout, opts) {
    var Promise     = promise.constructor;
    var rejectWith  = opts && opts.rejectWith;
    var resolveWith = opts && opts.resolveWith;

    var timeoutPromise = new Promise(function (resolve, reject) {
        var timer = setTimeout(function () {
            if (rejectWith !== void 0)
                reject(rejectWith);
            else
                resolve(resolveWith);
        }, timeout);

        timer.unref();
    });

    return Promise.race([timeoutPromise, promise]);
};
