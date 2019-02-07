import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";

export default {
	input: 'src/useInterval.jsx',
	output: {
		file: 'dist/index.js',
		format: 'cjs'
	},
	plugins: [
    	resolve(),
    	babel({
      		exclude: 'node_modules/**'
		}),
		terser(),
	],
	external: ['react']
};
