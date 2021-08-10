import { Button, Tabs } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { dayRegex, hourRegex, minuteRegex, monthRegex, secondRegex, weekRegex, yearRegex } from './cron-regex';
import DayPane from './DayPane';
import HourPane from './HourPane';
import MinutePane from './MinutePane';
import MonthPane from './MonthPane';
import SecondPane from './SecondPane';
import WeekPane from './WeekPane';
import YearPane from './YearPane';

const { TabPane } = Tabs;
const tabPaneStyle = { paddingLeft: 10, paddingBottom: 8, marginTop: -10 };
const getTabTitle = (text) => <div style={{ width: 50, textAlign: 'center' }}>{text}</div>;

function Cron(props) {
    const { style, footerStyle, footerRenderer, value, onOk } = props;
    const [currentTab, setCurrentTab] = useState('1');
    const [second, setSecond] = useState('*');
    const [minute, setMinute] = useState('*');
    const [hour, setHour] = useState('*');
    const [day, setDay] = useState('*');
    const [month, setMonth] = useState('*');
    const [week, setWeek] = useState('?');
    const [year, setYear] = useState('*');

    const onParse = () => {
        if (value) {
            try {
                let [secondVal, minuteValue, hourVal, dayVal, monthVal, weekVal, yearVal] = value.split(' ');
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

    const onReset = () => {
        setSecond('*');
        setMinute('*');
        setHour('*');
        setDay('*');
        setMonth('*');
        setWeek('?');
        setYear('*');
        if (onOk) {
            onOk(['*', '*', '*', '*', '*', '?', '*'].join(' '));
        }
    };

    const onGenerate = () => {
        if (onOk) {
            onOk([second, minute, hour, day, month, week, year].join(' '));
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

    useEffect(onParse, [value]);

    const footerRendererWrapper = useCallback(() => {
        if (footerRenderer && typeof footerRenderer === 'function') {
            return footerRenderer(onReset, onGenerate);
        }
        return (
            <React.Fragment>
                <Button style={{ marginRight: 10 }} onClick={onReset}>
                    重置
                </Button>
                <Button type="primary" onClick={onGenerate}>
                    生成
                </Button>
            </React.Fragment>
        );
    }, [footerRenderer, onReset, onGenerate]);

    return (
        <div
            style={{
                backgroundColor: '#fff',
                borderRadius: '2px',
                outline: 'none',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                width: 600,
                ...style,
            }}
        >
            <Tabs tabBarGutter={0} animated destroyInactiveTabPane activeKey={currentTab} onChange={setCurrentTab}>
                <TabPane tab={getTabTitle('秒')} key="1" style={tabPaneStyle}>
                    <SecondPane value={second} onChange={setSecond} />
                </TabPane>
                <TabPane tab={getTabTitle('分')} key="2" style={tabPaneStyle}>
                    <MinutePane value={minute} onChange={setMinute} />
                </TabPane>
                <TabPane tab={getTabTitle('时')} key="3" style={tabPaneStyle}>
                    <HourPane value={hour} onChange={setHour} />
                </TabPane>
                <TabPane tab={getTabTitle('日')} key="4" style={tabPaneStyle}>
                    <DayPane value={day} onChange={onChangeDay} />
                </TabPane>
                <TabPane tab={getTabTitle('月')} key="5" style={tabPaneStyle}>
                    <MonthPane value={month} onChange={setMonth} />
                </TabPane>
                <TabPane tab={getTabTitle('周')} key="6" style={tabPaneStyle}>
                    <WeekPane value={week} onChange={onChangeWeek} />
                </TabPane>
                <TabPane tab={getTabTitle('年')} key="7" style={tabPaneStyle}>
                    <YearPane value={year} onChange={setYear} />
                </TabPane>
            </Tabs>
            <div style={{ borderTop: '1px solid #e8e8e8', padding: 10, textAlign: 'right', ...footerStyle }}>
                {footerRendererWrapper()}
            </div>
        </div>
    );
}

export default Cron;
