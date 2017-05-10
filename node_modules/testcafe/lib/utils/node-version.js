'use strict';

exports.__esModule = true;

var _nodeVersion = require('node-version');

var _nodeVersion2 = _interopRequireDefault(_nodeVersion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = parseInt(_nodeVersion2.default.major, 10);
module.exports = exports['default'];