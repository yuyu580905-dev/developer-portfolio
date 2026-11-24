# 松本 友介 | Webエンジニア ポートフォリオ

**技術で、課題を解決する。設計から実装、その先まで。**

Webアプリケーション開発を中心とした制作実績や、これまでの経験、技術への取り組みを紹介するポートフォリオサイトです。

## 🌐 Portfolio

**公開サイト：**
https://yuyu580905-dev.github.io/developer-portfolio/

## Overview

本ポートフォリオは、これまでの学習成果や制作実績、開発に対する考え方を紹介するために制作しました。

単に機能を実装するだけでなく、利用者の視点や業務上の課題を理解し、使いやすさ・保守性・品質を意識した開発を大切にしています。

メインプロジェクトとして、修理依頼・進捗管理システム「RepairFlow」を掲載しています。

## Features

- **Responsive Design**：PC・スマートフォンに対応したレスポンシブレイアウト
- **Mobile Navigation**：JavaScriptによるモバイルナビゲーション
- **Accessibility**：スキップリンク、キーボード操作、フォーカス表示への配慮
- **SEO**：ページタイトル、メタディスクリプション、canonical URLの設定
- **OGP**：SNSなどでのリンク共有時に表示される画像・説明文を設定
- **Structured Data**：JSON-LDによるWebSite・Person情報の構造化
- **Search Engine Support**：robots.txt・sitemap.xmlの設置

## Featured Project

### RepairFlow

修理依頼の受付から担当者の割り当て、進捗管理、対応履歴までを一元管理するWebアプリケーションです。

依頼者・技術者・管理者の3つの役割を設け、それぞれの業務に応じた機能とアクセス制御を実装しています。

**主な機能**

- 依頼者：修理依頼の登録、進捗確認、キャンセル申請
- 技術者：担当依頼の確認、対応状況の更新、作業履歴の記録
- 管理者：ユーザー管理、担当者の割り当て、キャンセル申請の審査

**技術的な工夫**

- Policyによる役割・所有者に応じた認可制御
- FormRequestによる入力検証と認可の責務整理
- トランザクション・行ロックによるデータ整合性の確保
- Feature Testによる業務ルールや権限制御の検証

**Links**

- [デモサイト](https://repairflow-app.onrender.com/login)
- [GitHubリポジトリ](https://github.com/yuyu580905-dev/RepairFlow-app)

デモ環境のログイン情報は、ポートフォリオサイトのRepairFlow紹介欄に記載しています。

## Tech Stack

### Portfolio Site

| Category    | Technology               |
| ----------- | ------------------------ |
| Markup      | HTML5                    |
| Styling     | CSS3                     |
| Programming | JavaScript（Vanilla JS） |
| Fonts       | Inter / Noto Sans JP     |
| Hosting     | GitHub Pages             |

### Featured Project: RepairFlow

| Category                | Technology                         |
| ----------------------- | ---------------------------------- |
| Backend                 | PHP 8.3 / Laravel 10               |
| Frontend                | HTML / Tailwind CSS 3 / JavaScript |
| Database                | MySQL 8.4                          |
| Authentication          | Laravel Fortify                    |
| Testing                 | PHPUnit                            |
| Development Environment | Docker / Laravel Sail / Vite       |
| Deployment              | Render                             |

## Project Structure

```text
developer-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── common/
│   │   ├── favicon.svg
│   │   └── ogp-image.png
│   └── works/
│       └── repairflow/
│           ├── admin-dashboard.png
│           ├── repair-request-details.png
│           ├── requester-dashboard.png
│           ├── user-create.png
│           └── user-edit.png
├── robots.txt
├── sitemap.xml
└── README.md
```

## Local Preview

このポートフォリオは静的サイトのため、ビルドコマンドやパッケージのインストールは不要です。

### 1. Clone

```bash
git clone https://github.com/yuyu580905-dev/developer-portfolio.git
```

### 2. Move to the project directory

```bash
cd developer-portfolio
```

### 3. Open in Browser

`index.html` をブラウザで開くことで表示を確認できます。

Visual Studio Codeを利用する場合は、Live Server拡張機能を使用してローカルサーバー上で確認することもできます。

## About

大学卒業後、会計事務所・製造業・食品メーカーで約17年間、幅広い実務を経験してきました。

これまでの業務で培った業務理解力や品質を大切にする姿勢を活かし、現在はPHP・Laravelを中心としたWebアプリケーション開発に取り組んでいます。

利用者の視点や業務ルールを理解し、保守性・セキュリティ・品質を意識したシステムを構築できるエンジニアを目指しています。

## Contact

- **Portfolio:** https://yuyu580905-dev.github.io/developer-portfolio/
- **GitHub:** https://github.com/yuyu580905-dev
- **Email:** yuyu580905@yahoo.co.jp

---

© 2026 Yusuke Matsumoto. All Rights Reserved.
