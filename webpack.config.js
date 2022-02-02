const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// mode: process.env.NODE_ENV

module.exports = {
    mode: 'development',
    entry: ['./client/index.js'],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build'),
            publicPath: 'build'
        },
        proxy: { //localhost:8080/socket.io
            '/socket.io': {
                target: 'http://127.0.0.1:3000',
                ws: true,
            },
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '/client/index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            },
            {
                test: /.css/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            }
        ], 
    }
}