# CLAUDE.md — シゴトモ プロジェクトガイド

## プロジェクト概要

**シゴトモ** は「伴走型教育支援サービス」のランディングページ。
社会人向けの学習習慣化・進捗管理サービスを訴求し、ライトプランへの申し込みを促す。

- キャッチコピー：「明日の仕事に、伴（とも）がいる」
- デザインコンセプト：「静かな信頼 × 和の余白」（和モダン・藍・墨・朱）

詳細ドキュメント → [`docs/`](./docs/) ディレクトリ参照

---

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **アニメーション**: Framer Motion
- **スタイリング**: CSS Modules
- **デプロイ**: Vercel

---

## ディレクトリ構成

```
app/
├── components/     # Reactコンポーネント（各セクション）
├── globals.css     # CSS変数・グローバルスタイル
├── layout.tsx      # ルートレイアウト
└── page.tsx        # トップページ
docs/               # プロジェクトドキュメント
```

コンポーネント一覧 → [`docs/architecture.md`](./docs/architecture.md)

---

## 開発コマンド

```bash
npm run dev      # 開発サーバー起動（http://localhost:3000）
npm run build    # プロダクションビルド
npm run start    # プロダクション起動
npm run lint     # Lintチェック
```

---

## デザインルール

- CSS変数は `app/globals.css` で一元管理（`--color-ai`, `--color-shu` 等）
- カラーパレット・ブレークポイント → [`docs/design.md`](./docs/design.md)
- モバイル対応必須：`input { font-size: 16px }` でiOSズーム防止

---

## ドキュメント一覧

| ファイル | 内容 |
|---------|------|
| [`docs/overview.md`](./docs/overview.md) | サービス概要・目的・ターゲット |
| [`docs/service-plans.md`](./docs/service-plans.md) | ライトプラン・プレミアムプラン仕様 |
| [`docs/persona.md`](./docs/persona.md) | ターゲットペルソナ詳細 |
| [`docs/design.md`](./docs/design.md) | デザインシステム・カラー・タイポグラフィ |
| [`docs/architecture.md`](./docs/architecture.md) | 技術構成・コンポーネント構成 |

---

## 重要な注意事項

- 現在ローンチしているのは**ライトプランのみ**。プレミアムプランは構想段階
- 人数制限（15〜20名）は LP 上に明示する重要な要素
- ライトプランは「問題解説・添削・毎日フィードバック・電話/ビデオ通話」は対象外
- 決済・会員管理は当初は外部ツールで対応（実装不要）
- `index.html` / `styles.css` は初期の静的プロトタイプ（参考資料として残存）
