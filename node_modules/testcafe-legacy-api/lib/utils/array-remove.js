"use strict";

exports.__esModule = true;

exports.default = function (arr, item) {
    var idx = arr.indexOf(item);

    arr.splice(idx, 1);
};

module.exports = exports.default;