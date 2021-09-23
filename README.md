# portfolio-nuxt

GitHub や Qiita の活動状況を一括で確認できるポートフォリオサイト

## 詳細

Qiita の RESTAPI で Qiita の投稿情報を，GitHub の GraphQLAPI で GitHub のリポジトリ・アクティビティ・アカウント情報を取得し，表示しています．
Nuxt.js を用いて SSG 化しており，また，GitHub Actions を用いることで定期ビルド&デプロイを自動化しています．

## 起動方法

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## 使用した技術

- Vue.js
- Nuxt.js
- TailwindCSS
- TypeScript
- GraphQL
- Apollo
- GitHub Actions
