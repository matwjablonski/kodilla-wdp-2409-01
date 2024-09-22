import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';
import { getCategories } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';

const ProductSearch = () => {
  
  const categories = useSelector(getCategories);
  
  console.log('categories', categories);

  return (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      {/* Move the list icon here before the dropdown */}
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      
      <div>
        <ul className={styles["dropdown"]}>
          <li>
            <a href="#">Select a category</a>
            <ul className={styles["dropdown-content"]}>
              {categories.map((category) => (
                <li key={category.id}>
                  <a href="#">{category.name}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
)};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
