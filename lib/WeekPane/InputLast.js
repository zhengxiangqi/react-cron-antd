"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _WeekSelect = _interopRequireDefault(require("./WeekSelect"));

function InputLast(props) {
  var disabled = props.disabled,
      value = props.value,
      onChange = props.onChange;
  var lastWeekOfMonth = 'SUN';

  if (!disabled) {
    var _value$split = value.split('L');

    var _value$split2 = (0, _slicedToArray2.default)(_value$split, 1);

    lastWeekOfMonth = _value$split2[0];
  }

  var onChangeLastWeekOfMonth = function onChangeLastWeekOfMonth(v) {
    return onChange("".concat(v, "L"));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "\u672C\u6708\u7684\u6700\u540E\u4E00\u4E2A\xA0", /*#__PURE__*/_react.default.createElement(_WeekSelect.default, {
    disabled: disabled,
    value: lastWeekOfMonth,
    size: "small",
    onChange: onChangeLastWeekOfMonth,
    style: {
      width: 100
    }
  }), "\xA0\u6267\u884C\u4E00\u6B21");
}

var _default = InputLast;
exports.default = _default;