module.exports = {
    devtool: 'inline-source-map',
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        filename: "./dist/app.js"
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /node-modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.ts$/,
                exclude: /node-modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
}
