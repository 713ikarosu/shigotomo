# パフォーマンス最適化プラン

> 計測日: 2026-03-28
> Lighthouse スコア（モバイル）: Performance 17 / Accessibility 89 / Best Practices 96 / SEO 92

---

## 現状の主要指標

| 指標 | 計測値 | 目標値 |
|------|--------|--------|
| LCP | 38.3s | < 2.5s |
| FCP | 3.4s | < 1.8s |
| TTI | 49.7s | < 5.0s |
| TBT | 270ms | < 200ms |
| CLS | 0 | 0（達成済み）|

---

## 優先度別 改善タスク

### 🔴 最優先（LCP: 38.3s → 目標 2.5s 以内）

#### 1. hero.png の画像最適化（最重要）

**問題:**
- ファイルサイズ: 7,331,252 bytes（7.3MB・PNG）
- WebP/AVIF 未使用（推定削減: 6,467 KiB）
- LCP 要素として CSS `background-image` を使用しているため、HTML の初期パース時に発見できない（`fetchpriority=high` が効かない）

**対応方針:**

**Step 1: 画像を WebP/AVIF に変換・リサイズ**
```bash
# squoosh CLI or sharp で変換
npx @squoosh/cli --webp '{"quality":82}' public/hero.png
# → public/hero.webp（目標: 300〜500KB）

# AVIF も生成（より高圧縮）
npx @squoosh/cli --avif '{"quality":60}' public/hero.png
# → public/hero.avif（目標: 150〜250KB）
```

**Step 2: CSS background-image → `<picture>` 要素へ変更**

CSS の `background-image` はブラウザがプリロードできないため LCP が遅れる。
Hero コンポーネントの実装を変更し、`<picture>` + `<img>` で背景画像を再現する。

```tsx
// Hero.tsx 変更案
<section className={styles.hero}>
  <picture className={styles.heroBackground}>
    <source srcSet="/hero.avif" type="image/avif" />
    <source srcSet="/hero.webp" type="image/webp" />
    <img
      src="/hero.png"
      alt=""
      fetchPriority="high"
      decoding="async"
      className={styles.heroBgImage}
    />
  </picture>
  <div className={styles.heroOverlay} />
  {/* 既存コンテンツ */}
</section>
```

```css
/* Hero.module.css 変更案 */
.hero {
    position: relative;
    /* background-image を削除 */
}

.heroBackground {
    position: absolute;
    inset: 0;
    z-index: 0;
}

.heroBgImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.heroOverlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to right,
        rgba(10, 20, 40, 0.75) 0%,
        rgba(10, 20, 40, 0.55) 50%,
        rgba(10, 20, 40, 0.2) 100%
    );
    z-index: 1;
}
```

> `fetchPriority="high"` を付けることでブラウザが最優先で取得する。
> また `<link rel="preload">` も追加すると効果的（layout.tsx の `<head>` で設定）。

**Step 3: preload link を layout.tsx に追加**
```tsx
// layout.tsx の <head> 内
<link
  rel="preload"
  as="image"
  href="/hero.avif"
  type="image/avif"
/>
```

---

#### 2. icon.png の最適化

**問題:**
- ファイルサイズ: 4,206,000 bytes（4.2MB）- favicon には過剰なサイズ

**対応方針:**
```bash
# 192×192 または 512×512 px にリサイズして PNG 最適化
# または SVG ベースのファビコンに変更

# app/icon.png を差し替え（Next.js が自動で favicon として使用）
# 目標: 10KB 以下
```

---

### 🟡 中優先（FCP: 3.4s → 目標 1.8s）

#### 3. レンダーブロッキング CSS の削減

**問題:**
- 4つの CSS ファイルがレンダーをブロック（推定: 330ms の FCP 改善余地）

**対応方針:**
- Next.js はデフォルトで CSS を最適化するが、Google Fonts（Noto Serif JP / Noto Sans JP）の読み込みがブロッキングになっている可能性がある
- `layout.tsx` の Font 設定で `display: 'swap'` は設定済み（適切）
- 追加で `preconnect` を確認:

```tsx
// layout.tsx に追加（Next.js の font/google は自動で preconnect を入れるが念のため確認）
```

- **代替案**: Noto フォントをローカルホスト（`next/font/local`）に変更してネットワーク依存を排除

---

### 🟢 低優先（アクセシビリティ・軽微な改善）

#### 4. 見出し階層の修正（h4 の孤立）

**問題:**
- h4 要素が h2/h3 なしで出現している（アクセシビリティ違反）

**対応方針:**
- 該当コンポーネントを特定し、h4 → h3 に変更、または親要素に h2/h3 を追加
- 確認コマンド: `grep -rn "h4" app/components/`

#### 5. レガシー JavaScript の削減

**問題:**
- `255-cb395327542b56ef.js` に古い構文（推定: 11KB 削減可能）

**対応方針:**
- `next.config.js` で `browserslist` を現代ブラウザのみに絞る（Next.js はデフォルトで対応済みのはずだが設定を確認）

---

## 実装順序（推奨）

```
Phase 1（最大効果）:
  1. hero.webp / hero.avif 生成
  2. Hero.tsx を <picture> + fetchPriority="high" に変更
  3. layout.tsx に preload link 追加

Phase 2（画像最適化続き）:
  4. icon.png を軽量化

Phase 3（FCP 改善）:
  5. Google Fonts の preconnect / ローカル化検討

Phase 4（細かい修正）:
  6. 見出し階層の修正
```

---

## 期待効果

| 対応 | 推定改善 |
|------|---------|
| hero 画像 WebP + LCP 発見修正 | LCP: 38s → 3s 以内 |
| icon.png 軽量化 | 総転送量 -4MB |
| WebP/AVIF 変換 | 総転送量 -6.4MB |
| フォント最適化 | FCP -300ms 程度 |

**合計目標: LCP 2.5s / FCP 1.8s / Lighthouse Performance 80+**
