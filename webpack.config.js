const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = [{
    mode: 'development',
    entry: './src/electron.ts',
    target: 'electron-main',
    devtool: 'source-map',
    output: {
        filename: 'electron.js',
        path: __dirname + '/dist/'
    },
    node: {
        __dirname: false,
        __filename: false
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [{ loader: 'ts-loader' }]
        }]
    }
}, {
    mode: 'development',
    entry: './src/react.tsx',
    target: 'electron-renderer',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.css', '.scss']
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist/'
    },
    node: {
        __dirname: false,
        __filename: false
    },
    module: {
        rules: [{
            test: /\.tsx$/,
            exclude: /node_modules/,
            use: [{ loader: 'ts-loader' }]
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                { loader: "style-loader" },
                { loader: "css-modules-typescript-loader" },
                { loader: "css-loader", options: { modules: true } },
                { loader: "sass-loader" }
            ]
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|jpeg)/,
            exclude: /node_modules/,
            use: [
                'file-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'bundle.html'
        })
    ]
}]