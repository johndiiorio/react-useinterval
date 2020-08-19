import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/index.tsx',
	output: {
		dir: './dist',
		format: 'cjs',
		exports: 'auto',
	},
	plugins: [
		typescript(),
		terser(),
	],
	external: ['react'],
};
