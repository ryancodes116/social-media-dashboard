import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Totals.module.css';
import TotalCard from '../components/TotalCard';
import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import twitter from '../images/icon-twitter.svg';
import youtube from '../images/icon-youtube.svg';
import upArrow from '../images/icon-up.svg';
import downArrow from '../images/icon-down.svg';

const Totals = () => {
  return (
    <div className={classNames('container', styles.totals)}>
      <div className="gridContainer">
        <TotalCard
          borderColor="hsl(208, 92%, 53%)"
          socialImage={facebook}
          alt="Facebook logo"
          user="@nathanf"
          total="1987"
          arrowImage={upArrow}
          arrowAlt="up arrow"
          change="12"
          color="#fff"
        />
        <TotalCard
          borderColor="hsl(203, 89%, 53%)"
          socialImage={twitter}
          alt="Twitter logo"
          user="@nathanf"
          total="1044"
          arrowImage={upArrow}
          arrowAlt="up arrow"
          change="99"
          color="hsl(163, 72%, 41%)"
        />
        <TotalCard
          borderColor="hsl(37, 97%, 70%)"
          socialImage={instagram}
          alt="Instagram logo"
          user="@realnathanf"
          total="11k"
          arrowImage={upArrow}
          arrowAlt="up arrow"
          change="1099"
          color="hsl(163, 72%, 41%)"
        />
        <TotalCard
          borderColor="hsl(348, 97%, 39%)"
          socialImage={youtube}
          alt="YouTube logo"
          user="Nathan F."
          total="8239"
          arrowImage={downArrow}
          arrowAlt="down arrow"
          color="hsl(356, 69%, 56%)"
        />
      </div>
    </div>
  );
};

export default Totals;
