let path = require("path");
let SRC_DIR = path.resolve(__dirname, "./src");
let DIST_DIR = path.resolve(__dirname, "./dist");

module.exports = {
    mode: "production",
    entry: {
        main: ["./src/components/navbar/navbar.jsx", "./src/master.js"],
        index: ["./src/components/productGrid/cookieGrid.jsx",
            "./src/components/engagementCatalog/engagementCardCatalog.jsx",
            "./src/components/featuredProductBanner/featuredProductBanner.jsx",
            "./src/components/newsBanner/newsBanner.jsx", "./src/index.js"],
        products: ['./src/components/productsBanner/productsBanner.jsx', './src/products.js'],
        cookies: ['./src/components/productSlide/productContainer.jsx', "./src/components/productGrid/cookieGrid.jsx",
            './src/cookies.js'],
        collaboration: ['./src/components/collaborationBanner/collaborationBanner.jsx', './src/collaboration.js'],
        newsletter: ['./src/components/newsletter/newsletterForm.jsx', './src/newsletter.js'],
        contact: ['./src/components/contactForm/contactForm.jsx', './src/contact.js']
    },
    output: {
        path: path.join(DIST_DIR, "app"),
        filename: "[name].js"
    },
    // optimization: {
    //   splitChunks: {
    //       chunks: "all"
    //   }
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: SRC_DIR,
                options: {
                    plugins: ['transform-runtime'],
                    presets: ["react", "env"]
                }
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader",
                include: path.join(SRC_DIR, "components"),
                options: {
                    plugins: ['transform-runtime'],
                    presets: ["react", "env"]
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