import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
import WeekSelect from './WeekSelect';

function InputLast(props) {
  var disabled = props.disabled,
      value = props.value,
      onChange = props.onChange;
  var lastWeekOfMonth = 'SUN';

  if (!disabled) {
    var _value$split = value.split('L');

    var _value$split2 = _slicedToArray(_value$split, 1);

    lastWeekOfMonth = _value$split2[0];
  }

  var onChangeLastWeekOfMonth = function onChangeLastWeekOfMonth(v) {
    return onChange("".concat(v, "L"));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, "\u672C\u6708\u7684\u6700\u540E\u4E00\u4E2A\xA0", /*#__PURE__*/React.createElement(WeekSelect, {
    disabled: disabled,
    value: lastWeekOfMonth,
    size: "small",
    onChange: onChangeLastWeekOfMonth,
    style: {
      width: 100
    }
  }), "\xA0\u6267\u884C\u4E00\u6B21");
}

export default InputLast;