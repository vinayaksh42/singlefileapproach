import { series, parallel } from 'gulp';
import { clean } from './utils/clean';
import { copy } from './utils/copy';
import { generateIconComponents } from './scripts/index'

export default series(
    clean(['src', 'svg','es','lib']),

    parallel(

        copy({
            from: ['node_modules/eos-icons/svg/*.svg'],
            toDir: 'src/svg/filled'
        }),

        copy({
            from: ['node_modules/eos-icons/svg/material/*.svg'],
            toDir: 'src/svg/filled'
        }),

        copy({
            from: ['node_modules/eos-icons/animated-svg/*.svg'],
            toDir: 'src/svg/animated'
        }),

        copy({
            from: ['node_modules/eos-icons/svg-outlined/*.svg'],
            toDir: 'src/svg/outlined'
        }),

        copy({
            from: ['node_modules/eos-icons/svg-outlined/material/*.svg'],
            toDir: 'src/svg/outlined'
        })
    ),
);