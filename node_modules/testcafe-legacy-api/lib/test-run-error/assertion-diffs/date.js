'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

exports.__esModule = true;
exports.default = getDatesDiff;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function formatDateTime(date) {
    return _moment2.default(date).format('ddd MMM DD YYYY hh:mm:ss.SSS [GMT]ZZ');
}

function getDatesDiff(err) {
    return {
        expected: formatDateTime(err.expected),
        actual: formatDateTime(err.actual),
        marker: ''
    };
}

module.exports = exports.default;