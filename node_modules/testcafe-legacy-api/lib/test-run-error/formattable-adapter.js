'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check').default;

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

exports.__esModule = true;

var _lodash = require('lodash');

var _highlightEs = require('highlight-es');

var _highlightEs2 = _interopRequireDefault(_highlightEs);

var _parse5 = require('parse5');

var _parse52 = _interopRequireDefault(_parse5);

var _templates = require('./templates');

var _templates2 = _interopRequireDefault(_templates);

var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;

var renderer = ['string', 'punctuator', 'keyword', 'number', 'regex', 'comment', 'invalid'].reduce(function (syntaxRenderer, tokenType) {
    syntaxRenderer[tokenType] = function (str) {
        return '<span class="syntax-' + tokenType + '">' + _lodash.escape(str) + '</span>';
    };

    return syntaxRenderer;
}, {});

var TestRunErrorFormattableAdapter = (function () {
    function TestRunErrorFormattableAdapter(err, metaInfo) {
        _classCallCheck(this, TestRunErrorFormattableAdapter);

        this.TEMPLATES = _templates2.default;

        this.userAgent = metaInfo.userAgent;
        this.screenshotPath = metaInfo.screenshotPath;
        this.testRunState = metaInfo.testRunState;

        _lodash.assignIn(this, err);

        this.callsite = this.callsite || metaInfo.callsite;
    }

    TestRunErrorFormattableAdapter._getSelector = function _getSelector(node) {
        var classAttr = _lodash.find(node.attrs, { name: 'class' });
        var cls = classAttr && classAttr.value;

        return cls ? node.tagName + ' ' + cls : node.tagName;
    };

    TestRunErrorFormattableAdapter._decorateHtml = function _decorateHtml(node, decorator) {
        var msg = '';

        if (node.nodeName === '#text') msg = node.value;else {
            if (node.childNodes.length) {
                msg += node.childNodes.map(function (childNode) {
                    return TestRunErrorFormattableAdapter._decorateHtml(childNode, decorator);
                }).join('');
            }

            if (node.nodeName !== '#document-fragment') {
                var selector = TestRunErrorFormattableAdapter._getSelector(node);

                msg = decorator[selector](msg, node.attrs);
            }
        }

        return msg;
    };

    TestRunErrorFormattableAdapter.prototype.getErrorMarkup = function getErrorMarkup(viewportWidth) {
        return this.TEMPLATES[this.type](this, viewportWidth);
    };

    TestRunErrorFormattableAdapter.prototype.getCallsiteMarkup = function getCallsiteMarkup() {
        if (!this.callsite) return null;

        var code = _highlightEs2.default(this.callsite, renderer);
        var lines = code.split(NEWLINE);
        var lastLine = lines.pop();

        lastLine = '<div class="code-line-last">' + lastLine + '</div>';
        lines = lines.map(function (line) {
            return '<div class="code-line"><div class="code-line-src">' + line + '</div></div>';
        });

        return '<div class="code-frame">' + lines.join('') + lastLine + '</div>';
    };

    TestRunErrorFormattableAdapter.prototype.formatMessage = function formatMessage(decorator, viewportWidth) {
        var msgHtml = this.getErrorMarkup(viewportWidth);
        var fragment = _parse52.default.parseFragment(msgHtml);

        return TestRunErrorFormattableAdapter._decorateHtml(fragment, decorator);
    };

    return TestRunErrorFormattableAdapter;
})();

exports.default = TestRunErrorFormattableAdapter;
module.exports = exports.default;