import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Diagnosis.module.css'
import { LINE_OPENCHAT_URL } from '../config'

// 申込導線は「LINE先行」。無料コミュニティ（オープンチャット）参加URLは src/config.ts に集約。
const LINE_URL = LINE_OPENCHAT_URL

type TypeKey = 'overload' | 'notime' | 'threedays' | 'tsundoku'

interface Option {
  label: string
  type: TypeKey | null // null = 共通設問（加点なし）
}

interface Question {
  q: string
  options: Option[]
}

const QUESTIONS: Question[] = [
  {
    q: '勉強を始めるとき、まずやりがちなのは？',
    options: [
      { label: '完璧な計画と分厚い参考書をそろえる', type: 'overload' },
      { label: 'とりあえず始める（でも数日で止まる）', type: 'threedays' },
      { label: '参考書を買うと、なぜか満足してしまう', type: 'tsundoku' },
      { label: '時間がなくて、そもそも手をつけられない', type: 'notime' },
    ],
  },
  {
    q: '平日、自分の勉強に使える時間は？',
    options: [
      { label: 'ほとんど取れない（仕事・家庭で手一杯）', type: 'notime' },
      { label: '30分はあるが、疲れて頭が回らない', type: 'notime' },
      { label: '1時間くらいは作れるはず', type: 'threedays' },
      { label: '平日は無理。休日にまとめてやろうとする', type: 'threedays' },
    ],
  },
  {
    q: '過去に勉強が続かなかった、一番の原因は？',
    options: [
      { label: '計画が細かすぎて、崩れたら立て直せなかった', type: 'overload' },
      { label: '最初だけ気合が入って、失速した', type: 'threedays' },
      { label: '教材は買ったが、開かないまま終わった', type: 'tsundoku' },
      { label: '仕事や生活が忙しく、フェードアウトした', type: 'notime' },
    ],
  },
  {
    q: '学習計画は、誰がどう立てている？',
    options: [
      { label: '自分でガッチリ立てる（そして守れない）', type: 'overload' },
      { label: 'そもそも立て方がわからない', type: 'tsundoku' },
      { label: '立てずに、なんとなく始める', type: 'threedays' },
      { label: '立てる時間も気力も残っていない', type: 'notime' },
    ],
  },
  {
    q: '睡眠は足りている？',
    options: [
      { label: '慢性的に寝不足だ', type: 'notime' },
      { label: '日によってバラバラ', type: 'notime' },
      { label: 'だいたい足りている', type: null },
    ],
  },
  {
    q: 'もし「今日これだけやればOK」が毎朝決まっていたら？',
    options: [
      { label: 'すごく助かる。決めること自体が一番しんどい', type: null },
      { label: '一人だと結局やらない気がする', type: 'threedays' },
      { label: '量さえ自分に合えば、続けられる気がする', type: 'overload' },
    ],
  },
]

interface ResultData {
  name: string
  catch: string
  body: string
  prescription: string
}

const RESULTS: Record<TypeKey, ResultData> = {
  overload: {
    name: '計画 過積載タイプ',
    catch: '完璧な計画を立てて、その重さに自分で潰れてきた。',
    body: 'あなたには計画を立てる力がある。むしろ、立てすぎる。理想の分量で組むから、1日崩れると全部が破綻して、立て直す気力が尽きる。足りないのは計画力じゃない。「今日はこれだけでいい」と削ったうえで、毎日となりで走る人です。',
    prescription: 'テキストを1ページだけ開く。解かなくていい。読むだけでOK。',
  },
  notime: {
    name: '時間ぎゅうぎゅうタイプ',
    catch: 'やる気の問題じゃない。1日のキャパが、もう埋まっているだけ。',
    body: '残業・睡眠不足・生活で、勉強の前にもう体力が残っていない。ここで「気合」を足すと潰れる。必要なのは、あなたの残業や睡眠を見て「これならできる」まで量を引いたうえで、毎日となりで走ってくれる人です。',
    prescription: '通勤の5分で、1問だけ解く。机に向かわなくていい。',
  },
  threedays: {
    name: '三日坊主タイプ',
    catch: '始められる。続かないのは、となりに誰もいないからです。',
    body: 'あなたは動き出せる人。問題は3日目。一人だと「今日くらいいいか」が勝ってしまう。意志が弱いんじゃない。人は、見てくれる誰かがいて初めて続く。シゴトモが毎日となりに立つのは、まさにここです。',
    prescription: '今日やった1ページを、誰かに「やった」と報告する。',
  },
  tsundoku: {
    name: '積ん読タイプ',
    catch: '買って満足、開かない。最初の一歩が、重すぎただけ。',
    body: '教材はそろう。でも開かない。それは怠けじゃなく、「何からやるか」の最初の一歩が大きすぎるから。最初の1ページまで削って、毎日となりで走る人がいれば、あなたはちゃんと動けます。',
    prescription: '参考書を開いて、目次を眺めるだけ。今日はそれで合格。',
  },
}

