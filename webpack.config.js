var path = require('path');
 
module.exports = {
    mode: 'production',
    entry: './src/useInterval.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
	},
	externals: {
		react: {          
			commonjs: "react",          
			commonjs2: "react",          
			amd: "React",          
			root: "React"      
		} 
	}
}