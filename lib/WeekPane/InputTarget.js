"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/input-number/style");

var _inputNumber = _interopRequireDefault(require("antd/es/input-number"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _WeekSelect = _interopRequireDefault(require("./WeekSelect"));

function InputTarget(props) {
  var disabled = props.disabled,
      value = props.value,
      onChange = props.onChange;
  var weekOfMonth = 1;
  var dayOfWeek = 'MON';

  if (!disabled) {
    var _value$split = value.split('#');

    var _value$split2 = (0, _slicedToArray2.default)(_value$split, 2);

    weekOfMonth = _value$split2[0];
    dayOfWeek = _value$split2[1];
    weekOfMonth = parseInt(weekOfMonth, 10);
  }

  var onChangeWeekOfMonth = function onChangeWeekOfMonth(v) {
    return onChange("".concat(v || 1, "#").concat(dayOfWeek));
  };

  var onChangeDayOfWeek = function onChangeDayOfWeek(v) {
    return onChange("".concat(weekOfMonth, "#").concat(v || 'MON'));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "\u672C\u6708\u7B2C\xA0", /*#__PURE__*/_react.default.createElement(_inputNumber.default, {
    disabled: disabled,
    min: 1,
    max: 5,
    value: weekOfMonth,
    size: "small",
    onChange: onChangeWeekOfMonth,
    style: {
      width: 100
    }
  }), "\xA0\u5468\u7684\xA0", /*#__PURE__*/_react.default.createElement(_WeekSelect.default, {
    disabled: disabled,
    value: dayOfWeek,
    size: "small",
    onChange: onChangeDayOfWeek,
    style: {
      width: 100
    }
  }), "\xA0\u6267\u884C\u4E00\u6B21");
}

var _default = InputTarget;
exports.default = _default;