import "antd/es/input-number/style";
import _InputNumber from "antd/es/input-number";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
import WeekSelect from './WeekSelect';

function InputTarget(props) {
  var disabled = props.disabled,
      value = props.value,
      onChange = props.onChange;
  var weekOfMonth = 1;
  var dayOfWeek = 'MON';

  if (!disabled) {
    var _value$split = value.split('#');

    var _value$split2 = _slicedToArray(_value$split, 2);

    weekOfMonth = _value$split2[0];
    dayOfWeek = _value$split2[1];
    weekOfMonth = parseInt(weekOfMonth, 10);
  }

  var onChangeWeekOfMonth = function onChangeWeekOfMonth(v) {
    return onChange("".concat(v || 1, "#").concat(dayOfWeek));
  };

  var onChangeDayOfWeek = function onChangeDayOfWeek(v) {
    return onChange("".concat(weekOfMonth, "#").concat(v || 'MON'));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, "\u672C\u6708\u7B2C\xA0", /*#__PURE__*/React.createElement(_InputNumber, {
    disabled: disabled,
    min: 1,
    max: 5,
    value: weekOfMonth,
    size: "small",
    onChange: onChangeWeekOfMonth,
    style: {
      width: 100
    }
  }), "\xA0\u5468\u7684\xA0", /*#__PURE__*/React.createElement(WeekSelect, {
    disabled: disabled,
    value: dayOfWeek,
    size: "small",
    onChange: onChangeDayOfWeek,
    style: {
      width: 100
    }
  }), "\xA0\u6267\u884C\u4E00\u6B21");
}

export default InputTarget;