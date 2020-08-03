const path = require("path")
const webpackNodeExternals = require("webpack-node-externals")

module.exports = {
    // target 用於描述使用何種環境編譯程式碼，例如以下的範例便是使用 node.js 的環境編譯程式碼。
    // 其他環境還有 web、electron等，如果想知道更多 target 的配置選項
    target: "node",
    entry: "./src/index.jsx",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    resolve: {
        extensions: ['.jsx', '.js', 'json']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: require.resolve("babel-loader"),
                exclude: /node_modules/,
                options: {
                    presets: [require.resolve("@babel/preset-react")],
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            }
        ]
    },
    //👉 externals 用於能夠從 bundle 中排除相依套件，表示相依套件會額外載入到執行的環境中，
    // 這個參數能夠縮減 bundle 的檔案大小。
    // 在以下的設定檔中用的 webpack-node-externals 就是不要把 node_modules 整包都加入 bundle。
    externals: [webpackNodeExternals()]
}
