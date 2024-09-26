import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCompare, changeCompare } from '../../../redux/productsRedux';
import styles from './ComparisonBar.module.scss';

const ComparisonBar = () => {
  const selectedProducts = useSelector(state => getCompare(state));
  const dispatch = useDispatch(); 
  if (selectedProducts.length === 0) return null;

  const handleFavoriteToggle = (productId) => {
    dispatch(changeCompare(productId)); 
  };

  return (
    <div className={styles.stickyBar}>
      <div className={styles.productRow}>
        {selectedProducts.map(product => (
          <div key={product.id} className={styles.productItem}>
            <img 
              src={`/images/productBox/${product.backgroundPhoto}`} 
              alt={product.name} 
              className={styles.productImage} 
              onClick={() => handleFavoriteToggle(product.id)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonBar;
