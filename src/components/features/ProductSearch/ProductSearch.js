import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductSearch.module.scss';
import { getCategories } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const ProductSearch = () => {
  const categories = useSelector(getCategories);

  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
      <FontAwesomeIcon className={styles["icon-category"]} icon={faListUl} />
        <div>
          <ul className={styles["dropdown"]}>
            <li>
              {/* Move the list icon here before the dropdown */} 
              <a href="#">Select a category</a>
              <ul className={styles["dropdown-content"]}>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link>{category.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <FontAwesomeIcon className={styles["icon-caret"]} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  )
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;