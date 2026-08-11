// CF_PAGES_BRANCH は Cloudflare Pages がビルド時に注入する。
// 本番（main のビルド）とローカル本番ビルドでは draft を隠し、
// ブランチの Preview デプロイと dev サーバーでは draft も表示する。
const branch = process.env.CF_PAGES_BRANCH
export const showDrafts = import.meta.env.DEV || (branch !== undefined && branch !== 'main')
