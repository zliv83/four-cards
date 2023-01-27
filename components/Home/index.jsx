import styles from './Home.module.scss';
import Hero from './Hero';
import Card from './Card';

export default function Home() {
  const cards = [
    {
      title: 'Supervisor',
      subTitle: 'Regularly evaluates our talent to ensure quality',
      icon: '/icon-karma.svg',
      color: '#44D3D2',
      className: styles.cardOne,
    },
    {
      title: 'Team Builder',
      subTitle:
        'Scans our talent network to create the optimal team for your project',
      icon: '/icon-team-builder.svg',
      color: '#ea5454',
      className: styles.cardTwo,
    },
    {
      title: 'Karma',
      subTitle: 'Regularly evaluates our talent to ensure quality',
      icon: '/icon-karma.svg',
      color: '#fcae4a',
      className: styles.cardThree,
    },
    {
      title: 'Calculator',
      subTitle:
        'Uses data from past projects to provide better delivery estimates',
      icon: '/icon-calculator.svg',
      color: '#549ef2',
      className: styles.cardFour,
    },
  ];
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <Hero />
      </div>
      <div className={styles.cards}>
        {cards.map((card) => (
          <Card
            title={card.title}
            subTitle={card.subTitle}
            icon={card.icon}
            color={card.color}
            className={card.className}
          />
        ))}
      </div>
    </div>
  );
}
