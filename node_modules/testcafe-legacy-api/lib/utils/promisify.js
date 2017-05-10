'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

exports.__esModule = true;

var _pify = require('pify');

var _pify2 = _interopRequireDefault(_pify);

var _pinkie = require('pinkie');

var _pinkie2 = _interopRequireDefault(_pinkie);

exports.default = function (fn) {
    return _pify2.default(fn, _pinkie2.default);
};

module.exports = exports.default;