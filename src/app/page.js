import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header'
import bg from '../../public/travel-ai.png'


export default function Home() {
  return (
    <main className={styles.main}>
    <Header name={"QDSB"} age={"39"} >
      QUAD DATA SDN BHD
    </Header>
      <Image quality={100}
        src={bg}
      />
    </main>
  )
}
