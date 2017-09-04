var path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'client/client.js'),
    output: {
        path: path.resolve(__dirname, 'client'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015','es2016']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};