module.exports = {
    // entry specifies the start point for webpack,
    // this is where it starts to crawl your repository
    // to build a dependency graph to know
    // what it should and shouldn’t include in your bundle
    entry: './src/index.js',
    output: {
        path: __dirname + '/public', // __dirname - is the current directory name
        publicPath: '/',
        filename: 'bundle.js', // filename - will be your bundle name
    }
}
