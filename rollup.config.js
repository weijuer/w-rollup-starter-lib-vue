import json from '@rollup/plugin-json'
import VuePlugin from 'rollup-plugin-vue'
import postcssPlugin from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
    input: 'src/index.js',
    external: ['vue'],
    output: [
        {
            file: pkg.browser,
            name: 'myLib',
            format: 'umd',
            globals: {
                vue: 'Vue'
            }
        },
        {
            file: pkg.module,
            format: 'esm',
        },
        {
            file: pkg.main,
            format: 'cjs',
        },
    ],
    plugins: [
        json(),
        VuePlugin({
            css: false
        }),
        postcssPlugin({
            plugins: [autoprefixer(), cssnano()],
            extract: 'index.css'
        }),
        terser()
    ],
}