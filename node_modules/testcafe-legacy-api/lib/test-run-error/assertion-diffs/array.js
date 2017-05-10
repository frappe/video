'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

exports.__esModule = true;
exports.default = getArraysDiff;

var _object = require('./object');

var _object2 = _interopRequireDefault(_object);

function addDiffIndexPrefix(diff, arrayIndexStr) {
    //NOTE: add gaps with length equal the length of prefix
    //'1' => '[0]: 1'
    //'^' => '     ^'
    var marker = diff.marker ? arrayIndexStr.replace(/./g, ' ') + diff.marker : '';

    diff.expected = arrayIndexStr + diff.expected;
    diff.actual = arrayIndexStr + diff.actual;
    diff.marker = marker;
}

function getArraysDiff(err, maxStringLength) {
    var arrayIndexStr = '[' + err.key + ']: ';

    maxStringLength -= arrayIndexStr.length;

    var diff = _object2.default(err, maxStringLength);

    addDiffIndexPrefix(diff, arrayIndexStr);

    return diff;
}

module.exports = exports.default;