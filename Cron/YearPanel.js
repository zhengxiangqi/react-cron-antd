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
  let currentRadio,
    from = 2020,
    to = 2020,
    offsetFrom = 2021,
    offset = 1,
    selected = ['2020'];

  if (value === '*') {
    currentRadio = 1;
  } else if (value === '') {
    currentRadio = 2;
  } else if (value.indexOf('-') > -1) {
    currentRadio = 3;
    const [defaultFrom, defaultTo] = value.split('-');
    from = parseInt(defaultFrom, 10);
    to = parseInt(defaultTo, 10);
  } else if (value.indexOf('/') > -1) {
    currentRadio = 4;
    const [defaultOffsetFrom, defaultOffset] = value.split('/');
    offsetFrom = parseInt(defaultOffsetFrom, 10);
    offset = parseInt(defaultOffset, 10);
  } else {
    currentRadio = 5;
    selected = value ? value.split(',') : ['2020'];
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

function YearPane(props) {
  const { value, onChange } = props;

  const vals = getValsFromValue(value);
  // const [currentRadio, setCurrentRadio] = useState(vals.currentRadio);
  // const [from, setFrom] = useState(vals.from);
  // const [to, setTo] = useState(vals.to);
  // const [offsetFrom, setOffsetFrom] = useState(vals.offsetFrom);
  // const [offset, setOffset] = useState(vals.offset);
  // const [selected, setSelected] = useState(vals.selected);

  const { currentRadio, from, to, offsetFrom, offset, selected } = vals;

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
      case 2:
        onChange('');
        break;
      case 3:
        onChange(`${_from}-${_to}`);
        break;
      case 4:
        onChange(`${_offsetFrom}/${_offset}`);
        break;
      case 5:
        onChange(_selected.join(','));
        break;
      default:
        break;
    }
  };

  const onChangeRadio = (e) => {
    console.log('onChangeRadio', e.target.value);
    _onChange(e.target.value, from, to, offsetFrom, offset, selected);
  };

  const onChangeFrom = (v) => {
    _onChange(currentRadio, v || 2020, to, offsetFrom, offset, selected);
  };

  const onChangeTo = (v) => {
    _onChange(currentRadio, from, v || 2021, offsetFrom, offset, selected);
  };

  const onChangeOffsetFrom = (v) => {
    _onChange(currentRadio, from, to, v || 2020, offset, selected);
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
      v.length !== 0 ? v : ['2019'],
    );
  };

  const checkList = useMemo(() => {
    const disabled = currentRadio !== 5;
    const checks = [];
    for (let i = 2020; i < 2068; i++) {
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
        每年
      </Radio>

      <Radio style={radioStyle} value={2}>
        不指定
      </Radio>

      <Radio style={radioStyle} value={3}>
        从&nbsp;
        <InputNumber
          disabled={currentRadio !== 3}
          min={2019}
          max={2099}
          value={from}
          size="small"
          onChange={onChangeFrom}
          style={{ width: 100 }}
        />
        &nbsp;-&nbsp;
        <InputNumber
          disabled={currentRadio !== 3}
          min={2019}
          max={2099}
          value={to}
          size="small"
          onChange={onChangeTo}
          style={{ width: 100 }}
        />
        &nbsp;年，每年执行一次
      </Radio>

      <Radio style={radioStyle} value={4}>
        从&nbsp;
        <InputNumber
          disabled={currentRadio !== 4}
          min={2019}
          max={2099}
          value={offsetFrom}
          size="small"
          onChange={onChangeOffsetFrom}
          style={{ width: 100 }}
        />
        &nbsp;年开始， 每&nbsp;
        <InputNumber
          disabled={currentRadio !== 4}
          min={1}
          max={10}
          value={offset}
          size="small"
          onChange={onChangeOffset}
          style={{ width: 100 }}
        />
        &nbsp;年执行一次
      </Radio>

      <Radio style={radioStyle} value={5}>
        指定
        <br />
        <CheckboxGroup value={selected} onChange={onChangeSelected}>
          <Row> {checkList}</Row>
        </CheckboxGroup>
      </Radio>
    </RadioGroup>
  );
}

export default YearPane;
