import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const articles = (await getCollection('journal', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  )

  return rss({
    title: 'シゴトモジャーナル',
    description:
      '「勉強が続かない」を根性ではなく仕組みで解決するための読みもの。社会人の学習継続・習慣化のヒントを届けます。',
    site: context.site!,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishDate,
      link: `/journal/${article.id}/`,
    })),
    customData: '<language>ja</language>',
  })
}
