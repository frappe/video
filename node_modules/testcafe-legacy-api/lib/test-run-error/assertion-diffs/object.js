'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

exports.__esModule = true;
exports.default = getObjectsDiff;

var _date = require('./date');

var _date2 = _interopRequireDefault(_date);

var _string = require('./string');

var _string2 = _interopRequireDefault(_string);

var _truncateDiff = require('./truncate-diff');

var _truncateDiff2 = _interopRequireDefault(_truncateDiff);

function getObjectsDiff(err, maxStringLength) {
    if (err.diffType && err.diffType.isDates) return _date2.default(err);
    if (err.diffType && err.diffType.isStrings) return _string2.default(err, maxStringLength);

    return _truncateDiff2.default(err, maxStringLength);
}

module.exports = exports.default;