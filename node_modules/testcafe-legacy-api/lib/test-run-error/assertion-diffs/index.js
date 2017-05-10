'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

exports.__esModule = true;
exports.default = buildDiff;

var _array = require('./array');

var _array2 = _interopRequireDefault(_array);

var _object = require('./object');

var _object2 = _interopRequireDefault(_object);

var _string = require('./string');

var _string2 = _interopRequireDefault(_string);

var _date = require('./date');

var _date2 = _interopRequireDefault(_date);

var _truncateDiff = require('./truncate-diff');

var _truncateDiff2 = _interopRequireDefault(_truncateDiff);

function buildDiff(err, maxStringLength) {
    if (err.isArrays) return _array2.default(err, maxStringLength);
    if (err.isObjects) return _object2.default(err, maxStringLength);
    if (err.isStrings) return _string2.default(err, maxStringLength);
    if (err.isDates) return _date2.default(err);

    return _truncateDiff2.default(err, maxStringLength);
}

module.exports = exports.default;