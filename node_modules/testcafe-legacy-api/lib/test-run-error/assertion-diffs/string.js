'use strict';

exports.__esModule = true;

var _markerPositionCalculators, _cutStringCalculators;

exports.default = getStringsDiff;
var EMPTY_STRING_LENGTH = '""'.length;
var STRING_OVERFLOW_MARKER = '...';

var OVERFLOW_TYPES = {
    noOverflow: 'noOverflow',
    rightOverflow: 'rightOverflow',
    leftOverflow: 'leftOverflow',
    bothSidesOverflow: 'bothSidesOverflow'
};

var markerPositionCalculators = (_markerPositionCalculators = {}, _markerPositionCalculators[OVERFLOW_TYPES.noOverflow] = function (str, diffIndex) {
    return diffIndex + 1;
}, _markerPositionCalculators[OVERFLOW_TYPES.rightOverflow] = function (str, diffIndex) {
    return diffIndex + 1;
}, _markerPositionCalculators[OVERFLOW_TYPES.leftOverflow] = function (str, diffIndex, maxStringLength) {
    str = str.substr(1, str.length - EMPTY_STRING_LENGTH);

    return diffIndex - (str.length - maxStringLength) + 1;
}, _markerPositionCalculators[OVERFLOW_TYPES.bothSidesOverflow] = function (str, diffIndex, maxStringLength) {
    var maxLength = maxStringLength - STRING_OVERFLOW_MARKER.length * 2;
    var maxStringOffsetFromMiddle = Math.floor(maxLength / 2);

    return STRING_OVERFLOW_MARKER.length + maxStringOffsetFromMiddle + 1;
}, _markerPositionCalculators);

var cutStringCalculators = (_cutStringCalculators = {}, _cutStringCalculators[OVERFLOW_TYPES.noOverflow] = function (str) {
    return str;
}, _cutStringCalculators[OVERFLOW_TYPES.rightOverflow] = function (str, diffIndex, maxStringLength, quote) {
    var maxLength = maxStringLength - STRING_OVERFLOW_MARKER.length;

    return quote + str.substr(1, maxLength) + STRING_OVERFLOW_MARKER + quote;
}, _cutStringCalculators[OVERFLOW_TYPES.leftOverflow] = function (str, diffIndex, maxStringLength, quote) {
    var maxLength = maxStringLength - STRING_OVERFLOW_MARKER.length;

    return quote + STRING_OVERFLOW_MARKER + str.substr(str.length - 1 - maxLength, maxLength) + quote;
}, _cutStringCalculators[OVERFLOW_TYPES.bothSidesOverflow] = function (str, diffIndex, maxStringLength, quote) {
    var maxLength = maxStringLength - STRING_OVERFLOW_MARKER.length * 2;
    var maxStringOffsetFromMiddle = Math.floor(maxLength / 2);

    return quote + STRING_OVERFLOW_MARKER + str.substr(diffIndex + 1 - maxStringOffsetFromMiddle, maxLength) + STRING_OVERFLOW_MARKER + quote;
}, _cutStringCalculators);

function cutNewLines(str) {
    return typeof str === 'string' ? str.replace(/(\r\n|\n|\r)/gm, '\\n') : str;
}

function getMarkerStr(offset) {
    //NOTE: return marker with 'offset' gaps at the beginning
    return new Array(offset + 1).join(' ') + '^';
}

function getOverflowType(originStr, diffIndex, maxStringLength) {
    var maxStringOffsetFromMiddle = Math.floor(maxStringLength / 2);
    var str = originStr.substr(1, originStr.length - 2);

    //NOTE case: '123456'
    //           '123945'
    //               ^
    if (str.length <= maxStringLength) return OVERFLOW_TYPES.noOverflow;
    //NOTE: case '1234...'
    //           '1239...'
    //               ^
    else if (diffIndex < maxStringOffsetFromMiddle) return OVERFLOW_TYPES.rightOverflow;
        //NOTE: case '...456'
        //           '...956;
        //               ^
        else if (str.length - diffIndex - 1 < maxStringOffsetFromMiddle) return OVERFLOW_TYPES.leftOverflow;
    //NOTE: case '...345...'
    //           '...395...'
    //                ^
    return OVERFLOW_TYPES.bothSidesOverflow;
}

function getStringsDiff(err, maxStringLength) {
    var actual = err.actual;
    var expected = err.expected;
    var markerPosition = -1;
    var key = err.diffType && err.diffType.isStrings ? err.diffType.diffIndex : err.key;

    //NOTE: recalculate diff position after replacing new lines
    var actualLeftPart = cutNewLines(actual.substr(0, key));

    key += actualLeftPart.length - key;
    actual = actualLeftPart + cutNewLines(actual.substr(key, actual.length));
    expected = cutNewLines(expected);

    var overflowType = getOverflowType(actual, key, maxStringLength);

    if (actual.length > EMPTY_STRING_LENGTH && expected.length > EMPTY_STRING_LENGTH) markerPosition = markerPositionCalculators[overflowType](actual, key, maxStringLength);

    return {
        expected: cutStringCalculators[overflowType](expected, key, maxStringLength, expected[0]),
        actual: cutStringCalculators[overflowType](actual, key, maxStringLength, actual[0]),
        marker: markerPosition >= 0 ? getMarkerStr(markerPosition) : ''
    };
}

module.exports = exports.default;