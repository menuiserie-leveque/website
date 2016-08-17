module.exports = {
    entry: {
        menuiserie: './src/Resources/assets/js/menuiserie.js'
    },
    output: {
        path: './src/Resources/public',
        filename: '[name].js',
        publicPath: ''
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: "style!css",
            },
            {
                test:   /\.(png|gif|jpe?g|svg?(\?v=[0-9]\.[0-9]\.[0-9])?)$/i,
                loader: 'url?limit=10000',
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: "file"
            }
        ]
    }
};
