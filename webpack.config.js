
module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" },
            { test: /\.scss$/, loader: "style!css!autoprefixer!sass" }
        ]
    }
};