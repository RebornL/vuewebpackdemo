var path = require('path');

// 定义文件的一些路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');//webpack需要打包处理的文件
var BUILD_PATH = path.resolve(ROOT_PATH, 'public');//webpack最终输出的文件


module.exports = {
	debug: true,
	entry: APP_PATH,//[APP_PATH+"/index.js",],
	output: {
		path: BUILD_PATH,
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.(png|jpg|eot|svg|ttf|woff)/,
				loader: 'url?limit=40000'
			}
		]
	}
}