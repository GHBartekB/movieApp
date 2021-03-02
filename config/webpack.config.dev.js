const path = require('path');

module.exports = {

    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'js/dev.js',
        path: path.resolve(__dirname, '../', 'build')
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
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}