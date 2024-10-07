import React from 'react';
import styles from './Promoted.module.scss';
import HotDeals from '../../features/HotDeals/HotDealsContainer';
import CurrentSale from '../../features/CurrentSale/CurrentSaleContainer';

const Promoted = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.promotedTab}>
          <div className={`col-md-4 d-none d-md-flex ${styles.hotDealsComponent}`}>
            <HotDeals />
          </div>
          <div className={`col-12 col-md-8 ${styles.currentSaleComponent}`}>
            <CurrentSale />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;
