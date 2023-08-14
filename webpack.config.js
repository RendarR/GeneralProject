const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    output: {
        filename: 'src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
              },
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                use: ['file-loader']
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }
        ),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/assets/img", to: "src/assets/img"
                }
            ]
        },),
        new VueLoaderPlugin(),
    ],
}