import React from 'react';
// import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CompanyClaim = () => {
  const [cartCount, setCartCount] = useState(99);

  const cartCounterClass = cartCount > 9 ? `${styles.cartCounter} ${styles.large}` : styles.cartCounter;


  return (
    <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className={`col text-left ${styles.phoneNumber}`}>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560 -
            222
          </p>
        </div>
        <div className='col text-center'>
          <a href='#'>
            <img src='/images/logo.png' alt='Bazar' />
          </a>
        </div>
        <div className={`col text-right ${styles.cart}`}>
          <a href='#' className={styles.cartBox}>
            <div className={styles.cartIcon}>
              <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
            </div>
            <div className={cartCounterClass}>{cartCount}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

// CompanyClaim.propTypes = {};

export default CompanyClaim;
