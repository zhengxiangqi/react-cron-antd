import React, { useMemo } from 'react';
import { Radio, Checkbox, Row, Col, InputNumber } from 'antd';

const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

const radioStyle = {
  display: 'block',
  // height: '30px',
  lineHeight: '30px',
};

function getValsFromValue(value = '') {
  let currentRadio = 1,
    from = 1,
    to = 10,
    offsetFrom = 1,
    offset = 1,
    selected = ['1'];
  if (value === '*') {
    currentRadio = 1;
  } else if (value.indexOf('-') > -1) {
    currentRadio = 2;
    const [defaultFrom, defaultTo] = value.split('-');
    from = parseInt(defaultFrom, 10);
    to = parseInt(defaultTo, 10);
  } else if (value.indexOf('/') > -1) {
    currentRadio = 3;
    const [defaultOffsetFrom, defaultOffset] = value.split('/');
    offsetFrom = parseInt(defaultOffsetFrom, 10);
    offset = parseInt(defaultOffset, 10);
  } else {
    currentRadio = 4;
    selected = value ? value.split(',') : ['1'];
  }

  return {
    currentRadio,
    from,
    to,
    offsetFrom,
    offset,
    selected,
  };
}

function MonthPane(props) {
  const { value, onChange } = props;
  const {
    currentRadio,
    from,
    to,
    offsetFrom,
    offset,
    selected,
  } = getValsFromValue(value);

  const _onChange = (
    _currentRadio,
    _from,
    _to,
    _offsetFrom,
    _offset,
    _selected,
  ) => {
    switch (_currentRadio) {
      case 1:
        onChange('*');
        break;
      case 10:
        onChange('?');
        break;
      case 2:
        onChange(`${_from}-${_to}`);
        break;
      case 3:
        onChange(`${_offsetFrom}/${_offset}`);
        break;
      case 4:
        onChange(_selected.join(','));
        break;
      default:
        break;
    }
  };

  const onChangeRadio = (e) => {
    _onChange(e.target.value, from, to, offsetFrom, offset, selected);
  };

  const onChangeFrom = (v) => {
    _onChange(currentRadio, v || 1, to, offsetFrom, offset, selected);
  };

  const onChangeTo = (v) => {
    _onChange(currentRadio, from, v || 1, offsetFrom, offset, selected);
  };

  const onChangeOffsetFrom = (v) => {
    _onChange(currentRadio, from, to, v || 1, offset, selected);
  };

  const onChangeOffset = (v) => {
    _onChange(currentRadio, from, to, offsetFrom, v || 1, selected);
  };

  const onChangeSelected = (v) => {
    _onChange(
      currentRadio,
      from,
      to,
      offsetFrom,
      offset,
      v.length !== 0 ? v : ['1'],
    );
  };

  const checkList = useMemo(() => {
    const disabled = currentRadio !== 4;
    const checks = [];
    for (let i = 1; i < 13; i++) {
      checks.push(
        <Col key={i} span={4}>
          <Checkbox disabled={disabled} value={i.toString()}>
            {i}
          </Checkbox>
        </Col>,
      );
    }
    return checks;
  }, [currentRadio]);

  return (
    <RadioGroup name="radiogroup" value={currentRadio} onChange={onChangeRadio}>
      <Radio style={radioStyle} value={1}>
        每一月
      </Radio>
      <Radio style={radioStyle} value={10}>
        不指定
      </Radio>
      <Radio style={radioStyle} value={2}>
        从&nbsp;
        <InputNumber
          disabled={currentRadio !== 2}
          min={1}
          max={12}
          value={from}
          size="small"
          onChange={onChangeFrom}
          style={{ width: 100 }}
        />
        &nbsp;-&nbsp;
        <InputNumber
          disabled={currentRadio !== 2}
          min={1}
          max={12}
          value={to}
          size="small"
          onChange={onChangeTo}
          style={{ width: 100 }}
        />
        &nbsp;月，每月执行一次
      </Radio>

      <Radio style={radioStyle} value={3}>
        从&nbsp;
        <InputNumber
          disabled={currentRadio !== 3}
          min={1}
          max={12}
          value={offsetFrom}
          size="small"
          onChange={onChangeOffsetFrom}
          style={{ width: 100 }}
        />
        &nbsp;月开始， 每&nbsp;
        <InputNumber
          disabled={currentRadio !== 3}
          min={1}
          max={12}
          value={offset}
          size="small"
          onChange={onChangeOffset}
          style={{ width: 100 }}
        />
        &nbsp;月执行一次
      </Radio>

      <Radio style={radioStyle} value={4}>
        指定
        <br />
        <CheckboxGroup value={selected} onChange={onChangeSelected}>
          <Row>{checkList}</Row>
        </CheckboxGroup>
      </Radio>
    </RadioGroup>
  );
}

export default MonthPane;
