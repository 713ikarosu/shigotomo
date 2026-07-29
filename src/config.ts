// サイト全体で共有する設定値。

// LINEオープンチャット（無料の学習コミュニティ）への参加URL。
// 申込導線は「LINE先行」：無料オープンチャットに参加 → 1:1で個別の無料面談
//  → 面談で合意した方のみ有料プランを案内（Stripe決済をもって正式申込）。
// この 1 箇所を差し替えれば ApplySection / Diagnosis 両方の導線に反映される。
// ⚠️ 本番 push（main マージ）前に、オープンチャット名「シゴトモ(仮)」のリネーム完了を確認すること
//  （リネームしてもこの招待URLは変わらない）。
export const LINE_OPENCHAT_URL = 'https://line.me/ti/g2/84jwRZp5VIP1i4JZUxphETlQ3bblEO5VihOBTg'

// 募集受け入れ状態フラグ。
// false の間は、申込・LINEオープンチャット参加への各種CTA（Hero / Navigation /
// ApplySection / Plan / Diagnosis 結果画面）を非表示にし、停止告知に差し替える。
// 再開時は true に戻すだけで全CTAが復活する。
export const RECRUITING_OPEN = false
