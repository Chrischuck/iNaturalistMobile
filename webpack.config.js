const HtmlWebPackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});
module.exports = {
  entry: {
    vendor: ['@babel/polyfill', 'react', 'react-dom'],
    client:     './src/index.js',

  },
  output: {
    path: __dirname + '../dist',
    filename: '[name].chunkhash.bundle.js',
    chunkFilename: '[name].chunkhash.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { test: /\.eot/, loader: 'url-loader?mimetype=application/vnd.ms-fontobject' },
      { test: /\.ttf/, loader: 'url-loader?mimetype=application/x-font-ttf' },
      { test: /\.woff/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2/, loader: 'url-loader?mimetype=application/font-woff2' },
      { test: /\.svg$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      { test: /\.ico$/, loader: "url-loader?limit=100000" },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
       {
        test: /\.scss$/,
        use: [
            "style-loader", 
            "css-loader", 
            "sass-loader"
        ]
      }
     ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    htmlWebpackPlugin,
    //new BundleAnalyzerPlugin()
  ]
};