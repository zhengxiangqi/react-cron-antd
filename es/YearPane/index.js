import "antd/es/radio/style";
import _Radio from "antd/es/radio";
import React from 'react';
import InputFromInterval from './InputFromInterval';
import InputFromTo from './InputFromTo';
import InputSpecified from './InputSpecified';
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

  return /*#__PURE__*/React.createElement(_Radio.Group, {
    style: {
      width: '100%'
    },
    value: currentRadio,
    onChange: onChangeRadio
  }, /*#__PURE__*/React.createElement(_Radio, {
    style: radioStyle,
    value: 0
  }, "\u6BCF\u5E74"), /*#__PURE__*/React.createElement(_Radio, {
    style: radioStyle,
    value: 1
  }, "\u4E0D\u6307\u5B9A"), /*#__PURE__*/React.createElement(_Radio, {
    style: radioStyle,
    value: 2
  }, /*#__PURE__*/React.createElement(InputFromTo, {
    disabled: currentRadio !== 2,
    value: value,
    onChange: onChange
  })), /*#__PURE__*/React.createElement(_Radio, {
    style: radioStyle,
    value: 3
  }, /*#__PURE__*/React.createElement(InputFromInterval, {
    disabled: currentRadio !== 3,
    value: value,
    onChange: onChange
  })), /*#__PURE__*/React.createElement(_Radio, {
    style: radioStyle,
    value: 4
  }, /*#__PURE__*/React.createElement(InputSpecified, {
    disabled: currentRadio !== 4,
    value: value,
    onChange: onChange
  })));
}

export default YearPane;