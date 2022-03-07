const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const WebpackObfuscator = require('webpack-obfuscator');
const BrotliPlugin  = require ('brotli-webpack-plugin') ; 
const TerserPlugin = require('terser-webpack-plugin');



const webpackMode = process.env.NODE_ENV


const setPlugins = () => {
    const plugins = [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        // new BundleAnalyzerPlugin(),
    ]

    if (webpackMode === 'production') {
        plugins.push(
            new BrotliPlugin({
                asset: '[path].br[query]',
                test: /\.(js|css|html|svg)$/,
                threshold: 10240,
                minRatio: 0.8
            })
        )
    }

    return plugins;
}


const setRules = () => {
    const rules = [
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', { targets: "defaults" }]
                    ],
                    plugins: ['@babel/plugin-transform-runtime']
                }
            }
        }
    ]

    if (webpackMode === 'production') {
        rules.push(
            {
                test: /\.js$/,
                exclude: [],
                enforce: 'post',
                use: {
                    loader: WebpackObfuscator.loader,
                    options: {
                        rotateStringArray: true
                    }
                }
            }
        )
    }

    return rules;
}

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new TerserPlugin({
                parallel: true
            })
        ]
    },
    plugins: setPlugins(),
    module: {
        rules: setRules()
    },
    devServer:{
        open: true,
        hot: webpackMode === 'development',
        port: 8080
    }
}

