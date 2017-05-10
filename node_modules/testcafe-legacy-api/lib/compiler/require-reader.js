'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check').default;

var _regeneratorRuntime = require('babel-runtime/regenerator').default;

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

exports.__esModule = true;

var _pinkie = require('pinkie');

var _pinkie2 = _interopRequireDefault(_pinkie);

var _legacyAnalysisRequire_analyzer = require('./legacy/analysis/require_analyzer');

var _legacyAnalysisRequire_analyzer2 = _interopRequireDefault(_legacyAnalysisRequire_analyzer);

var _utilsArrayRemove = require('../utils/array-remove');

var _utilsArrayRemove2 = _interopRequireDefault(_utilsArrayRemove);

var RequireReader = (function () {
    function RequireReader(descriptorsCache, hammerheadProcessScript) {
        _classCallCheck(this, RequireReader);

        this.descriptorsCache = descriptorsCache || {};
        this.readings = [];
        this.waiters = {};
        this.hammerheadProcessScript = hammerheadProcessScript;
    }

    RequireReader.prototype._analyzeRequire = function _analyzeRequire(require, filename, sourceIndex) {
        return _regeneratorRuntime.async(function _analyzeRequire$(context$2$0) {
            var _this = this;

            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    this.readings.push(require);

                    return context$2$0.abrupt('return', new _pinkie2.default(function (resolve) {
                        _legacyAnalysisRequire_analyzer2.default.run(require, filename, sourceIndex, _this.hammerheadProcessScript, function (errs, descriptor) {
                            _this.descriptorsCache[require] = descriptor;

                            _utilsArrayRemove2.default(_this.readings, require);
                            resolve({ errs: errs, descriptor: descriptor });

                            if (_this.waiters[require]) {
                                _this.waiters[require].forEach(function (waiter) {
                                    return waiter(descriptor);
                                });
                                _this.waiters[require] = null;
                            }
                        });
                    }));

                case 2:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, this);
    };

    RequireReader.prototype._waitForReading = function _waitForReading(require) {
        return _regeneratorRuntime.async(function _waitForReading$(context$2$0) {
            var _this2 = this;

            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    return context$2$0.abrupt('return', new _pinkie2.default(function (resolve) {
                        if (!_this2.waiters[require]) _this2.waiters[require] = [];

                        _this2.waiters[require].push(function (descriptor) {
                            return resolve({ descriptor: descriptor, fromCache: true });
                        });
                    }));

                case 1:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, this);
    };

    RequireReader.prototype.read = function read(require, filename, sourceIndex) {
        return _regeneratorRuntime.async(function read$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    if (!this.descriptorsCache[require]) {
                        context$2$0.next = 2;
                        break;
                    }

                    return context$2$0.abrupt('return', {
                        descriptor: this.descriptorsCache[require],
                        fromCache: true
                    });

                case 2:
                    if (!(this.readings.indexOf(require) > -1)) {
                        context$2$0.next = 6;
                        break;
                    }

                    context$2$0.next = 5;
                    return _regeneratorRuntime.awrap(this._waitForReading(require));

                case 5:
                    return context$2$0.abrupt('return', context$2$0.sent);

                case 6:
                    return context$2$0.abrupt('return', this._analyzeRequire(require, filename, sourceIndex));

                case 7:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, this);
    };

    return RequireReader;
})();

exports.default = RequireReader;
module.exports = exports.default;