import React from 'react';
import { InputNumber } from 'antd';

function InputFromInterval(props) {
    const { disabled, value, onChange } = props;
    let from = 0;
    let interval = 0;
    if (!disabled) {
        [from, interval] = value.split('/').map((v) => parseInt(v, 10));
    }
    const onChangeFrom = (v) => onChange(`${v || 0}/${interval}`);
    const onChangeInterval = (v) => onChange(`${from}/${v || 0}`);

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
            &nbsp;月开始， 每&nbsp;
            <InputNumber
                disabled={disabled}
                min={1}
                max={12}
                value={interval}
                size="small"
                onChange={onChangeInterval}
                style={{ width: 100 }}
            />
            &nbsp;月执行一次
        </React.Fragment>
    );
}

export default InputFromInterval;
