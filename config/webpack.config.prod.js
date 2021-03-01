const path = require('path');

module.exports =  {

    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'js/prod.js',
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

            }
        ]
    }

}