var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        app: ['./src/js/main.js']
    },
    output: {
        path: './dist/js',
        filename: 'bundle.js',
        //publicPath:
    },
    devServer: {

    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.less/,
                loader: 'style!css!less'
            },
            {
                test: /\.json/,
                loader: 'json'
            },
            {
                test: /\.html/,
                loader: 'raw'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']         //extensions 字段决定了以哪些后缀结尾的文件被当做模块来处理.可以使用require('index');来进行加载模块,但是设定这个字段值后会覆盖默认的值
        //default value   extensions: ['', '.js', '.web.js', '.webpack.js']
    },
    plugins: [

    ]
};
