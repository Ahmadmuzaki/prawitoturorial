import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Indomie from '../components/Indomie'
import styles from '../styles/Home.module.css'
import Panggil from '../components/Panggil';
import IndomieGoreng from './indomie/[id]'

const Home: NextPage = () => {
  return (
    <div>
      <Link href="indomie">Indomie
      </Link>
      <Indomie>
        <div>Indomie goreng</div>
        <IndomieGoreng/>
        <Image src="/yo.jpg" alt='yoho' width={300} height={300} />
      </Indomie>
      <Panggil data="Matamu kui loh ojo kakean ndelok seng rajelas" />
    </div>
  )
}

export default Home
