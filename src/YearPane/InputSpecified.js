import React, { useMemo } from 'react';
import { Checkbox, Row, Col } from 'antd';

function InputSpecified(props) {
    const { disabled, value, onChange } = props;
    const currentYear = new Date().getUTCFullYear();
    let selected = [];
    if (!disabled) {
        selected = value.split(',').map((v) => parseInt(v, 10));
    }
    const onChangeSelected = (v) => onChange(v.length === 0 ? `${currentYear}` : v.join(','));

    const checkList = useMemo(() => {
        const checks = [];
        for (let i = currentYear - 6; i < currentYear + 48; i++) {
            checks.push(
                <Col key={i} span={4}>
                    <Checkbox disabled={disabled} value={i}>
                        {i}
                    </Checkbox>
                </Col>,
            );
        }
        return checks;
    }, [disabled]);

    return (
        <React.Fragment>
            指定
            <br />
            <Checkbox.Group style={{ width: '100%' }} value={selected} onChange={onChangeSelected}>
                <Row>{checkList}</Row>
            </Checkbox.Group>
        </React.Fragment>
    );
}

export default InputSpecified;
