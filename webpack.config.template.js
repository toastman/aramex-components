module.exports = {
    entry: {
        app: './src/index.js'
        // header: './src/components/header/header.js'
    },
    output: {
        filename: './dist/[name].bundle.js',
        publicPath: '/'
    },
    externals: {
        'angular': 'angular'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['ng-annotate', 'babel?presets[]=es2015']
            },
            { test: /\.html$/, loader: 'html' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.(jpeg|gif|png).*/, loader: 'url?limit=15000&name=./dist/[name].[ext]'},
            { test: /\.(woff|woff2).*/, loader: 'url?limit=10000&mimetype=application/font-woff&name=./dist/[name].[ext]' },
            { test: /\.ttf.*/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=./dist/[name].[ext]' },
            { test: /\.(eot|otf).*/, loader: 'url?limit=10000&name=./dist/[name].[ext]' },
            { test: /\.svg.*/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=./dist/[name].[ext]' }
        ]
    }
}
