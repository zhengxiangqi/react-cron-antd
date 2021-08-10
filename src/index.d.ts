interface IProps {
    /**
     * Cron表达式，用来解析到UI
     */
    value?: string;
    /**
     * 样式
     */
    style?: React.CSSProperties;
    /**
     * 底部样式
     */
    footerStyle?: React.CSSProperties;
    /**
     * 底部栏渲染函数，用于自定义按钮
     */
    footerRenderer?: (onReset: () => void, onGenerate: () => void) => void;
    /**
     * 点击生成按钮时调用该回调
     */
    onOk?: (value: string) => void;
}

export default function Cron(props: IProps): React.ReactNode;
