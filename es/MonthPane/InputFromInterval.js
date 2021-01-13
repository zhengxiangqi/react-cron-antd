import "antd/es/input-number/style";
import _InputNumber from "antd/es/input-number";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';

function InputFromInterval(props) {
  var disabled = props.disabled,
      value = props.value,
      onChange = props.onChange;
  var from = 0;
  var interval = 0;

  if (!disabled) {
    var _value$split$map = value.split('/').map(function (v) {
      return parseInt(v, 10);
    });

    var _value$split$map2 = _slicedToArray(_value$split$map, 2);

    from = _value$split$map2[0];
    interval = _value$split$map2[1];
  }

  var onChangeFrom = function onChangeFrom(v) {
    return onChange("".concat(v || 0, "/").concat(interval));
  };

  var onChangeInterval = function onChangeInterval(v) {
    return onChange("".concat(from, "/").concat(v || 0));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, "\u4ECE\xA0", /*#__PURE__*/React.createElement(_InputNumber, {
    disabled: disabled,
    min: 1,
    max: 12,
    value: from,
    size: "small",
    onChange: onChangeFrom,
    style: {
      width: 100
    }
  }), "\xA0\u6708\u5F00\u59CB\uFF0C \u6BCF\xA0", /*#__PURE__*/React.createElement(_InputNumber, {
    disabled: disabled,
    min: 1,
    max: 12,
    value: interval,
    size: "small",
    onChange: onChangeInterval,
    style: {
      width: 100
    }
  }), "\xA0\u6708\u6267\u884C\u4E00\u6B21");
}

export default InputFromInterval;