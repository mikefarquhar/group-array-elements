const path = require("path");

module.exports = {
	entry: "./src/lib.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "group-array-elements.js",
		library: "groupArrayElements",
		libraryExport: "default",
		libraryTarget: "umd",
		globalObject: "this",
	},
	mode: "production",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
		],
	},
};
