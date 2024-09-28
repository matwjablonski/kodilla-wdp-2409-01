import React from 'react';
import styles from './Promoted.module.scss';
import HotDeals from '../../features/HotDeals/HotDealsContainer';
import CurrentSale from '../../features/CurrentSale/CurrentSale';

const Promoted = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.promotedTab}>
          <div className='col-4'>
            <HotDeals />
          </div>
          <div className='col-8'>
            <CurrentSale />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;
