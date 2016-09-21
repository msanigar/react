module.exports = {
	devtool: 'inline-source-map',
	entry: ['./client/client.js'],
	output: {
		path: './dist',
		filename: 'bundle.js',
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