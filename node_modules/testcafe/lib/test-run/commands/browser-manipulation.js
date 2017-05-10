'use strict';

exports.__esModule = true;
exports.MaximizeWindowCommand = exports.ResizeWindowToFitDeviceCommand = exports.ResizeWindowCommand = exports.TakeScreenshotOnFailCommand = exports.TakeScreenshotCommand = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

var _assignable = require('../../utils/assignable');

var _assignable2 = _interopRequireDefault(_assignable);

var _options = require('./options');

var _argument = require('./validations/argument');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initResizeToFitDeviceOptions(name, val) {
    return new _options.ResizeToFitDeviceOptions(val, true);
}

// Commands

var TakeScreenshotCommand = exports.TakeScreenshotCommand = function (_Assignable) {
    (0, _inherits3.default)(TakeScreenshotCommand, _Assignable);

    function TakeScreenshotCommand(obj) {
        (0, _classCallCheck3.default)(this, TakeScreenshotCommand);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Assignable.call(this, obj));

        _this.type = _type2.default.takeScreenshot;
        _this.path = '';

        _this._assignFrom(obj, true);
        return _this;
    }

    TakeScreenshotCommand.prototype._getAssignableProperties = function _getAssignableProperties() {
        return [{ name: 'path', type: _argument.nonEmptyStringArgument }];
    };

    return TakeScreenshotCommand;
}(_assignable2.default);

var TakeScreenshotOnFailCommand = exports.TakeScreenshotOnFailCommand = function TakeScreenshotOnFailCommand() {
    (0, _classCallCheck3.default)(this, TakeScreenshotOnFailCommand);

    this.type = _type2.default.takeScreenshotOnFail;
};

var ResizeWindowCommand = exports.ResizeWindowCommand = function (_Assignable2) {
    (0, _inherits3.default)(ResizeWindowCommand, _Assignable2);

    function ResizeWindowCommand(obj) {
        (0, _classCallCheck3.default)(this, ResizeWindowCommand);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, _Assignable2.call(this, obj));

        _this2.type = _type2.default.resizeWindow;
        _this2.width = 0;
        _this2.height = 0;

        _this2._assignFrom(obj, true);
        return _this2;
    }

    ResizeWindowCommand.prototype._getAssignableProperties = function _getAssignableProperties() {
        return [{ name: 'width', type: _argument.positiveIntegerArgument, required: true }, { name: 'height', type: _argument.positiveIntegerArgument, required: true }];
    };

    return ResizeWindowCommand;
}(_assignable2.default);

var ResizeWindowToFitDeviceCommand = exports.ResizeWindowToFitDeviceCommand = function (_Assignable3) {
    (0, _inherits3.default)(ResizeWindowToFitDeviceCommand, _Assignable3);

    function ResizeWindowToFitDeviceCommand(obj) {
        (0, _classCallCheck3.default)(this, ResizeWindowToFitDeviceCommand);

        var _this3 = (0, _possibleConstructorReturn3.default)(this, _Assignable3.call(this, obj));

        _this3.type = _type2.default.resizeWindowToFitDevice;
        _this3.device = null;
        _this3.options = null;

        _this3._assignFrom(obj, true);
        return _this3;
    }

    ResizeWindowToFitDeviceCommand.prototype._getAssignableProperties = function _getAssignableProperties() {
        return [{ name: 'device', type: _argument.resizeWindowDeviceArgument, required: true }, { name: 'options', type: _argument.actionOptions, init: initResizeToFitDeviceOptions, required: true }];
    };

    return ResizeWindowToFitDeviceCommand;
}(_assignable2.default);

var MaximizeWindowCommand = exports.MaximizeWindowCommand = function MaximizeWindowCommand() {
    (0, _classCallCheck3.default)(this, MaximizeWindowCommand);

    this.type = _type2.default.maximizeWindow;
};