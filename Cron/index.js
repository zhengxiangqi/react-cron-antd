import React, { useState, useCallback, useEffect } from 'react';
import { Tabs, Button } from 'antd';
import './index.less';
import SecondPane from './SecondPane';
import MinutePane from './MinutePane';
import HourPane from './HourPane';
import DayPane from './DayPane';
import MonthPane from './MonthPane';
import WeekPane from './WeekPane';
import YearPane from './YearPanel';
import {
  secondRegex,
  minuteRegex,
  hourRegex,
  dayRegex,
  monthRegex,
  weekRegex,
  yearRegex,
} from './cron-regex';

const { TabPane } = Tabs;

function Cron(props) {
  const { style, value, onOk, onCancel } = props;
  const [currentTab, setCurrentTab] = useState('1');
  const [second, setSecond] = useState('*');
  const [minute, setMinute] = useState('*');
  const [hour, setHour] = useState('*');
  const [day, setDay] = useState('*');
  const [month, setMonth] = useState('*');
  const [week, setWeek] = useState('?');
  const [year, setYear] = useState('');

  const onParse = useCallback((_value) => {
    if (_value) {
      try {
        let [
          secondVal,
          minuteValue,
          hourVal,
          dayVal,
          monthVal,
          weekVal,
          yearVal,
        ] = _value.split(' ');
        secondVal = secondRegex.test(secondVal) ? secondVal : '*';
        minuteValue = minuteRegex.test(minuteValue) ? minuteValue : '*';
        hourVal = hourRegex.test(hourVal) ? hourVal : '*';
        dayVal = dayRegex.test(dayVal) ? dayVal : '*';
        monthVal = monthRegex.test(monthVal) ? monthVal : '*';
        weekVal = weekRegex.test(weekVal) ? weekVal : '?';
        weekVal = dayVal !== '?' ? '?' : weekVal;
        yearVal = yearRegex.test(yearVal) ? yearVal : '';
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
        setYear('');
      }
    }
  }, []);

  useEffect(() => {
    onParse(value);
  }, [value, onParse]);

  const onGenerate = () => {
    if (onOk) {
      onOk([second, minute, hour, day, month, week, year].join(' ').trim());
    }
  };

  const onChangeDay = (v) => {
    setDay(v);
    if (v !== '?') {
      setWeek('?');
    }
  };

  const onChangeWeek = (v) => {
    setWeek(v);
    if (v !== '?') {
      setDay('?');
    }
  };

  return (
    <div className="c_cron" style={style}>
      <div>
        <div style={{ color: 'cadetblue' }}>输入框当前值: {value}</div>
        <div style={{ color: 'coral' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;实时编辑值:{' '}
          {[second, minute, hour, day, month, week, year].join(' ').trim()}
        </div>
      </div>
      <Tabs activeKey={currentTab} onChange={setCurrentTab}>
        <TabPane tab="秒" key="1">
          <SecondPane value={second} onChange={setSecond} />
        </TabPane>
        <TabPane tab="分" key="2">
          <MinutePane value={minute} onChange={setMinute} />
        </TabPane>
        <TabPane tab="时" key="3">
          <HourPane value={hour} onChange={setHour} />
        </TabPane>
        <TabPane tab="日" key="4">
          <DayPane value={day} onChange={onChangeDay} />
        </TabPane>
        <TabPane tab="月" key="5">
          <MonthPane value={month} onChange={setMonth} />
        </TabPane>
        <TabPane tab="周" key="6">
          <WeekPane value={week} onChange={onChangeWeek} />
        </TabPane>
        <TabPane tab="年" key="7">
          <YearPane value={year} onChange={setYear} />
        </TabPane>
      </Tabs>
      <div className="c_cron_footer">
        <Button style={{ marginRight: 10 }} onClick={onCancel}>
          取消
        </Button>
        <Button
          type="primary"
          onClick={() => {
            onGenerate && onGenerate();
          }}
        >
          生成
        </Button>
      </div>
    </div>
  );
}

export default Cron;
