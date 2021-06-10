import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external'

export default [
    {
        input: 'src/icon/index.js',
        output: [
            {
                file: 'src/index.js',
                format: 'cjs'
            },
            {
                file: 'src/index.es.js',
                format: 'es',
                exports: 'named',
            }
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            external(),
            resolve()
        ]
    }
]