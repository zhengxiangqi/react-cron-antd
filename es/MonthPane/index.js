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

function MonthPane(props) {
  var value = props.value,
      onChange = props.onChange;
  var currentRadio = 0;

  if (value === '*') {
    currentRadio = 0;
  } else if (value.indexOf('-') > -1) {
    currentRadio = 1;
  } else if (value.indexOf('/') > -1) {
    currentRadio = 2;
  } else {
    currentRadio = 3;
  }

  var onChangeRadio = function onChangeRadio(e) {
    var valueType = e.target.value;
    var defaultValues = ['*', '1-1', '1/1', '1'];
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
  }, "\u6BCF\u4E00\u6708"), /*#__PURE__*/React.createElement(_Radio, {
    style: radioStyle,
    value: 1
  }, /*#__PURE__*/React.createElement(InputFromTo, {
    disabled: currentRadio !== 1,
    value: value,
    onChange: onChange
  })), /*#__PURE__*/React.createElement(_Radio, {
    style: radioStyle,
    value: 2
  }, /*#__PURE__*/React.createElement(InputFromInterval, {
    disabled: currentRadio !== 2,
    value: value,
    onChange: onChange
  })), /*#__PURE__*/React.createElement(_Radio, {
    style: radioStyle,
    value: 3
  }, /*#__PURE__*/React.createElement(InputSpecified, {
    disabled: currentRadio !== 3,
    value: value,
    onChange: onChange
  })));
}

export default MonthPane;