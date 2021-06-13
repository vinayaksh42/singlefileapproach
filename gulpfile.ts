import { series, parallel } from 'gulp';
import { clean } from './utils/clean';
import { copy } from './utils/copy';

export default series(
    clean(['src','svg','es','lib']),

    parallel(

        copy({
            from: ['node_modules/eos-icons/svg/*.svg'],
            toDir: 'svg/filled'
        }),

        copy({
            from: ['node_modules/eos-icons/svg/material/*.svg'],
            toDir: 'svg/filled'
        }),

        copy({
            from: ['node_modules/eos-icons/animated-svg/*.svg'],
            toDir: 'svg/animated'
        }),

        copy({
            from: ['node_modules/eos-icons/svg-outlined/*.svg'],
            toDir: 'svg/outlined'
        }),

        copy({
            from: ['node_modules/eos-icons/svg-outlined/material/*.svg'],
            toDir: 'svg/outlined'
        }),

        copy({
            from: ['utils/index.ts'],
            toDir: 'src/'
        }),
    ),
);