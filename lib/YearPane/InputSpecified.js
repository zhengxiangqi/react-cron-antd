"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

var _react = _interopRequireWildcard(require("react"));

function InputSpecified(props) {
  var disabled = props.disabled,
      value = props.value,
      onChange = props.onChange;
  var currentYear = new Date().getUTCFullYear();
  var selected = [];

  if (!disabled) {
    selected = value.split(',').map(function (v) {
      return parseInt(v, 10);
    });
  }

  var onChangeSelected = function onChangeSelected(v) {
    return onChange(v.length === 0 ? "".concat(currentYear) : v.join(','));
  };

  var checkList = (0, _react.useMemo)(function () {
    var checks = [];

    for (var i = currentYear - 6; i < currentYear + 48; i++) {
      checks.push( /*#__PURE__*/_react.default.createElement(_col.default, {
        key: i,
        span: 4
      }, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
        disabled: disabled,
        value: i
      }, i)));
    }

    return checks;
  }, [disabled]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "\u6307\u5B9A", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_checkbox.default.Group, {
    style: {
      width: '100%'
    },
    value: selected,
    onChange: onChangeSelected
  }, /*#__PURE__*/_react.default.createElement(_row.default, null, checkList)));
}

var _default = InputSpecified;
exports.default = _default;