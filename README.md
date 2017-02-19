Étude Op. 10, No. 2 Chromatique
===================

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
npm install webpack@beta --save-dev
npm install webpack-dev-server --save-dev
npm install webpack-dev-middleware --save-dev

```

##### Using css-loaders
```bash
npm install css-loader --save-dev
```

##### Using extract-text-webpack-plugin - ExtractTextPlugin
```bash
npm install extract-text-webpack-plugin@2.0.0-rc.3 --save-dev
```

##### Using sass-loaders
```bash
npm install node-sass sass-loader --save-dev
```

##### Using babel-loader
```bash
npm install babel-loader babel-core babel-preset-es2015 --save-dev
```

##### Bundle image
```bash
npm install --save-dev file-loader url-loader
```

#### Building for Production
```bash
npm install --save-dev webpack-manifest-plugin
```
npmスクリプトを追加
```bash
npm run build
```

`http://127.0.0.0:3000`で動作を確認する

**[⬆ back to top](#構成)**

## 配置
**[⬆ back to top](#構成)**

## 開発
**[⬆ back to top](#構成)**

# 参照 #