const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-cheap-module-source-map',
    entry: {
        app: './index.jsx',
    },
    context: path.resolve(__dirname, 'static_src'),
    output: {
        path: path.resolve(__dirname, 'static', 'build'),
        filename: 'app.js',
    },
    watch: process.argv[process.argv.length - 1] === 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, 'node_modules/react-spring'),
                    path.resolve(__dirname, 'static_src'),
                ],
                loader: 'babel-loader',
                // exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/env',
                        '@babel/react',
                        {
                            'plugins': ['@babel/plugin-proposal-class-properties']
                        }
                    ]
                }
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({ grid: true }),
                            ]
                        }
                    },
                ],
            },
        ],
    },
    resolve: {
        modules: [`${__dirname}/static_src`, 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: 'index.html'
        }
    },
};