import "antd/es/input-number/style";
import _InputNumber from "antd/es/input-number";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';

function InputFromTo(props) {
  var disabled = props.disabled,
      value = props.value,
      onChange = props.onChange;
  var from = 0;
  var to = 0;

  if (!disabled) {
    var _value$split$map = value.split('-').map(function (v) {
      return parseInt(v, 10);
    });

    var _value$split$map2 = _slicedToArray(_value$split$map, 2);

    from = _value$split$map2[0];
    to = _value$split$map2[1];
  }

  var onChangeFrom = function onChangeFrom(v) {
    return onChange("".concat(v || 0, "-").concat(to));
  };

  var onChangeTo = function onChangeTo(v) {
    return onChange("".concat(from, "-").concat(v || 0));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, "\u4ECE\xA0", /*#__PURE__*/React.createElement(_InputNumber, {
    disabled: disabled,
    min: 0,
    max: 59,
    value: from,
    size: "small",
    onChange: onChangeFrom,
    style: {
      width: 100
    }
  }), "\xA0-\xA0", /*#__PURE__*/React.createElement(_InputNumber, {
    disabled: disabled,
    min: 0,
    max: 59,
    value: to,
    size: "small",
    onChange: onChangeTo,
    style: {
      width: 100
    }
  }), "\xA0\u5206\uFF0C\u6BCF\u5206\u6267\u884C\u4E00\u6B21");
}

export default InputFromTo;