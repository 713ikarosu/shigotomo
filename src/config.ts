// サイト全体で共有する設定値。

// LINEオープンチャット（無料の学習コミュニティ）への参加URL。
// 申込導線は「LINE先行」：無料オープンチャットに参加 → 1:1で個別の無料面談
//  → 面談で合意した方のみ有料プランを案内（Stripe決済をもって正式申込）。
// この 1 箇所を差し替えれば ApplySection / Diagnosis 両方の導線に反映される。
// ⚠️ 本番 push（main マージ）前に、オープンチャット名「シゴトモ(仮)」のリネーム完了を確認すること
//  （リネームしてもこの招待URLは変わらない）。
export const LINE_OPENCHAT_URL = 'https://line.me/ti/g2/84jwRZp5VIP1i4JZUxphETlQ3bblEO5VihOBTg'
