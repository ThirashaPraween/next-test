import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi nihil adipisci aspernatur harum reprehenderit commodi, quasi quam porro! Ab quo, quos maiores inventore eos sed repellendus enim veritatis labore!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi nihil adipisci aspernatur harum reprehenderit commodi, quasi quam porro! Ab quo, quos maiores inventore eos sed repellendus enim veritatis labore!</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
