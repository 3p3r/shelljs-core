const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { ProvidePlugin, EnvironmentPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.CI ? 'production' : 'development',
  devtool: `${process.env.CI ? '' : 'inline-'}source-map`,
  entry: './index.ts',
  cache: false,
  plugins: [
    new CleanWebpackPlugin(),
    new EnvironmentPlugin({
      NODE_DEBUG: '',
    }),
    new ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: [require.resolve('./src/globals'), 'process'],
      console: [require.resolve('./src/globals'), 'console'],
    }),
    new CopyPlugin({
      patterns: [
        { from: 'README.md', to: 'README.md' },
        {
          from: 'package.json',
          to: 'package.json',
          transform(content) {
            const packageJson = JSON.parse(content.toString('utf8'));
            delete packageJson.scripts;
            delete packageJson.devDependencies;
            return Buffer.from(JSON.stringify(packageJson, null, 2));
          },
        },
      ],
    }),
  ],
  output: {
    library: {
      commonjs: 'shelljs-core',
      amd: 'shelljs-core',
      root: 'SHELLJS',
    },
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
    filename: 'index.js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env']],
            },
          },
          'ts-loader',
        ],
      },
    ],
  },
  resolve: {
    fallback: {
      util: require.resolve('util'),
      assert: require.resolve('assert'),
      buffer: require.resolve('buffer'),
    },
    alias: {
      os: require.resolve('./src/os'),
      fs: require.resolve('./src/fs'),
      path: require.resolve('./src/path'),
    },
  },
};
