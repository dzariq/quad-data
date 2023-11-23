import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/Header'
import bg from '../../public/travel-ai.png'


export default function Home() {
  return (
    <main className={styles.main}>
      <h2>QUAD DATA SDN BHD</h2>
      <Image quality={100}
        src={bg}
      />
    </main>
  )
}

