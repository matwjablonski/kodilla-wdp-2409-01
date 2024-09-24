import React from 'react';
import { useSelector } from 'react-redux';
import { getCompare } from '../../../redux/productsRedux';
import styles from './ComparisonBar.module.scss';
const ComparisonBar = () => {
  const selectedProducts = useSelector(state => getCompare(state));

  console.log(selectedProducts);

  return (
    <div className={styles.stickyBar}>
      {selectedProducts.length > 0 ? (
        <div className={styles.productRow}>
          {selectedProducts.map(product => (
            <div key={product.id} className={styles.productItem}>
              <img src={product.image} alt={product.name} className={styles.productImage} />
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noProducts}>No products to compare</p>
      )}
    </div>
  );
};

export default ComparisonBar;