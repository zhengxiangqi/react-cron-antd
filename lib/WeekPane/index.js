"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/radio/style");

var _radio = _interopRequireDefault(require("antd/es/radio"));

var _react = _interopRequireDefault(require("react"));

var _InputFromTo = _interopRequireDefault(require("./InputFromTo"));

var _InputLast = _interopRequireDefault(require("./InputLast"));

var _InputSpecified = _interopRequireDefault(require("./InputSpecified"));

var _InputTarget = _interopRequireDefault(require("./InputTarget"));

var radioStyle = {
  display: 'block',
  lineHeight: '32px'
};

function WeekPane(props) {
  var value = props.value,
      onChange = props.onChange;
  var currentRadio = 0;

  if (value === '*') {
    currentRadio = 0;
  } else if (value === '?') {
    currentRadio = 1;
  } else if (value.indexOf('-') > -1) {
    currentRadio = 2;
  } else if (value.indexOf('#') > -1) {
    currentRadio = 3;
  } else if (value.indexOf('L') > -1) {
    currentRadio = 4;
  } else {
    currentRadio = 5;
  }

  var onChangeRadio = function onChangeRadio(e) {
    var valueType = e.target.value;
    var defaultValues = ['*', '?', 'SUN-MON', '1#MON', 'SUNL', 'SUN'];
    onChange(defaultValues[valueType]);
  };

  return /*#__PURE__*/_react.default.createElement(_radio.default.Group, {
    style: {
      width: '100%'
    },
    value: currentRadio,
    onChange: onChangeRadio
  }, /*#__PURE__*/_react.default.createElement(_radio.default, {
    style: radioStyle,
    value: 0
  }, "\u6BCF\u4E00\u5468"), /*#__PURE__*/_react.default.createElement(_radio.default, {
    style: radioStyle,
    value: 1
  }, "\u4E0D\u6307\u5B9A"), /*#__PURE__*/_react.default.createElement(_radio.default, {
    style: radioStyle,
    value: 2
  }, /*#__PURE__*/_react.default.createElement(_InputFromTo.default, {
    disabled: currentRadio !== 2,
    value: value,
    onChange: onChange
  })), /*#__PURE__*/_react.default.createElement(_radio.default, {
    style: radioStyle,
    value: 3
  }, /*#__PURE__*/_react.default.createElement(_InputTarget.default, {
    disabled: currentRadio !== 3,
    value: value,
    onChange: onChange
  })), /*#__PURE__*/_react.default.createElement(_radio.default, {
    style: radioStyle,
    value: 4
  }, /*#__PURE__*/_react.default.createElement(_InputLast.default, {
    disabled: currentRadio !== 4,
    value: value,
    onChange: onChange
  })), /*#__PURE__*/_react.default.createElement(_radio.default, {
    style: radioStyle,
    value: 5
  }, /*#__PURE__*/_react.default.createElement(_InputSpecified.default, {
    disabled: currentRadio !== 5,
    value: value,
    onChange: onChange
  })));
}

var _default = WeekPane;
exports.default = _default;