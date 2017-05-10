'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

exports.__esModule = true;

var _readFileRelative = require('read-file-relative');

var _compiler = require('./compiler');

var _compiler2 = _interopRequireDefault(_compiler);

var _testRun = require('./test-run');

var _testRun2 = _interopRequireDefault(_testRun);

var _testRunErrorType = require('./test-run-error/type');

var _testRunErrorType2 = _interopRequireDefault(_testRunErrorType);

var _testRunErrorFormattableAdapter = require('./test-run-error/formattable-adapter');

var _testRunErrorFormattableAdapter2 = _interopRequireDefault(_testRunErrorFormattableAdapter);

var CLIENT_RUNNER_SCRIPT = _readFileRelative.readSync('./client/index.js');

exports.default = {
    TEST_RUN_ERROR_TYPE: _testRunErrorType2.default,
    CLIENT_RUNNER_SCRIPT: CLIENT_RUNNER_SCRIPT,
    Compiler: _compiler2.default,
    TestRun: _testRun2.default,
    TestRunErrorFormattableAdapter: _testRunErrorFormattableAdapter2.default
};
module.exports = exports.default;