"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/tabs/style");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

var _react = _interopRequireWildcard(require("react"));

var _SecondPane = _interopRequireDefault(require("./SecondPane"));

var _MinutePane = _interopRequireDefault(require("./MinutePane"));

var _HourPane = _interopRequireDefault(require("./HourPane"));

var _DayPane = _interopRequireDefault(require("./DayPane"));

var _MonthPane = _interopRequireDefault(require("./MonthPane"));

var _WeekPane = _interopRequireDefault(require("./WeekPane"));

var _YearPane = _interopRequireDefault(require("./YearPane"));

var _cronRegex = require("./cron-regex");

var TabPane = _tabs.default.TabPane;
var tabPaneStyle = {
  paddingLeft: 10,
  paddingBottom: 8,
  marginTop: -10
};

var getTabTitle = function getTabTitle(text) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 50,
      textAlign: 'center'
    }
  }, text);
};

function Cron(props) {
  var style = props.style,
      footerStyle = props.footerStyle,
      value = props.value,
      onOk = props.onOk;

  var _useState = (0, _react.useState)('1'),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      currentTab = _useState2[0],
      setCurrentTab = _useState2[1];

  var _useState3 = (0, _react.useState)('*'),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      second = _useState4[0],
      setSecond = _useState4[1];

  var _useState5 = (0, _react.useState)('*'),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      minute = _useState6[0],
      setMinute = _useState6[1];

  var _useState7 = (0, _react.useState)('*'),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      hour = _useState8[0],
      setHour = _useState8[1];

  var _useState9 = (0, _react.useState)('*'),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      day = _useState10[0],
      setDay = _useState10[1];

  var _useState11 = (0, _react.useState)('*'),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      month = _useState12[0],
      setMonth = _useState12[1];

  var _useState13 = (0, _react.useState)('?'),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      week = _useState14[0],
      setWeek = _useState14[1];

  var _useState15 = (0, _react.useState)('*'),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
      year = _useState16[0],
      setYear = _useState16[1];

  var onParse = function onParse() {
    if (value) {
      try {
        var _value$split = value.split(' '),
            _value$split2 = (0, _slicedToArray2.default)(_value$split, 7),
            secondVal = _value$split2[0],
            minuteValue = _value$split2[1],
            hourVal = _value$split2[2],
            dayVal = _value$split2[3],
            monthVal = _value$split2[4],
            weekVal = _value$split2[5],
            yearVal = _value$split2[6];

        secondVal = _cronRegex.secondRegex.test(secondVal) ? secondVal : '*';
        minuteValue = _cronRegex.minuteRegex.test(minuteValue) ? minuteValue : '*';
        hourVal = _cronRegex.hourRegex.test(hourVal) ? hourVal : '*';
        dayVal = _cronRegex.dayRegex.test(dayVal) ? dayVal : '*';
        monthVal = _cronRegex.monthRegex.test(monthVal) ? monthVal : '*';
        weekVal = _cronRegex.weekRegex.test(weekVal) ? weekVal : '?';
        weekVal = dayVal !== '?' ? '?' : weekVal;
        yearVal = _cronRegex.yearRegex.test(yearVal) ? yearVal : '*';
        setSecond(secondVal);
        setMinute(minuteValue);
        setHour(hourVal);
        setDay(dayVal);
        setMonth(monthVal);
        setWeek(weekVal);
        setYear(yearVal);
      } catch (error) {
        setSecond('*');
        setMinute('*');
        setHour('*');
        setDay('*');
        setMonth('*');
        setWeek('?');
        setYear('*');
      }
    }
  };

  var onGenerate = function onGenerate() {
    if (onOk) {
      onOk([second, minute, hour, day, month, week, year].join(' '));
    }
  };

  var onChangeDay = function onChangeDay(v) {
    setDay(v);

    if (v !== '?') {
      setWeek('?');
    }
  };

  var onChangeWeek = function onChangeWeek(v) {
    setWeek(v);

    if (v !== '?') {
      setDay('?');
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: (0, _objectSpread2.default)({
      backgroundColor: '#fff',
      borderRadius: '4px',
      outline: 'none',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
    }, style)
  }, /*#__PURE__*/_react.default.createElement(_tabs.default, {
    tabBarGutter: 0,
    animated: true,
    destroyInactiveTabPane: true,
    activeKey: currentTab,
    onChange: setCurrentTab
  }, /*#__PURE__*/_react.default.createElement(TabPane, {
    tab: getTabTitle('秒'),
    key: "1",
    style: tabPaneStyle
  }, /*#__PURE__*/_react.default.createElement(_SecondPane.default, {
    value: second,
    onChange: setSecond
  })), /*#__PURE__*/_react.default.createElement(TabPane, {
    tab: getTabTitle('分'),
    key: "2",
    style: tabPaneStyle
  }, /*#__PURE__*/_react.default.createElement(_MinutePane.default, {
    value: minute,
    onChange: setMinute
  })), /*#__PURE__*/_react.default.createElement(TabPane, {
    tab: getTabTitle('时'),
    key: "3",
    style: tabPaneStyle
  }, /*#__PURE__*/_react.default.createElement(_HourPane.default, {
    value: hour,
    onChange: setHour
  })), /*#__PURE__*/_react.default.createElement(TabPane, {
    tab: getTabTitle('日'),
    key: "4",
    style: tabPaneStyle
  }, /*#__PURE__*/_react.default.createElement(_DayPane.default, {
    value: day,
    onChange: onChangeDay
  })), /*#__PURE__*/_react.default.createElement(TabPane, {
    tab: getTabTitle('月'),
    key: "5",
    style: tabPaneStyle
  }, /*#__PURE__*/_react.default.createElement(_MonthPane.default, {
    value: month,
    onChange: setMonth
  })), /*#__PURE__*/_react.default.createElement(TabPane, {
    tab: getTabTitle('周'),
    key: "6",
    style: tabPaneStyle
  }, /*#__PURE__*/_react.default.createElement(_WeekPane.default, {
    value: week,
    onChange: onChangeWeek
  })), /*#__PURE__*/_react.default.createElement(TabPane, {
    tab: getTabTitle('年'),
    key: "7",
    style: tabPaneStyle
  }, /*#__PURE__*/_react.default.createElement(_YearPane.default, {
    value: year,
    onChange: setYear
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: (0, _objectSpread2.default)({
      borderTop: '1px solid #e8e8e8',
      padding: 10,
      textAlign: 'right'
    }, footerStyle)
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    style: {
      marginRight: 10
    },
    onClick: onParse
  }, "\u89E3\u6790\u5230UI"), /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "primary",
    onClick: onGenerate
  }, "\u751F\u6210")));
}

var _default = Cron;
exports.default = _default;