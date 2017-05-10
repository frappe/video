'use strict';

exports.__esModule = true;

var _stackChain = require('stack-chain');

var _stackChain2 = _interopRequireDefault(_stackChain);

var _createStackFilter = require('./create-stack-filter');

var _createStackFilter2 = _interopRequireDefault(_createStackFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ORIGINAL_STACK_TRACE_LIMIT = Error.stackTraceLimit;
var STACK_TRACE_LIMIT = 200;

exports.default = {
    isEnabled: false,

    _hook: function _hook(err, frames) {
        return frames.filter((0, _createStackFilter2.default)(ORIGINAL_STACK_TRACE_LIMIT));
    },


    get enabled() {
        return this.isEnabled;
    },

    set enabled(val) {
        if (this.isEnabled === val) return;

        this.isEnabled = val;

        if (this.isEnabled) {
            // NOTE: Babel errors may have really deep stacks,
            // so we increase stack trace capacity
            Error.stackTraceLimit = STACK_TRACE_LIMIT;
            _stackChain2.default.filter.attach(this._hook);
        } else {
            Error.stackTraceLimit = ORIGINAL_STACK_TRACE_LIMIT;
            _stackChain2.default.filter.deattach(this._hook);
        }
    }
};
module.exports = exports['default'];