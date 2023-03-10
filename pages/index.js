import Head from 'next/head';

import styles from './Home.module.scss';
import Home from '../components/Home';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Home Page</title>
      </Head>
      <Home />
    </div>
  );
}
