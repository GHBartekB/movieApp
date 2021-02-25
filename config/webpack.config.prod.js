const path = require('path');

module.exports =  {

    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'js/prod.js',
        path: path.resolve(__dirname, '../', 'build')
    }

}