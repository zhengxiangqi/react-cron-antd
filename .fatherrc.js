import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
    entry: 'src/index.js',
    target: 'browser',
    esm: 'babel',
    cjs: 'babel',
    autoprefixer: {
        overrideBrowserslist: ['ie > 8', 'Safari >= 6'],
    },
    cssModules: true,
    runtimeHelpers: true,
    extraBabelPlugins: [
        [
            'babel-plugin-import',
            {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true,
            },
        ],
    ],
    extraRollupPlugins: [commonjs(), nodeResolve()],
};
