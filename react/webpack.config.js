const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production'

const htmlPlugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, 'public', 'index.html'),
    minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
    }
});

const stylePlugin = new ExtractTextPlugin({filename: "styles.css"})

const config = {
    entry: './src/index.tsx',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/"
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.ts||\.tsx?$/,
                use: 'ts-loader',
                exclude: [
                    /node_modules/,
                    /public/
                ]
            },

            {
                enforce: "pre", test: /\.js$/, loader: "source-map-loader"
            },

            {
                test: /\.scss$/,
                use: stylePlugin.extract({
					use: [ 'css-loader', 'postcss-loader', 'sass-loader' ]
				})
            },

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 3030,
        historyApiFallback: true

    },
    plugins: [htmlPlugin, stylePlugin]
}

devMode === 'production' ?
    config
        .plugins
        .push(new webpack.DefinePlugin({
            'process.env': { 'NODE_ENV': JSON.stringify(devMode) }
        }),
            new webpack.optimize.UglifyJsPlugin()
        )
    : devMode

module.exports = config