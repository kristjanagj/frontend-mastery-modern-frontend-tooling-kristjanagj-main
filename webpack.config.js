// // const path = require("path");
// import path from 'path';
// // const HtmlWebpackPlugin = require('html-webpack-plugin');
// import HtmlWebpackPlugin from 'html-webpack-plugin';

// // eslint-disable-next-line no-undef
// module.exports = {
    
//     output: {
//         // eslint-disable-next-line no-undef
//         path: path.resolve(__dirname, "build"),
//         filename: "[contenthash].bundle.js",
//     },
//     plugins: [new HtmlWebpackPlugin({
//             // eslint-disable-next-line no-undef
//             template: path.join(__dirname, "public", "index.html")
//         })],
//     mode: "development",
//     // eslint-disable-next-line no-undef
//     entry: path.join(__dirname, "src/index.tsx"),
//     devServer: {
//         port: 3000,
//     },
//     module: {
//         rules: [
//         {
//             test: /\.m?js|jsx$/,
//             exclude: /(node_modules|bower_components)/,
//             use: {
//                 loader: 'babel-loader',
//                 options: { // our code will be compatible with Internet Explorer 11
//                 presets: ["@babel/preset-react", ["@babel/preset-env", { "targets":   "IE 11" }]]
//                 }
//             }  
//         },
//         {
//             test: /\.tsx?$/,
//             use: 'ts-loader',
//             exclude: /node_modules/,
//         }
//         ]
//     }
// }

// const reactPlugin = require('eslint-plugin-react');


const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {   
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[contenthash].bundle.js",
    },
    plugins: [new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html")
    })],
    mode: "development",
    entry: path.join(__dirname, "src/index.tsx"),
    devServer: {
        port: 3000,
    },
    module: {
        rules: [
        {
            test: /\.m?js|jsx$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: { // our code will be compatible with Internet Explorer 11
                presets: ["@babel/preset-react", ["@babel/preset-env", { "targets":   "IE 11" }]]
                }
            }
        },             
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        ]
    }
}

