import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>秋季训练营</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          2023秋冬季训练营
        </h2>

        {/* <div className={styles.grid}>
          <Link href="/2023-autumn-Rust" className={styles.card}>
            <p>秋季训练营</p>
          </Link>
        </div> */}
        <p className={styles.description}>
          2023 Rust 秋冬季训练营排行榜{' '}
          <Link href='/2023-autumn-Rust'>点击查看</Link>
        </p>
      </main>
    </div>
  )
}
