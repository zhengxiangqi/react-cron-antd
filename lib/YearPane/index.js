"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/radio/style");

var _radio = _interopRequireDefault(require("antd/es/radio"));

var _react = _interopRequireDefault(require("react"));

var _InputFromInterval = _interopRequireDefault(require("./InputFromInterval"));

var _InputFromTo = _interopRequireDefault(require("./InputFromTo"));

var _InputSpecified = _interopRequireDefault(require("./InputSpecified"));

var radioStyle = {
  display: 'block',
  lineHeight: '32px'
};

function YearPane(props) {
  var value = props.value,
      onChange = props.onChange;
  var currentRadio = 0;

  if (value === '*') {
    currentRadio = 0;
  } else if (value === '?') {
    currentRadio = 1;
  } else if (value.indexOf('-') > -1) {
    currentRadio = 2;
  } else if (value.indexOf('/') > -1) {
    currentRadio = 3;
  } else {
    currentRadio = 4;
  }

  var onChangeRadio = function onChangeRadio(e) {
    var valueType = e.target.value;
    var currentYear = new Date().getUTCFullYear();
    var defaultValues = ['*', '?', "".concat(currentYear, "-").concat(currentYear + 10), "".concat(currentYear, "/1"), "".concat(currentYear)];
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
  }, "\u6BCF\u5E74"), /*#__PURE__*/_react.default.createElement(_radio.default, {
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
  }, /*#__PURE__*/_react.default.createElement(_InputFromInterval.default, {
    disabled: currentRadio !== 3,
    value: value,
    onChange: onChange
  })), /*#__PURE__*/_react.default.createElement(_radio.default, {
    style: radioStyle,
    value: 4
  }, /*#__PURE__*/_react.default.createElement(_InputSpecified.default, {
    disabled: currentRadio !== 4,
    value: value,
    onChange: onChange
  })));
}

var _default = YearPane;
exports.default = _default;