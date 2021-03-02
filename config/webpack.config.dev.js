const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'js/dev.js',
        path: path.resolve(__dirname, '../', 'build')
    },
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, '../', 'public/assets'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_component)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template/template.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })

    ]
}