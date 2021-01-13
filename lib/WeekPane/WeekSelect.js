"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

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
  return /*#__PURE__*/_react.default.createElement(_select.default, (0, _extends2.default)({
    size: "small",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, props), Object.entries(weekOptions).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        weekCode = _ref2[0],
        weekName = _ref2[1];

    return /*#__PURE__*/_react.default.createElement(_select.default.Option, {
      key: weekCode,
      value: weekCode
    }, weekName);
  }));
}

var _default = WeekSelect;
exports.default = _default;