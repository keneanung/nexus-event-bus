const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const WebpackAutoInject = require('webpack-auto-inject-version-next');
const configData = require('./config.js');

module.exports = {
  entry: './webpack/webpack.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'nxs'),
    library : {
      type: "global",
      name: configData.libraryName,
      export: "default"
    }
  },
  plugins: [
    new ESLintPlugin({
      extensions: [ '.tsx', '.ts', '.js', '.jsx' ]
    }),
    new WebpackAutoInject({
      components: {
          AutoIncreaseVersion: false,
          InjectAsComment: false,
      }
  })
  ],
};