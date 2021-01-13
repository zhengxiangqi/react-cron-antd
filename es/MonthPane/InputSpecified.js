import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
import React, { useMemo } from 'react';

function InputSpecified(props) {
  var disabled = props.disabled,
      value = props.value,
      onChange = props.onChange;
  var selected = [];

  if (!disabled) {
    selected = value.split(',').map(function (v) {
      return parseInt(v, 10);
    });
  }

  var onChangeSelected = function onChangeSelected(v) {
    return onChange(v.length === 0 ? '1' : v.join(','));
  };

  var checkList = useMemo(function () {
    var checks = [];

    for (var i = 1; i < 13; i++) {
      checks.push( /*#__PURE__*/React.createElement(_Col, {
        key: i,
        span: 4
      }, /*#__PURE__*/React.createElement(_Checkbox, {
        disabled: disabled,
        value: i
      }, i)));
    }

    return checks;
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