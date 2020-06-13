import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={classNames('container', styles.headerContent)}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Social Media Dashboard</h1>
          <p className={styles.total}>Total Followers: 23,004</p>
          {/* <hr /> */}
        </div>
        <div className={styles.headerToggle}>
          <p className={styles.toggleText}>Dark Mode</p>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default Header;
