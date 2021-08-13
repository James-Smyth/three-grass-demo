import { string } from "rollup-plugin-string";
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
	input:'src/index.js',
	output:{
		file:'dist/bundle.js',
		format:'iife'
	},
	plugins: [
		string({
			include: "**/*.glsl"
		}),
		nodeResolve()
	]
};
