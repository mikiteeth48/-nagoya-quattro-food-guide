# 名古屋クアトロ前 食事・昼飲みガイド

GitHub Pages向けの静的Webページです。営業時間は土日祝基準で、店舗データは `shops.js` にあります。

## 公開方法
1. このディレクトリ全体を新しいGitHubリポジトリのルートに置く（`index.html` 単独では動作しません）
2. GitHub → Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main` / `/ (root)`
5. Save

## 構成
- `index.html`、`shops.js`、`app.js` で動作
- Leaflet + OpenStreetMapをCDN利用
- 店舗30件のカード一覧
- カテゴリフィルター
- 店名・名物検索
- 店舗ピン
- アーバンクア（S）と名古屋クラブクアトロ（G）の位置表示

## Codexへ引き継ぐ場合
このリポジトリをCodexで開き、`shops.js` の `verifiedAt` と `source` を確認して更新してください。営業時間は臨時変更があり得るため、来店前にも店舗情報を確認してください。

## ローカル確認

```bash
node --test
python3 -m http.server 8000
```
