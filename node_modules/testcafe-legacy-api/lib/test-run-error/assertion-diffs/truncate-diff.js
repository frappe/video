'use strict';

exports.__esModule = true;
exports.default = truncateDiff;
var STRING_OVERFLOW_MARKER = '...';

function cutOverflowString(str, maxStrLength) {
    if (str && str.length > maxStrLength) str = str.substr(0, maxStrLength - STRING_OVERFLOW_MARKER.length) + STRING_OVERFLOW_MARKER;

    return str;
}

function truncateDiff(err, maxStringLength) {
    return {
        expected: cutOverflowString(err.expected, maxStringLength),
        actual: cutOverflowString(err.actual, maxStringLength),
        marker: ''
    };
}

module.exports = exports.default;