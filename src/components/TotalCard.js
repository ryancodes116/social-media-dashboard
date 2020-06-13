import React from 'react';
import styles from '../styles/TotalCard.module.css';

const TotalCard = ({
  borderColor,
  socialImage,
  alt,
  user,
  total,
  arrowImage,
  arrowAlt,
  change,
  color,
}) => {
  return (
    <div className={styles.totalCard} style={{ borderTopColor: borderColor }}>
      <div className={styles.cardContent}>
        <div className={styles.platformInfo}>
          <img className={styles.socialIcon} src={socialImage} alt={alt} />
          <p className={styles.user}>{user}</p>
        </div>
        <h1 className={styles.total}>{total}</h1>
        <p className={styles.followers}>followers</p>
        <div className={styles.change}>
          <img className={styles.arrow} src={arrowImage} alt={arrowAlt} />
          <p style={{ color: color }} className={styles.change}>
            {change} Today
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalCard;
