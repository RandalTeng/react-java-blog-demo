const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets/js'),
        publicPath: "/assets/"
    },
    module: {
        rules: [
            {test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
            {test: /\.html$/, use: "html-loader"}
        ]
    },
    // 监听文件状态，自动编译
    //watch: false,
    //watchOptions: {
    //    aggregateTimeout: 3000,
    //    ignored: /node_modules/,
    //    poll: 30000
    //}
};