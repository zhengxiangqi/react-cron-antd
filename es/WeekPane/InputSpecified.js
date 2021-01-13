import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
import React, { useMemo } from 'react';
var weekOptions = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function InputSpecified(props) {
  var disabled = props.disabled,
      value = props.value,
      onChange = props.onChange;
  var selected = [];

  if (!disabled) {
    selected = value.split(',');
  }

  var onChangeSelected = function onChangeSelected(v) {
    return onChange(v.length === 0 ? 'SUN' : v.join(','));
  };

  var checkList = useMemo(function () {
    return weekOptions.map(function (item) {
      return /*#__PURE__*/React.createElement(_Col, {
        key: item,
        span: 3
      }, /*#__PURE__*/React.createElement(_Checkbox, {
        disabled: disabled,
        value: item
      }, item));
    });
  }, [disabled]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, "\u6307\u5B9A", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Checkbox.Group, {
    style: {
      width: '100%'
    },
    value: selected,
    onChange: onChangeSelected
  }, /*#__PURE__*/React.createElement(_Row, null, checkList)));
}

export default InputSpecified;