// 同点時の優先順位
const TYPE_ORDER: TypeKey[] = ['overload', 'notime', 'threedays', 'tsundoku']

const emptyScores = (): Record<TypeKey, number> => ({
  overload: 0,
  notime: 0,
  threedays: 0,
  tsundoku: 0,
})

export default function Diagnosis() {
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'result'>('intro')
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState<Record<TypeKey, number>>(emptyScores())
  const [resultType, setResultType] = useState<TypeKey>('threedays')

  const total = QUESTIONS.length

  const start = () => {
    setScores(emptyScores())
    setStep(0)
    setPhase('quiz')
  }

  const select = (type: TypeKey | null) => {
    const next = { ...scores }
    if (type) next[type] += 1
    setScores(next)

    if (step + 1 < total) {
      setStep(step + 1)
    } else {
      const top = TYPE_ORDER.reduce((best, t) => (next[t] > next[best] ? t : best), TYPE_ORDER[0])
      setResultType(top)
      setPhase('result')
    }
  }

  const restart = () => {
    setScores(emptyScores())
    setStep(0)
    setPhase('intro')
  }

  const progress = Math.round((step / total) * 100)

  return (
    <div className={styles.wrap}>
      <AnimatePresence mode="wait">
        {phase === 'intro' && (
          <motion.div
            key="intro"
            className={styles.intro}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <span className={styles.kicker}>30秒・無料診断</span>
            <h1 className={styles.introTitle}>
              あなたが続かない理由、<br />
              診断します。
            </h1>
            <p className={styles.introLead}>
              やる気の問題じゃないかもしれません。<br />
              6つの質問であなたの「挫折タイプ」を見立てて、<br />
              明日から<strong>「ひとりで走らない」</strong>一歩をお渡しします。
            </p>
            <button className={styles.primaryBtn} onClick={start}>
              診断をはじめる
            </button>
          </motion.div>
        )}

        {phase === 'quiz' && (
          <motion.div
            key={`q-${step}`}
            className={styles.quiz}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.progressRow}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${progress}%` }} />
              </div>
              <span className={styles.progressLabel}>
                {step + 1} / {total}
              </span>
            </div>

            <h2 className={styles.question}>{QUESTIONS[step].q}</h2>

            <div className={styles.options}>
              {QUESTIONS[step].options.map((opt, i) => (
                <button key={i} className={styles.option} onClick={() => select(opt.type)}>
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {phase === 'result' && (
          <motion.div
            key="result"
            className={styles.result}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className={styles.kicker}>診断結果</span>
            <h2 className={styles.resultName}>{RESULTS[resultType].name}</h2>
            <p className={styles.resultCatch}>{RESULTS[resultType].catch}</p>
            <p className={styles.resultBody}>{RESULTS[resultType].body}</p>

            <div className={styles.companion}>
              <span className={styles.companionKicker}>シゴトモが渡すのは、計画じゃない</span>
              <h3 className={styles.companionTitle}>明日から、ひとりで走らない。</h3>
              <p className={styles.companionText}>
                毎朝、あなたの「今日の1ページ」がLINEに届く。<br />
                夜、それを「やった」と、となりで一緒に確認する人ができる。
              </p>
              <div className={styles.companionRx}>
                <span className={styles.companionRxLabel}>
                  その「1ページ」は、あなたを潰さないように削ったもの
                </span>
                <p className={styles.companionRxText}>{RESULTS[resultType].prescription}</p>
              </div>
            </div>

            <div className={styles.closing}>
              <p>
                足りなかったのは、「やる気」でも「計画」でもありません。
                <strong>「続くまで、となりで走る人」</strong>です。
              </p>
              <p>
                シゴトモは、医師（Dr.チャンマー）が続けられる重さまで計画を削り（下ごしらえ）、
                元小学校教師（つっちゃん先生）が毎日となりで伴走します。
              </p>
            </div>

            <div className={styles.resultCta}>
              <a className={styles.primaryBtn} href={LINE_URL}>
                明日から、ひとりで走らない（無料で参加）
              </a>
              <a className={styles.secondaryBtn} href="/">
                シゴトモを詳しく見る
              </a>
            </div>

            <button className={styles.restart} onClick={restart}>
              もう一度診断する
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
