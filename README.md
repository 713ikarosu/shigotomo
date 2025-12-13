# シゴトモ - 伴走型教育支援サービス LP

> 「明日の仕事に、伴がいる」

社会人の学び直しを支援する伴走型教育支援サービス「シゴトモ」のランディングページです。

[![Next.js](https://img.shields.io/badge/Next.js-15.5.9-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-pink)](https://www.framer.com/motion/)

## ✨ 特徴

- **和モダンデザイン**: 日本の伝統色（藍・墨・朱）を使った落ち着いたデザイン
- **縦書きタイポグラフィ**: ヒーローセクションでの日本的な演出
- **完全レスポンシブ**: モバイルファーストで全デバイスに最適化
- **スムーズなアニメーション**: Framer Motionによる洗練されたインタラクション
- **アクセシビリティ対応**: ARIA属性とセマンティックHTML
- **パフォーマンス最適化**: Next.js 15の最新機能を活用

## 🎨 デザインコンセプト

**「静かな信頼 × 和の余白」**

- **色彩**: 深い藍色、墨黒、紙白、朱色のアクセント
- **タイポグラフィ**: Noto Serif JP × Noto Sans JP
- **レイアウト**: 大胆な余白と和紙のようなテクスチャ
- **アニメーション**: 控えめで上品な動き

## 🚀 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: CSS Modules
- **アニメーション**: Framer Motion
- **フォント**: Google Fonts (Noto Serif JP, Noto Sans JP)
- **デプロイ**: Vercel

## 📦 インストール

```bash
# リポジトリのクローン
git clone <repository-url>
cd shigotomo

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは [http://localhost:3000](http://localhost:3000) で起動します。

## 📁 プロジェクト構成

```
shigotomo/
├── app/
│   ├── components/          # Reactコンポーネント
│   │   ├── Navigation.tsx   # ナビゲーション (モバイルメニュー付き)
│   │   ├── Hero.tsx         # ヒーローセクション (縦書き)
│   │   ├── Service.tsx      # サービス紹介
│   │   ├── Plan.tsx         # 料金プラン
│   │   ├── FlowAndFAQ.tsx   # 利用の流れ・FAQ
│   │   ├── ApplySection.tsx # お申し込みセクション
│   │   ├── ApplicationForm.tsx # 登録フォームモーダル
│   │   └── Footer.tsx       # フッター
│   ├── layout.tsx           # ルートレイアウト
│   ├── page.tsx             # トップページ
│   └── globals.css          # グローバルスタイル
├── public/                  # 静的ファイル
├── next.config.ts           # Next.js設定
├── tsconfig.json            # TypeScript設定
└── package.json             # 依存関係
```

## 🎯 主要セクション

### 1. ナビゲーション
- デスクトップ: ホリゾンタルメニュー
- モバイル: ハンバーガーメニュー (アニメーション付き)

### 2. ヒーロー
- 縦書きキャッチコピー「明日の仕事に、伴がいる」
- レスポンシブで横書きに自動切り替え
- Framer Motionによる文字アニメーション

### 3. サービス紹介
- 4つの特徴カード
- ホバーエフェクト
- スクロールアニメーション

### 4. 料金プラン
- ライトプラン詳細
- 人数制限の明示
- 将来プランの予告

### 5. 利用の流れ
- 5ステップのフロー
- 視覚的な矢印ガイド

### 6. FAQ
- アコーディオン式
- クリックで開閉

### 7. お申し込み
- モーダル式登録フォーム
- バリデーション対応
- iOS zoom防止対応

## 📱 レスポンシブ対応

### ブレークポイント

- **デスクトップ**: 769px以上
- **タブレット**: 768px以下
- **モバイル**: 480px以下

### モバイル最適化

- ハンバーガーメニュー
- タッチフレンドリーなボタンサイズ (最低 44×44px)
- フルワイドCTAボタン
- iOSズーム防止 (input font-size: 16px)
- 縦書きから横書きへの自動切り替え

## 🎨 カラーパレット

```css
--color-sumi: #1a1a1a;      /* 墨黒 */
--color-ai: #1e3a5f;        /* 藍 */
--color-ai-deep: #0f2540;   /* 深藍 */
--color-shiro: #fafaf8;     /* 紙白 */
--color-shu: #c8423d;       /* 朱 */
--color-kinari: #f5f3ed;    /* 生成り */
--color-usuzumi: #63666a;   /* 薄墨 */
```

## 🛠️ 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクション起動
npm run start

# 型チェック
npm run type-check
```

## 🚀 デプロイ

### Vercelへのデプロイ

1. [Vercel](https://vercel.com) にログイン
2. 「New Project」をクリック
3. Gitリポジトリをインポート
4. 自動検出された設定で「Deploy」

または、Vercel CLIを使用:

```bash
npm install -g vercel
vercel
```

## 📝 カスタマイズ

### コンテンツの変更

各コンポーネントファイル内のテキストやデータを直接編集できます。

例: 料金プランの変更
```tsx
// app/components/Plan.tsx
const features = [
  { title: '新しい機能', desc: '説明文' },
  // ... 追加の機能
]
```

### スタイルの変更

CSS Modulesを使用しているため、各コンポーネントのスタイルは独立しています。

```css
/* app/components/Hero.module.css */
.hero {
  /* スタイルをここで変更 */
}
```

### グローバル変数の変更

```css
/* app/globals.css */
:root {
  --color-ai: #your-color;
  --space-lg: 5rem;
}
```

## 🔧 今後の拡張予定

- [ ] プレミアムプラン表示の追加
- [ ] ブログ・お知らせセクション
- [ ] お客様の声セクション
- [ ] Google Analytics統合
- [ ] Google Forms API連携
- [ ] SEO最適化 (メタタグ、構造化データ)
- [ ] OGP画像の設定
- [ ] PWA対応

## 📄 ライセンス

このプロジェクトは非公開です。

## 🤝 貢献

このプロジェクトは現在プライベートです。

## 📞 お問い合わせ

シゴトモに関するお問い合わせは、お申し込みフォームよりご連絡ください。

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
