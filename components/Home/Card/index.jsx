import Image from 'next/image';

import styles from './Card.module.scss';

export default function Card({ title, subTitle, icon, color, className }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.topThing} style={{ backgroundColor: color }} />
      <div className={styles.contents}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subTitle}>{subTitle}</span>
        <span className={styles.iconBox}>
          <Image src={icon} alt={title} width={57} height={57} />
        </span>
      </div>
    </div>
  );
}
