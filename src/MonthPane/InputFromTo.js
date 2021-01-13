import React from 'react';
import { InputNumber } from 'antd';

function InputFromTo(props) {
    const { disabled, value, onChange } = props;
    let from = 0;
    let to = 0;
    if (!disabled) {
        [from, to] = value.split('-').map((v) => parseInt(v, 10));
    }
    const onChangeFrom = (v) => onChange(`${v || 0}-${to}`);
    const onChangeTo = (v) => onChange(`${from}-${v || 0}`);

    return (
        <React.Fragment>
            从&nbsp;
            <InputNumber
                disabled={disabled}
                min={1}
                max={12}
                value={from}
                size="small"
                onChange={onChangeFrom}
                style={{ width: 100 }}
            />
            &nbsp;-&nbsp;
            <InputNumber
                disabled={disabled}
                min={1}
                max={12}
                value={to}
                size="small"
                onChange={onChangeTo}
                style={{ width: 100 }}
            />
            &nbsp;月，每月执行一次
        </React.Fragment>
    );
}

export default InputFromTo;
