import "antd/es/button/style";
import _Button from "antd/es/button";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import "antd/es/tabs/style";
import _Tabs from "antd/es/tabs";
import React, { useState } from 'react';
import SecondPane from './SecondPane';
import MinutePane from './MinutePane';
import HourPane from './HourPane';
import DayPane from './DayPane';
import MonthPane from './MonthPane';
import WeekPane from './WeekPane';
import YearPane from './YearPane';
import { secondRegex, minuteRegex, hourRegex, dayRegex, monthRegex, weekRegex, yearRegex } from './cron-regex';
var TabPane = _Tabs.TabPane;
var tabPaneStyle = {
  paddingLeft: 10,
  paddingBottom: 8,
  marginTop: -10
};

var getTabTitle = function getTabTitle(text) {
  return /*#__PURE__*/React.createElement("div", {
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

  var _useState = useState('1'),
      _useState2 = _slicedToArray(_useState, 2),
      currentTab = _useState2[0],
      setCurrentTab = _useState2[1];

  var _useState3 = useState('*'),
      _useState4 = _slicedToArray(_useState3, 2),
      second = _useState4[0],
      setSecond = _useState4[1];

  var _useState5 = useState('*'),
      _useState6 = _slicedToArray(_useState5, 2),
      minute = _useState6[0],
      setMinute = _useState6[1];

  var _useState7 = useState('*'),
      _useState8 = _slicedToArray(_useState7, 2),
      hour = _useState8[0],
      setHour = _useState8[1];

  var _useState9 = useState('*'),
      _useState10 = _slicedToArray(_useState9, 2),
      day = _useState10[0],
      setDay = _useState10[1];

  var _useState11 = useState('*'),
      _useState12 = _slicedToArray(_useState11, 2),
      month = _useState12[0],
      setMonth = _useState12[1];

  var _useState13 = useState('?'),
      _useState14 = _slicedToArray(_useState13, 2),
      week = _useState14[0],
      setWeek = _useState14[1];

  var _useState15 = useState('*'),
      _useState16 = _slicedToArray(_useState15, 2),
      year = _useState16[0],
      setYear = _useState16[1];

  var onParse = function onParse() {
    if (value) {
      try {
        var _value$split = value.split(' '),
            _value$split2 = _slicedToArray(_value$split, 7),
            secondVal = _value$split2[0],
            minuteValue = _value$split2[1],
            hourVal = _value$split2[2],
            dayVal = _value$split2[3],
            monthVal = _value$split2[4],
            weekVal = _value$split2[5],
            yearVal = _value$split2[6];

        secondVal = secondRegex.test(secondVal) ? secondVal : '*';
        minuteValue = minuteRegex.test(minuteValue) ? minuteValue : '*';
        hourVal = hourRegex.test(hourVal) ? hourVal : '*';
        dayVal = dayRegex.test(dayVal) ? dayVal : '*';
        monthVal = monthRegex.test(monthVal) ? monthVal : '*';
        weekVal = weekRegex.test(weekVal) ? weekVal : '?';
        weekVal = dayVal !== '?' ? '?' : weekVal;
        yearVal = yearRegex.test(yearVal) ? yearVal : '*';
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

  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      backgroundColor: '#fff',
      borderRadius: '4px',
      outline: 'none',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
    }, style)
  }, /*#__PURE__*/React.createElement(_Tabs, {
    tabBarGutter: 0,
    animated: true,
    destroyInactiveTabPane: true,
    activeKey: currentTab,
    onChange: setCurrentTab
  }, /*#__PURE__*/React.createElement(TabPane, {
    tab: getTabTitle('秒'),
    key: "1",
    style: tabPaneStyle
  }, /*#__PURE__*/React.createElement(SecondPane, {
    value: second,
    onChange: setSecond
  })), /*#__PURE__*/React.createElement(TabPane, {
    tab: getTabTitle('分'),
    key: "2",
    style: tabPaneStyle
  }, /*#__PURE__*/React.createElement(MinutePane, {
    value: minute,
    onChange: setMinute
  })), /*#__PURE__*/React.createElement(TabPane, {
    tab: getTabTitle('时'),
    key: "3",
    style: tabPaneStyle
  }, /*#__PURE__*/React.createElement(HourPane, {
    value: hour,
    onChange: setHour
  })), /*#__PURE__*/React.createElement(TabPane, {
    tab: getTabTitle('日'),
    key: "4",
    style: tabPaneStyle
  }, /*#__PURE__*/React.createElement(DayPane, {
    value: day,
    onChange: onChangeDay
  })), /*#__PURE__*/React.createElement(TabPane, {
    tab: getTabTitle('月'),
    key: "5",
    style: tabPaneStyle
  }, /*#__PURE__*/React.createElement(MonthPane, {
    value: month,
    onChange: setMonth
  })), /*#__PURE__*/React.createElement(TabPane, {
    tab: getTabTitle('周'),
    key: "6",
    style: tabPaneStyle
  }, /*#__PURE__*/React.createElement(WeekPane, {
    value: week,
    onChange: onChangeWeek
  })), /*#__PURE__*/React.createElement(TabPane, {
    tab: getTabTitle('年'),
    key: "7",
    style: tabPaneStyle
  }, /*#__PURE__*/React.createElement(YearPane, {
    value: year,
    onChange: setYear
  }))), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      borderTop: '1px solid #e8e8e8',
      padding: 10,
      textAlign: 'right'
    }, footerStyle)
  }, /*#__PURE__*/React.createElement(_Button, {
    style: {
      marginRight: 10
    },
    onClick: onParse
  }, "\u89E3\u6790\u5230UI"), /*#__PURE__*/React.createElement(_Button, {
    type: "primary",
    onClick: onGenerate
  }, "\u751F\u6210")));
}

export default Cron;