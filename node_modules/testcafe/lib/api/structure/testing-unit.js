'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _testPageUrl = require('../test-page-url');

var _handleTagArgs = require('../../utils/handle-tag-args');

var _handleTagArgs2 = _interopRequireDefault(_handleTagArgs);

var _delegatedApi = require('../../utils/delegated-api');

var _typeAssertions = require('../../errors/runtime/type-assertions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestingUnit = function () {
    function TestingUnit(testFile) {
        (0, _classCallCheck3.default)(this, TestingUnit);

        this.testFile = testFile;

        this.name = null;
        this.pageUrl = null;
        this.authCredentials = null;
        this.only = false;
        this.skip = false;

        var unit = this;

        this.apiOrigin = function apiOrigin() {
            return unit._add.apply(unit, arguments);
        };

        (0, _delegatedApi.delegateAPI)(this.apiOrigin, this.constructor.API_LIST, { handler: this });
    }

    TestingUnit.prototype._add = function _add() {
        throw new Error('Not implemented');
    };

    TestingUnit.prototype._only$getter = function _only$getter() {
        this.only = true;

        return this.apiOrigin;
    };

    TestingUnit.prototype._skip$getter = function _skip$getter() {
        this.skip = true;

        return this.apiOrigin;
    };

    TestingUnit.prototype._page$ = function _page$(url) {
        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        this.pageUrl = (0, _handleTagArgs2.default)(url, rest);

        (0, _typeAssertions.assertType)(_typeAssertions.is.string, 'page', 'The page URL', this.pageUrl);

        (0, _testPageUrl.assertUrl)(this.pageUrl, 'page');

        this.pageUrl = (0, _testPageUrl.resolvePageUrl)(this.pageUrl, this.testFile.filename);

        return this.apiOrigin;
    };

    TestingUnit.prototype._httpAuth$ = function _httpAuth$(credentials) {
        (0, _typeAssertions.assertType)(_typeAssertions.is.nonNullObject, 'httpAuth', 'credentials', credentials);
        (0, _typeAssertions.assertType)(_typeAssertions.is.string, 'httpAuth', 'credentials.username', credentials.username);
        (0, _typeAssertions.assertType)(_typeAssertions.is.string, 'httpAuth', 'credentials.password', credentials.password);

        if (credentials.domain) (0, _typeAssertions.assertType)(_typeAssertions.is.string, 'httpAuth', 'credentials.domain', credentials.domain);
        if (credentials.workstation) (0, _typeAssertions.assertType)(_typeAssertions.is.string, 'httpAuth', 'credentials.workstation', credentials.workstation);

        this.authCredentials = credentials;

        return this.apiOrigin;
    };

    TestingUnit._makeAPIListForChildClass = function _makeAPIListForChildClass(ChildClass) {
        ChildClass.API_LIST = TestingUnit.API_LIST.concat((0, _delegatedApi.getDelegatedAPIList)(ChildClass.prototype));
    };

    return TestingUnit;
}();

exports.default = TestingUnit;


TestingUnit.API_LIST = (0, _delegatedApi.getDelegatedAPIList)(TestingUnit.prototype);
module.exports = exports['default'];