import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    pagesCount: 0,
    categoryProducts: [],
    categories: [],
  };

  static getDerivedStateFromProps(props, state) {
    const { categories, products } = props;
    const { activeCategory } = state;
    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);
    return { ...state, pagesCount, categoryProducts, categories };
  }

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  rightAction() {
    if (this.state.activePage < this.state.pagesCount - 1) {
      this.setState({ activePage: this.state.activePage + 1 });
    }
  }

  leftAction() {
    if (this.state.activePage > 0) {
      this.setState({ activePage: this.state.activePage - 1 });
    }
  }

  render() {
    const { categories } = this.props;
    const { activeCategory, activePage, pagesCount, categoryProducts } = this.state;

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i + 1}
          </a>
        </li>
      );
    }

    return (
      <Swipeable
        leftAction={this.leftAction.bind(this)}
        rightAction={this.rightAction.bind(this)}
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
                          onClick={() => this.handleCategoryChange(item.id)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div className='row'>
              {categoryProducts
                .slice(activePage * 8, (activePage + 1) * 8)
                .map(item => (
                  <div key={item.id} className='col-3'>
                    <ProductBox {...item} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Swipeable>
    );
  }
}

NewFurniture.propTypes = {
  rwd: PropTypes.shape({
    products: PropTypes.number,
  }),
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
  rwd: { products: 8 },
};

export default NewFurniture;
