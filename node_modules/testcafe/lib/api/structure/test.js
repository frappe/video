'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _testingUnit = require('./testing-unit');

var _testingUnit2 = _interopRequireDefault(_testingUnit);

var _typeAssertions = require('../../errors/runtime/type-assertions');

var _wrapTestFunction = require('../wrap-test-function');

var _wrapTestFunction2 = _interopRequireDefault(_wrapTestFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Test = function (_TestingUnit) {
    (0, _inherits3.default)(Test, _TestingUnit);

    function Test(testFile) {
        var _ret;

        (0, _classCallCheck3.default)(this, Test);

        var _this = (0, _possibleConstructorReturn3.default)(this, _TestingUnit.call(this, testFile));

        _this.fixture = testFile.currentFixture;

        _this.fn = null;
        _this.beforeFn = null;
        _this.afterFn = null;

        return _ret = _this.apiOrigin, (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    Test.prototype._add = function _add(name, fn) {
        (0, _typeAssertions.assertType)(_typeAssertions.is.string, 'apiOrigin', 'The test name', name);
        (0, _typeAssertions.assertType)(_typeAssertions.is.function, 'apiOrigin', 'The test body', fn);

        this.name = name;
        this.fn = (0, _wrapTestFunction2.default)(fn);

        if (this.testFile.collectedTests.indexOf(this) < 0) this.testFile.collectedTests.push(this);

        return this.apiOrigin;
    };

    Test.prototype._before$ = function _before$(fn) {
        (0, _typeAssertions.assertType)(_typeAssertions.is.function, 'before', 'test.before hook', fn);

        this.beforeFn = (0, _wrapTestFunction2.default)(fn);

        return this.apiOrigin;
    };

    Test.prototype._after$ = function _after$(fn) {
        (0, _typeAssertions.assertType)(_typeAssertions.is.function, 'after', 'test.after hook', fn);

        this.afterFn = (0, _wrapTestFunction2.default)(fn);

        return this.apiOrigin;
    };

    return Test;
}(_testingUnit2.default);

exports.default = Test;


_testingUnit2.default._makeAPIListForChildClass(Test);
module.exports = exports['default'];