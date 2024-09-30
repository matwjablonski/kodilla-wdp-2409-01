import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductSearch from '../../features/ProductSearch/ProductSearch';
import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          <div className={'col-12 col-xl-auto order-1 order-xl-2 ' + styles.menu}>
            <ul>
              <li>
                <a href='#' className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href='#'>Furniture</a>
              </li>
              <li>
                <a href='#'>Chair</a>
              </li>
              <li>
                <a href='#'>Table</a>
              </li>
              <li>
                <a href='#'>Sofa</a>
              </li>
              <li>
                <a href='#'>Bedroom</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
            </ul>
          </div>
          <div className={'col-12 col-xl order-2 order-xl-1 ' + styles.searchWrapper}>
            <ProductSearch />
            <div className={styles.burgerWrapper}>
              <button onClick={toggleDropdown} className={styles.burgerMenu}>
                &#9776;
              </button>
              {isDropdownOpen && (
                <div className={styles.dropdown}>
                  <ul className={styles.dropdownMenu}>
                    <li>
                      <a href='#' className={styles.active}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href='#'>Furniture</a>
                    </li>
                    <li>
                      <a href='#'>Chair</a>
                    </li>
                    <li>
                      <a href='#'>Table</a>
                    </li>
                    <li>
                      <a href='#'>Sofa</a>
                    </li>
                    <li>
                      <a href='#'>Bedroom</a>
                    </li>
                    <li>
                      <a href='#'>Blog</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
