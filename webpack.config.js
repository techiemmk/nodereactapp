var path = require('path');
module.exports = {
    mode: "development",
    entry: [path.resolve(__dirname, './src/index.js')],
    output: {
        path: path.resolve(__dirname, './static'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname,'./node_modules')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                },
            }
        ],
    }
}