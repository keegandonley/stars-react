import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
	input: 'src/index.ts',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			exports: 'named',
			sourcemap: true,
		},
	],
	external: ['react'],
	plugins: [
		eslint({
			include: ['src/**/*.ts', 'src/**/*.tsx'],
		}),
		external(),
		postcss({
			modules: true,
		}),
		resolve({
			extensions: ['.ts', '.tsx'],
		}),
		typescript({
			rollupCommonJSResolveHack: true,
			clean: true,
		}),
		terser(),
	],
};
