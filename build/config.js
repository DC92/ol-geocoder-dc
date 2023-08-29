import node from '@rollup/plugin-node-resolve';
import cjs from '@rollup/plugin-commonjs'; // Convert CommonJS module into ES module
import css from 'rollup-plugin-import-css'; // Collect css
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser'; // Rollup plugin to minify generated es bundle
import {
	readFileSync, // Read banner file
} from 'fs';

const banner = readFileSync('./build/banner.js', 'utf-8');

export default [{
	// Compressed library
	input: 'build/index.js',
	plugins: [
		node(),
		cjs(),
		css({
			output: 'ol-geocoder.css',
		}),
		json(),
		terser(),
	],
	output: [{
		name: 'Geocoder',
		banner,
		file: 'dist/ol-geocoder.js',
		format: 'umd',
		sourcemap: true,
	}],
}, {
	// Debug library
	input: 'build/index.js',
	plugins: [
		node(),
		cjs(),
		css({
			output: 'ol-geocoder.css',
		}),
		json(),
	],
	output: [{
		name: 'Geocoder',
		banner,
		file: 'dist/ol-geocoder-debug.js',
		format: 'iife',
	}],
}];