import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCompare, changeCompare } from '../../../redux/productsRedux';
import styles from './ComparisonBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
            <div className={styles.imageContainer}>
              <img
                src={`/images/productBox/${product.backgroundPhoto}`}
                alt={product.name}
                className={styles.productImage}
                onClick={() => handleFavoriteToggle(product.id)}
              />
              <button
                className={styles.trashButton}
                // onClick={() => handleFavoriteToggle(product.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
        <button className={styles.compareButton}>
          {/* <FontAwesomeIcon icon={faArrowRight} className={styles.compareIcon} /> */}
            <span>Compare</span>
        </button>
      </div>
    </div>
  );
};

export default ComparisonBar;