import styles from './NewFurniture.module.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../Swipeable/Swipeable';
import { useSelector, useDispatch } from 'react-redux';
import { getCompare, changeCompare } from '../../../redux/productsRedux';
import ComparisonBar from '../../features/ComparisonBar/ComparisonBar';

const NewFurniture = ({ categories, products }) => {
  const [activePage, setActivePage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('bed');
  const [fade, setFade] = useState(false);

  const selectedProducts = useSelector(state => getCompare(state));
  const dispatch = useDispatch();

  const categoryProducts = products.filter(item => item.category === activeCategory);
  const pagesCount = Math.ceil(categoryProducts.length / 8);

  const handlePageChange = newPage => {
    setFade(true);
    setTimeout(() => {
      setActivePage(newPage);
      setFade(false);
    }, 300);
  };

  const handleCategoryChange = newCategory => {
    setFade(true);
    setTimeout(() => {
      setActiveCategory(newCategory);
      setActivePage(0);
      setFade(false);
    }, 300);
  };

  const handleCompare = id => {
    const isCompared = selectedProducts.some(product => product.id === id);
    if (!isCompared) {
      if (selectedProducts.length < 4) {
        dispatch(changeCompare(id));
      } else {
        alert('Too many items for comparison. Only 4 items are allowed.');
      }
    } else {
      alert('Already in comparison.');
    }
  };

  return (
    <Swipeable
      leftAction={() => handlePageChange(Math.max(0, activePage - 1))}
      rightAction={() => handlePageChange(Math.min(pagesCount - 1, activePage + 1))}
    >
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory ? styles.active : ''}
                        onClick={() => handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>
                  {Array.from({ length: pagesCount }, (_, i) => (
                    <li key={i}>
                      <a
                        onClick={() => handlePageChange(i)}
                        className={i === activePage ? styles.active : ''}
                      >
                        page {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={`row ${fade ? styles.fadeOut : styles.fadeIn}`}>
            {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
              <div key={item.id} className='col-xl-3 col-l-4 col-md-4 col-sm-6 col-12'>
                <ProductBox
                  {...item}
                  handleCompare={handleCompare}
                  compare={selectedProducts.some(product => product.id === item.id)}
                />
              </div>
            ))}
          </div>
          {selectedProducts.length > 0 && <ComparisonBar />}
        </div>
      </div>
    </Swipeable>
  );
};

NewFurniture.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
