let path = require("path");
let SRC_DIR = path.resolve(__dirname, "./src");
let DIST_DIR = path.resolve(__dirname, "./dist");

module.exports = {
    mode: "production",
    entry: {
        main: "./src/app.js",
        rmain: ["./src/components/cartSidebar.jsx"],
        rindex: ["./src/components/catalog.jsx", "./src/components/cardCatalog.jsx", "./src/components/cardCatalogItem.jsx"]
    },
    output: {
        path: path.join(DIST_DIR, "app"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: SRC_DIR,
                options: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader",
                include: path.join(SRC_DIR, "components"),
                options: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/"
                        }
                    }
                ]
            },
            {
                test: require.resolve("jquery"),
                use: [
                    {
                        loader: "expose-loader",
                        options: "jQuery"
                    },
                    {
                        loader: "expose-loader",
                        options: "$"
                    }
                ]
            }
        ]
    }, watch: true
};