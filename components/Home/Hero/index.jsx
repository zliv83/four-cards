import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <span className={styles.title}>
        <span className={styles.titleOne}>Reliable, efficient delivery</span>
        <span className={styles.titleTwo}>Powered by Technology</span>
      </span>
      <span className={styles.subTitle}>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </span>
    </div>
  );
}
