Étude Op. 10, No. 2 Chromatique
===================

# 目的 #
webpackを使ったNodeアプリケーションの開発

# 前提 #
| ソフトウェア   | バージョン   | 備考        |
|:---------------|:-------------|:------------|
| node           |7.3.0    |             |
| npm            |3.10.10  |             |
| yarn           |0.18.1   |             |
| vagrant        |1.8.7    |             |
| docker         |1.12.5    |             |
| docker-compose |1.8.0    |             |

# 構成 #
## アプリケーション環境構築
### Vagrantセットアップ
```
vagrant up
vagrant ssh
cd /vagrant/
```

### Installation
#### Global INstallation
```
npm install webpack@beta -g
```
#### Local Installation
```
npm install webpack@beta --save-dev

npm install webpack@<version> --save-dev
```

## アプリケーション開発
### Getting Started  
#### Creating a bundle
```
cd /vagrant/
npm init -y
npm install --save-dev webpack@beta
./node_modules/.bin/webpack --help
npm install --save lodash
```

```
cd /vagrant/
mkdir app
touch app/index.js
touch index.html
```

```
webpack app/index.js dist/bundle.js
```

#### Using webpack with a config
```
cd /vagrant/
touch webpack.config.js
```

```
webpack --config webpack.config.js
```

```
webpack
```

#### Using webpack with npm

```
npm run build
```

### Why webpack?
webpackは他のツール(Make,Grunt,Gulp)とくらべてモジュラーバンドラーという点で違いがある。

#### What Are Task Runners?
タスクランナーは開発プロジェクトの様々な作業を簡単にしてくれる。Browserifyやwebpack用のようなバンドラーとくらべてタスクランナーは高いレベルにフォーカスしている。一方バンドラーはより具体的なゴールにフォーカスしている。

#### What Are Bundlers?
大まかにいえば、バンドラーはJavaScriptファイルなどを取りまとめ、エンドユーザーがブラウザで取り扱うのに適した形に変換してくれます。この構築プロセスはweb開発における最も重要な問題であり、解決することでプロセスの苦痛の大半を取り除くことができます。

バンドラーはタスクランナーと一緒に使えます。構築の問題をバンドラーで解決する一方でタスクランナーの高レベルの恩恵を受けることができます。grunt-webpackやgulp-webpackはその良い例です。

### Development
#### Source Maps

#### webpack Watch Mode
```
webpack --progress --watch
```

```
npm i serve -g
serve
```

#### webpack-dev-server

```
npm i webpack-dev-server -g
npm install webpack-dev-server --save-dev
```
`webpack.config.js`にdevServerを追加する
`package.json`にスクリプトを追加する
```
npm start
```
`http://192.168.30.1:3000/webpack-dev-server/`で動作を確認する

#### webpack-dev-middleware

```
npm install express webpack-dev-middleware --save-dev
```
`web.js`を追加する
```
node web.js
```
`http://192.168.30.1:3000`で動作を確認する

### Code Splitting - CSS

#### Using css-loaders
```
npm install css-loader --save-dev
```

#### Using extract-text-webpack-plugin - ExtractTextPlugin
```
npm i --save-dev extract-text-webpack-plugin
```

#### Using sass-loaders
```
npm install node-sass sass-loader --save-dev
```

#### Using babel-loader
```
npm install babel-loader babel-core babel-preset-es2015 webpack --save-dev
```

#### Bundle image
```
npm install --save-dev file-loader url-loader
```

## アプリケーション配置

# 参照 #
+ [Getting Started](https://webpack.js.org/get-started/)
+ [Development](https://webpack.js.org/guides/development/)
+ [Code Splitting - CSS](https://webpack.js.org/guides/code-splitting-css/)
+ [css loader for webpack](https://github.com/webpack/css-loader)
+ [extract text plugin for webpack 2](https://github.com/webpack/extract-text-webpack-plugin)
+ [Sass loader for webpack](https://github.com/jtangelder/sass-loader)
+ [BABEL](https://github.com/babel/babel)
+ [babel-loader](https://github.com/babel/babel-loader)
