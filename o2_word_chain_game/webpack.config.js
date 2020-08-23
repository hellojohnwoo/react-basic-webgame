const path = require('path');

module.exports = {
    name: 'WordChainGame-setting',
    mode: 'development', // When Starting to Service: production
    devtool: 'eval',
    resolve: {
        extensions: [ '.js', '.jsx' ]
    },

    entry: {                                        // input
        app: [ './client' ],
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1%'], // browserslist
                        },
                        debug: true,
                    }],
                    '@babel/preset-react',
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel',
                ],
            },
        }],
    },

    output: {                                       // output
        path: path.join(__dirname, 'dist'),         // C:\users\john\webstorm\react-basic-webgame\o2_...\dist
        filename: 'app.js',
        publicPath: '/dist/',                       // virtual path : app.user('/dist', express.static(__dirname, 'dist'))
    },
}