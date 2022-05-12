var path = require('path');
<<<<<<< HEAD
var webpack = require('webpack');
var fs = require('fs');

var nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
    entry: './server.js',
    target: 'node',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    externals: nodeModules,
=======
module.exports = {
    mode: "development",
    entry: [path.resolve(__dirname, './src/index.js')],
    output: {
        path: path.resolve(__dirname, './static'),
        filename: 'bundle.js'
    },
>>>>>>> f22e0b8634ccaaa478370d9771f9e5a5db228115
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
<<<<<<< HEAD
                    __dirname+"/node_modules"
                ],
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"]
=======
                    path.resolve(__dirname,'./node_modules')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
>>>>>>> f22e0b8634ccaaa478370d9771f9e5a5db228115
                },
            }
        ],
    }
}