const { resolve } = require('path');
const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'src/app.js'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'app.js',
        clean: true
    },
    devtool: "inline-nosources-source-map",
    target: ["web", "es6"],
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        watchOptions: {
            ignored: ["**/node_modules/"],
        },
        port: 3333,
        hot: true,
        inline: true,
    },
}