Étude Op. 10, No. 2 Chromatique
===================

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# 目的 #
webpackを使ったNodeアプリケーションの開発基盤構築

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
1. [構築](#構築)
1. [配置](#配置)
1. [開発](#開発)

## 構築
### 開発環境
```bash
vagrant up
vagrant ssh
```

### npmパッケージセットアップ
```bash
cd /vagrant
npm init -y
```

#### Express
```bash
npm install express-generator -g
express -e .
npm install
npm start
```

#### webpack
```bash
npm install webpack@beta --save
npm install webpack-dev-server --save-dev
npm install webpack-dev-middleware --save-dev
```

##### Using css-loaders
```bash
npm install css-loader --save
```

##### Using extract-text-webpack-plugin - ExtractTextPlugin
```bash
npm install extract-text-webpack-plugin@2.0.0-rc.3 --save
```

##### Using sass-loaders
```bash
npm install node-sass sass-loader --save
```

##### Using babel-loader
```bash
npm install babel-loader babel-core babel-preset-es2015 --save
```

##### Bundle image
```bash
npm install file-loader url-loader --save
```

#### Building for Production
```bash
npm install webpack-manifest-plugin --save
```
npmスクリプトを追加
```bash
npm run build
```

`http://127.0.0.0:3000`で動作を確認する

**[⬆ back to top](#構成)**

## 配置
```bash
npm install babel-cli --save
npm install babel-preset-es2015 --save
npm install clean-webpack-plugin --save
```

ビルドした内容をコミットしてHerokuにデプロイする
```bash
heroku create op10-no2
git push heroku master
heroku run npm run build
```

**[⬆ back to top](#構成)**

## 開発
### アプリケーション
```bash
npm install --save-dev lodash
```
### テスト
```bash
npm install mocha --save-dev
```

```bash
npm install power-assert babel-plugin-espower --save
npm install babel-plugin-transform-flow-strip-types --save
```

`.babelrc`を追加

testを追加して動作を確認
```bash
npm test
```

**[⬆ back to top](#構成)**

# 参照 #
