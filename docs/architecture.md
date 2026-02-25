# 技術構成・アーキテクチャ

## 技術スタック

| カテゴリ | 技術 | バージョン |
|---------|------|----------|
| フレームワーク | Next.js (App Router) | ^15.1.0 |
| 言語 | TypeScript | ^5 |
| UI ライブラリ | React | ^19.0.0 |
| アニメーション | Framer Motion | ^11.15.0 |
| スタイリング | CSS Modules | - |
| フォント | Google Fonts (Noto Serif JP / Noto Sans JP) | - |
| デプロイ | Vercel | - |

---

## ディレクトリ構成

```
shigotomo/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx / .module.css     # ナビゲーション（モバイルメニュー付き）
│   │   ├── Hero.tsx / .module.css           # ヒーローセクション（縦書き）
│   │   ├── Service.tsx / .module.css        # サービス紹介（4つの特徴カード）
│   │   ├── Plan.tsx / .module.css           # 料金プラン
│   │   ├── FlowAndFAQ.tsx / .module.css     # 利用の流れ・FAQ（アコーディオン）
│   │   ├── ApplySection.tsx / .module.css   # お申し込みセクション
│   │   ├── ApplicationForm.tsx / .module.css # 登録フォームモーダル
│   │   └── Footer.tsx / .module.css         # フッター
│   ├── globals.css     # グローバルスタイル・CSS変数
│   ├── layout.tsx      # ルートレイアウト
│   └── page.tsx        # トップページ
├── public/             # 静的ファイル
├── docs/               # プロジェクトドキュメント
├── index.html          # 静的HTML版（初期プロトタイプ）
├── styles.css          # 静的HTML版CSS（初期プロトタイプ）
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## ページセクション構成

| セクション | コンポーネント | 主な内容 |
|-----------|--------------|---------|
| ナビゲーション | `Navigation.tsx` | ロゴ・メニュー・モバイルハンバーガー |
| ヒーロー | `Hero.tsx` | 縦書きキャッチコピー・CTAボタン |
| サービス紹介 | `Service.tsx` | 4つの特徴カード・ホバーエフェクト |
| 料金プラン | `Plan.tsx` | ライトプラン詳細・人数制限表示 |
| 利用の流れ・FAQ | `FlowAndFAQ.tsx` | 5ステップフロー・アコーディオンFAQ |
| お申し込み | `ApplySection.tsx` | CTAボタン・モーダル起動 |
| 登録フォーム | `ApplicationForm.tsx` | モーダル式フォーム・バリデーション |
| フッター | `Footer.tsx` | コピーライト・リンク |

---

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクション起動
npm run start

# Lintチェック
npm run lint
```

---

## デプロイ方法

### Vercel（推奨）

1. [Vercel](https://vercel.com) にログイン
2. Gitリポジトリをインポート
3. 自動検出された設定で「Deploy」

```bash
# Vercel CLI を使う場合
npx vercel
```

---

## 外部連携

| サービス | 用途 | 状態 |
|---------|------|------|
| Google Forms | 申し込みフォーム | 初期は手動連携 |
| Google Analytics | アクセス解析 | 未実装（予定） |
| Vercel | ホスティング | 利用中 |
