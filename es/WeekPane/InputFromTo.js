import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
import WeekSelect from './WeekSelect';

function InputFromTo(props) {
  var disabled = props.disabled,
      value = props.value,
      onChange = props.onChange;
  var from = 'SUN';
  var to = 'MON';

  if (!disabled) {
    var _value$split = value.split('-');

    var _value$split2 = _slicedToArray(_value$split, 2);

    from = _value$split2[0];
    to = _value$split2[1];
  }

  var onChangeFrom = function onChangeFrom(v) {
    return onChange("".concat(v || 'SUN', "-").concat(to));
  };

  var onChangeTo = function onChangeTo(v) {
    return onChange("".concat(from, "-").concat(v || 'MON'));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, "\u4ECE\xA0", /*#__PURE__*/React.createElement(WeekSelect, {
    disabled: disabled,
    value: from,
    size: "small",
    onChange: onChangeFrom,
    style: {
      width: 100
    }
  }), "\xA0-\xA0", /*#__PURE__*/React.createElement(WeekSelect, {
    disabled: disabled,
    value: to,
    size: "small",
    onChange: onChangeTo,
    style: {
      width: 100
    }
  }), "\xA0\uFF0C\u6BCF\u661F\u671F\u6267\u884C\u4E00\u6B21");
}

export default InputFromTo;