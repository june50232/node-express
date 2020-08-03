const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path');
module.exports = {

    // entry specifies the start point for webpack,
    // this is where it starts to crawl your repository
    // to build a dependency graph to know
    // what it should and shouldn’t include in your bundle
    entry: './src/client/components/index.jsx',
    output: {
        path: path.join(__dirname, 'dist'), // __dirname - is the current directory name
        //publicPath: '/',
        filename: '[name].bundle.js', // filename - will be your bundle name
    },

    // we need to convert jsx files into js files for the browser to understand
    // webpack only understands js and json files so we need to update how webpack looks for jsx files
    // so we changed the resolve property
    resolve: {
        extensions: ['.jsx', '.js', 'json']
    },

    // We have added module/rules section, modules are where loaders are specified
    // Loaders have two “required” properties, test & use/loader
    module: {
        rules: [
            {
                // test is used to identify the files the specific loader should transform,
                // in case above babel-loader should look at jsx files and compile/transform them,
                // it should also use @babel/preset-react for its defaults.
                test: /\.jsx?$/,

                // Now that webpack can find the jsx files we need a loader to compile/transform it to js,
                // that is babel-loader job.
                loader: require.resolve("babel-loader"),

                // frontend 可能會用到 node_modules 中的套件 (像是 const 這種變數在 browser 支援度不一的問題)，所以還是要加入 node_modules 目錄。(以下僅排除一些較大、常用的套件，以加速開發啟動速度)
                exclude: [
                    // 以下超過 500KB
                    path.resolve(__dirname, 'node_modules/react-dom/cjs/react-dom.development.js'),
                    // path.resolve(__dirname, 'node_modules/lodash/lodash.js'),
                    // path.resolve(__dirname, 'node_modules/react-icons/io/index.js'),
                    // path.resolve(__dirname, 'node_modules/pdfjs-dist/build/pdf.js'),
                    // path.resolve(__dirname, 'node_modules/pdfjs-dist/build/pdf.worker.js'),

                    // 其它 (應該不需要 compile 的)
                    path.resolve(__dirname, 'node_modules/react-dom/index.js'),
                    // path.resolve(__dirname, 'node_modules/react-hot-loader/dist/react-hot-loader.development.js'),
                    // path.resolve(__dirname, 'node_modules/react-hot-loader/index.js'),
                    // path.resolve(__dirname, 'node_modules/react-hot-loader/patch.js'),
                ],

                // options for the plugin
                options: {
                    presets: [require.resolve("@babel/preset-react")],
                }
            }, {
                // webpack needs two additional components for processing HTML:
                // html-webpack-plugin and html-loader.
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}
