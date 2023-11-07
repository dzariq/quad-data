import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/travel-ai.png"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={800}
        height={1600}
        priority
      />
    </main>
  )
}
