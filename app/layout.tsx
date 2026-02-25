import type { Metadata } from 'next'
import { Noto_Serif_JP, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSerif = Noto_Serif_JP({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const notoSans = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shigotomo.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'シゴトモ｜忙しい社会人のための学習伴走サービス',
    template: '%s｜シゴトモ',
  },
  description:
    '資格取得・リスキリングを続けたい社会人向けの伴走型学習支援サービス。勉強内容は教えません。学習計画・習慣化・進捗管理を設計し、「今日やること」が毎日決まっている状態をつくります。月額2,980円・少人数制。',
  keywords: [
    'シゴトモ',
    '伴走型学習支援',
    'リスキリング',
    '社会人 学び直し',
    '資格取得 サポート',
    '学習習慣化',
    '学習計画',
    '勉強 続かない',
    '社会人 勉強',
  ],
  authors: [{ name: 'シゴトモ' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName: 'シゴトモ',
    title: 'シゴトモ｜忙しい社会人のための学習伴走サービス',
    description:
      '資格取得・リスキリングを続けたい社会人向けの伴走型学習支援サービス。勉強内容は教えません。学習計画・習慣化・進捗管理を設計します。',
    images: [
      {
        url: '/og-image.png',
        width: 2816,
        height: 1536,
        alt: 'シゴトモ - 明日の仕事に、伴がいる',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'シゴトモ｜忙しい社会人のための学習伴走サービス',
    description:
      '資格取得・リスキリングを続けたい社会人向けの伴走型学習支援サービス。学習計画・習慣化・進捗管理を設計します。',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${notoSerif.variable} ${notoSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
