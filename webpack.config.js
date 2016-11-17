module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'./src/js/app.js'
	],
	output: {
		path: require("path").resolve("./build"),
		filename: 'js/app.js',
		publicPath: '/'
	},
	module: {
		loaders: [{
			test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
            	presets: ['react', 'es2015']
            }
		}]
	},
	plugins: [
	],
    watch: true
};