let path = require('path');
let SRC_DIR = path.resolve(__dirname, './src');
let DIST_DIR = path.resolve(__dirname, './dist');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(DIST_DIR, 'app'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ]
    },
    watch: true,
};