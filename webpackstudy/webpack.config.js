const path = require('path');
// const webpack = require('webpack'); //配置文件热更新第二步
const htmlWebpack = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname,'./src/main.js'),
	output: {
		path: path.join(__dirname,'./dist'),
		filename: 'bundle.js'
	},
	// devServer: {
	// 	open:true,
	// 	port:3000,
	// 	contentBase:'src',
	// 	hot:true //配置文件热更新第一步
	// },
	plugins: [
		// new webpack.HotModuleReplacementPlugin() //配置文件热更新第三步
		new htmlWebpack({
			template: path.join(__dirname,'./src/index.html'),
			filename: 'index.html'
		})
	],
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
		]
	}
}