var path = require('path');
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
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    __dirname+"/node_modules"
                ],
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"]
                },
            }
        ],
    }
}