// サイト全体で共有する設定値。

// LINEオープンチャット（無料の学習コミュニティ）への参加URL。
// 申込導線は「LINE先行」：無料オープンチャットに参加 → 1:1で個別の無料面談
//  → 面談で合意した方のみ有料プランを案内（Stripe決済をもって正式申込）。
// 未発行：まさるがオープンチャットを作成・参加URLを発行したら、この 1 箇所を差し替えれば
//  ApplySection / Diagnosis 両方の導線に反映される。
// プレースホルダ '#line-coming-soon' は 404 にならない無害アンカー。
// ⚠️ 本番 push 前に必ず実URL（オープンチャット参加URL: https://line.me/ti/g2/... 等）へ差し替えること。
export const LINE_OPENCHAT_URL = '#line-coming-soon'
