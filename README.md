<div align="center">
    <h1>ReactCron</h1>
    <div>基于React及Antd的cron时间表达式生成器</div>
    <br/>
    <img width=700 src="./snapshot.png" alt="效果图" />
</div>


### 特性
- 🎉 全面支持cron：秒、分、时、日、月、周、年
- 🎉 日及周条件互斥，自动改变响应值
- 🎉 支持反解析cron表达式到UI
- 🎉 可结合此组件与Antd的下拉及输入组件封装成下拉输入框


### 使用
```jsx
import React from 'react';
import Cron from 'react-cron-antd';

function Page() {
    return <Cron value="* * * * * ? *" onOk={(value) => {console.log('cron:', value);}} />;
}

export default Page;
```


### 扩展
封装一个用于表单组件的CronInput。

```jsx
import React from 'react';
import { Dropdown, Input } from 'antd';
import Cron from 'react-cron-antd';

function CronInput(props) {
    const { value, onChange } = props;

    return (
        <Dropdown
            trigger={['click']}
            placement="bottomLeft"
            overlay={<Cron onOk={onChange} value={value} />}
        >
            <Input.Search value={value} />
        </Dropdown>
    );
}

export default CronInput;
```


### 更新日志
- [点击查看更新日志](./CHANGELOG.md)


### LICENSE
MIT
