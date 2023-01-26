import styles from './Home.module.scss';
import Hero from './Hero';
import Card from './Card';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <Hero />
      </div>
      <div className={styles.cards}>
        <Card
          className={styles.cardOne}
          title="Supervisor"
          subTitle="Regularly evaluates our talent to ensure quality"
          icon="/icon-karma.svg"
          color="#44D3D2"
        />
        <Card
          className={styles.cardTwo}
          title="Team Builder"
          subTitle="Scans our talent network to create the optimal team for your project"
          icon="/icon-team-builder.svg"
          color="#ea5454"
        />
        <Card
          className={styles.cardThree}
          title="Karma"
          subTitle="Regularly evaluates our talent to ensure quality"
          icon="/icon-karma.svg"
          color="#fcae4a"
        />
        <Card
          className={styles.cardFour}
          title="Calculator"
          subTitle="Uses data from past projects to provide better delivery estimates"
          icon="/icon-calculator.svg"
          color="#549ef2"
        />
      </div>
    </div>
  );
}
