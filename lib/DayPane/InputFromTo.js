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

function InputFromTo(props) {
  var disabled = props.disabled,
      value = props.value,
      onChange = props.onChange;
  var from = 1;
  var to = 1;

  if (!disabled) {
    var _value$split$map = value.split('-').map(function (v) {
      return parseInt(v, 10);
    });

    var _value$split$map2 = (0, _slicedToArray2.default)(_value$split$map, 2);

    from = _value$split$map2[0];
    to = _value$split$map2[1];
  }

  var onChangeFrom = function onChangeFrom(v) {
    return onChange("".concat(v || 1, "-").concat(to));
  };

  var onChangeTo = function onChangeTo(v) {
    return onChange("".concat(from, "-").concat(v || 1));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "\u4ECE\xA0", /*#__PURE__*/_react.default.createElement(_inputNumber.default, {
    disabled: disabled,
    min: 1,
    max: 31,
    value: from,
    size: "small",
    onChange: onChangeFrom,
    style: {
      width: 100
    }
  }), "\xA0-\xA0", /*#__PURE__*/_react.default.createElement(_inputNumber.default, {
    disabled: disabled,
    min: 1,
    max: 31,
    value: to,
    size: "small",
    onChange: onChangeTo,
    style: {
      width: 100
    }
  }), "\xA0\u65E5\uFF0C\u6BCF\u65E5\u6267\u884C\u4E00\u6B21");
}

var _default = InputFromTo;
exports.default = _default;