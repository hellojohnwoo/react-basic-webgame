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
                presets:['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    output: {                                       // output
        path: path.join(__dirname, 'dist'),         // C:\users\john\webstorm\react-basic-webgame\o2_...\dist
        filename: 'app.js',
    },
}