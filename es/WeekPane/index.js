import "antd/es/radio/style";
import _Radio from "antd/es/radio";
import React from 'react';
import InputFromTo from './InputFromTo';
import InputLast from './InputLast';
import InputSpecified from './InputSpecified';
import InputTarget from './InputTarget';
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

  return /*#__PURE__*/React.createElement(_Radio.Group, {
    style: {
      width: '100%'
    },
    value: currentRadio,
    onChange: onChangeRadio
  }, /*#__PURE__*/React.createElement(_Radio, {
    style: radioStyle,
    value: 0
  }, "\u6BCF\u4E00\u5468"), /*#__PURE__*/React.createElement(_Radio, {
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
  }, /*#__PURE__*/React.createElement(InputTarget, {
    disabled: currentRadio !== 3,
    value: value,
    onChange: onChange
  })), /*#__PURE__*/React.createElement(_Radio, {
    style: radioStyle,
    value: 4
  }, /*#__PURE__*/React.createElement(InputLast, {
    disabled: currentRadio !== 4,
    value: value,
    onChange: onChange
  })), /*#__PURE__*/React.createElement(_Radio, {
    style: radioStyle,
    value: 5
  }, /*#__PURE__*/React.createElement(InputSpecified, {
    disabled: currentRadio !== 5,
    value: value,
    onChange: onChange
  })));
}

export default WeekPane;