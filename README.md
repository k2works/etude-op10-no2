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
### Why webpack?

## アプリケーション配置

# 参照 #
+ [webpack](https://webpack.js.org/get-started/)
