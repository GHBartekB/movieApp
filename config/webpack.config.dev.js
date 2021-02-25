const path = require('path');

module.exports = {

    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'js/dev.js',
        path: path.resolve(__dirname, '../', 'build')
    }
}