import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninja list" />
      </Head>
      <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda voluptas libero autem quia, illum asperiores enim quos quaerat temporibus blanditiis officiis commodi doloremque totam magnam itaque qui earum delectus.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda voluptas libero autem quia, illum asperiores enim quos quaerat temporibus blanditiis officiis commodi doloremque totam magnam itaque qui earum delectus.</p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See Ninja Listings</a>
      </Link>
      </div>
    </>
  )
}
