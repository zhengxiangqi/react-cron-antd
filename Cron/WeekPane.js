import React, { useMemo} from 'react';
import { Radio, Checkbox, Row, Col, InputNumber } from 'antd';
import WeekSelect from './WeekSelect';

const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

const radioStyle = {
  display: 'block',
  // height: '30px',
  lineHeight: '30px',
};

const weekOptions = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function getValsFromValue(value = '') {
  let currentRadio = 2,
    from = 'SUN',
    to = 'MON',
    weekOfMonth = 1,
    dayOfWeek = 'MON',
    lastWeekOfMonth = 'MON',
    selected = ['MON'];

  if (value === '*') {
    currentRadio = 1;
  } else if (value === '?') {
    currentRadio = 2;
  } else if (value.indexOf('-') > -1) {
    currentRadio = 3;
    const [defaultFrom, defaultTo] = value.split('-');
    from = defaultFrom;
    to = defaultTo;
  } else if (value.indexOf('#') > -1) {
    currentRadio = 4;
    const [defaultDayOfWeek, defaultWeekOfMonth] = value.split('#');
    weekOfMonth = parseInt(defaultWeekOfMonth, 10);
    dayOfWeek = defaultDayOfWeek;
  } else if (value.indexOf('L') > -1) {
    currentRadio = 5;
    const [defaultLastWeekOfMonth] = value.split('L');
    lastWeekOfMonth = defaultLastWeekOfMonth;
  } else {
    currentRadio = 6;
    selected = value ? value.split(',') : ['MON'];
  }
  return {
    currentRadio,
    from,
    to,
    weekOfMonth,
    dayOfWeek,
    lastWeekOfMonth,
    selected,
  };
}

function WeekPane(props) {
  const { value, onChange } = props;
  const {
    currentRadio,
    from,
    to,
    weekOfMonth,
    dayOfWeek,
    lastWeekOfMonth,
    selected,
  } = getValsFromValue(value);

  const _onChange = (
    _currentRadio,
    _from,
    _to,
    _weekOfMonth,
    _dayOfWeek,
    _lastWeekOfMonth,
    _selected,
  ) => {
    switch (_currentRadio) {
      case 1:
        onChange('*');
        break;
      case 2:
        onChange('?');
        break;
      case 3:
        onChange(`${_from}-${_to}`);
        break;
      case 4:
        onChange(`${_dayOfWeek}#${_weekOfMonth}`);
        break;
      case 5:
        onChange(`${_lastWeekOfMonth}L`);
        break;
      case 6:
        onChange(_selected.join(','));
        break;
      default:
        break;
    }
  };

  const onChangeRadio = (e) => {
    _onChange(
      e.target.value,
      from,
      to,
      weekOfMonth,
      dayOfWeek,
      lastWeekOfMonth,
      selected,
    );
  };

  const onChangeFrom = (v) => {
    _onChange(
      currentRadio,
      v || 'MON',
      to,
      weekOfMonth,
      dayOfWeek,
      lastWeekOfMonth,
      selected,
    );
  };

  const onChangeTo = (v) => {
    _onChange(
      currentRadio,
      from,
      v || 'MON',
      weekOfMonth,
      dayOfWeek,
      lastWeekOfMonth,
      selected,
    );
  };

  const onChangeWeekOfMonth = (v) => {
    _onChange(
      currentRadio,
      from,
      to,
      v || 1,
      dayOfWeek,
      lastWeekOfMonth,
      selected,
    );
  };

  const onChangeDayOfWeek = (v) => {
    _onChange(
      currentRadio,
      from,
      to,
      weekOfMonth,
      v || 'MON',
      lastWeekOfMonth,
      selected,
    );
  };

  const onChangeLastWeekOfMonth = (v) => {
    _onChange(
      currentRadio,
      from,
      to,
      weekOfMonth,
      dayOfWeek,
      v || 'MON',
      selected,
    );
  };

  const onChangeSelected = (v) => {
    _onChange(
      currentRadio,
      from,
      to,
      weekOfMonth,
      dayOfWeek,
      lastWeekOfMonth,
      v.length !== 0 ? v : ['MON'],
    );
  };

  const checkList = useMemo(() => {
    const disabled = currentRadio !== 6;
    return weekOptions.map((item) => {
      return (
        <Col key={item} span={3}>
          <Checkbox disabled={disabled} value={item}>
            {item}
          </Checkbox>
        </Col>
      );
    });
  }, [currentRadio]);

  return (
    <RadioGroup name="radiogroup" value={currentRadio} onChange={onChangeRadio}>
      <Radio style={radioStyle} value={1}>
        每一周
      </Radio>

      <Radio style={radioStyle} value={2}>
        不指定
      </Radio>

      <Radio style={radioStyle} value={3}>
        从&nbsp;
        <WeekSelect
          disabled={currentRadio !== 3}
          value={from}
          size="small"
          onChange={onChangeFrom}
          style={{ width: 100 }}
        />
        &nbsp;-&nbsp;
        <WeekSelect
          disabled={currentRadio !== 3}
          value={to}
          size="small"
          onChange={onChangeTo}
          style={{ width: 100 }}
        />
        &nbsp;，每星期执行一次
      </Radio>

      <Radio style={radioStyle} value={4}>
        本月第&nbsp;
        <InputNumber
          disabled={currentRadio !== 4}
          min={0}
          max={23}
          value={weekOfMonth}
          size="small"
          onChange={onChangeWeekOfMonth}
          style={{ width: 100 }}
        />
        &nbsp;周的&nbsp;
        <WeekSelect
          disabled={currentRadio !== 4}
          value={dayOfWeek}
          size="small"
          onChange={onChangeDayOfWeek}
          style={{ width: 100 }}
        />
        &nbsp;执行一次
      </Radio>

      <Radio style={radioStyle} value={5}>
        本月的最后一个&nbsp;
        <WeekSelect
          disabled={currentRadio !== 5}
          value={lastWeekOfMonth}
          size="small"
          onChange={onChangeLastWeekOfMonth}
          style={{ width: 100 }}
        />
        &nbsp;执行一次
      </Radio>

      <Radio style={radioStyle} value={6}>
        指定
        <br />
        <CheckboxGroup
          value={selected}
          onChange={onChangeSelected}
          style={{ width: '100%' }}
        >
          <Row>{checkList}</Row>
        </CheckboxGroup>
      </Radio>
    </RadioGroup>
  );
}

export default WeekPane;
