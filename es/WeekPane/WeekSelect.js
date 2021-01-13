import _extends from "@babel/runtime/helpers/esm/extends";
import "antd/es/select/style";
import _Select from "antd/es/select";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
var weekOptions = {
  SUN: '星期日',
  MON: '星期一',
  TUE: '星期二',
  WED: '星期三',
  THU: '星期四',
  FRI: '星期五',
  SAT: '星期六'
};

function WeekSelect(props) {
  return /*#__PURE__*/React.createElement(_Select, _extends({
    size: "small",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, props), Object.entries(weekOptions).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        weekCode = _ref2[0],
        weekName = _ref2[1];

    return /*#__PURE__*/React.createElement(_Select.Option, {
      key: weekCode,
      value: weekCode
    }, weekName);
  }));
}

export default WeekSelect;