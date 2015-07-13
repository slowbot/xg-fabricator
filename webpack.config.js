var path = require('path');
var webpack = require('webpack');

module.exports = function(fabricatorConfig) {

	"use strict";

	var config = {
		entry: {
			'fabricator/scripts/f': fabricatorConfig.src.scripts.fabricator,
			'toolkit/scripts/toolkit': fabricatorConfig.src.scripts.toolkit,
		},
		output: {
			path: path.resolve(__dirname, fabricatorConfig.dest, 'assets'),
			filename: '[name].js'
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loaders: ['babel-loader']
				}
			]
		},
		plugins: [],
		resolve: {
			modulesDirectories: ['node_modules', 'bower_components']
		},
		cache: {}
	};

	if (!fabricatorConfig.dev) {
		config.plugins.push(
			new webpack.optimize.UglifyJsPlugin()
		);
	}
	
	return config;

};
