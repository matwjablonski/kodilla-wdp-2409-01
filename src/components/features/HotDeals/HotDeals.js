import React from 'react';
import PropTypes from 'prop-types';
import styles from './HotDeals.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';
import StarReview from '../../common/StarReview/StarReview';
import {
  changeFavorite,
  changeCompare,
  getCompare,
} from '../../../redux/productsRedux';
import { connect } from 'react-redux';

class HotDeals extends React.Component {
  state = {
    activeDealPage: 0,
    fading: false,
  };

  componentDidMount() {
    this.startAutoplay();
  }

  componentWillUnmount() {
    this.stopAutoplay();
    clearTimeout(this.autoplayTimeout);
  }

  startAutoplay = () => {
    this.autoplayInterval = setInterval(() => {
      this.handleNextPage();
    }, 3000);
  };

  stopAutoplay = () => {
    clearInterval(this.autoplayInterval);
  };

  handleNextPage = () => {
    const { products } = this.props;
    const promotedProducts = products.filter(item => item.promoted === true);
    const pagesCount = Math.ceil(promotedProducts.length / 1);
    const nextPage = (this.state.activeDealPage + 1) % pagesCount;

    this.handleDealPageChange(nextPage, false);
  };

  handleDealPageChange = (newDealPage, isManual = true) => {
    this.setState({ fading: true });

    if (isManual) {
      this.stopAutoplay();
    }

    setTimeout(() => {
      this.setState({
        activeDealPage: newDealPage,
        fading: false,
      });

      if (isManual) {
        this.autoplayTimeout = setTimeout(() => {
          this.startAutoplay();
        }, 10000);
      }
    }, 300);
  };

  handleFavorite = (e, id) => {
    e.preventDefault();
    this.props.changeFavorite(id);
  };

  handleCompare = (e, id) => {
    e.preventDefault();
    const { productsToCompare, dispatch } = this.props;
    const isCompared = productsToCompare.some(product => product.id === id);

    if (!isCompared) {
      if (productsToCompare.length < 4) {
        dispatch(changeCompare(id));
      } else {
        alert('Too many items for comparison. Only 4 items are allowed.');
      }
    } else {
      alert('Already in comparison.');
    }
  };

  render() {
    const { products, productsToCompare } = this.props;
    const { activeDealPage, fading } = this.state;
    const promotedProducts = products.filter(item => item.promoted === true);
    const pagesCount = Math.ceil(promotedProducts.length / 1);

    const dealsDots = [];
    for (let i = 0; i < pagesCount; i++) {
      dealsDots.push(
        <li key={i}>
          <a
            onClick={() => this.handleDealPageChange(i)}
            className={i === activeDealPage ? styles.active : ''}
          >
            Page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className={styles.hotDealsContainer}>
          <div className={styles.topText}>
            <p>Hot deals</p>
            <ul className={styles.pagination}>{dealsDots}</ul>
          </div>
          <div
            className={`${styles.product} ${fading ? styles.fadeOut : styles.fadeIn}`}
          >
            {promotedProducts
              .slice(activeDealPage * 1, (activeDealPage + 1) * 1)
              .map(item => (
                <div key={item.id} className={styles.productCol}>
                  <div className={styles.photo}>
                    <img
                      src={`/images/productBox/${item.backgroundPhoto}`}
                      alt={item.name}
                      className={styles.image}
                    />
                    <div className={styles.cartButton}>
                      <Button variant='small'>
                        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD
                        TO CART
                      </Button>
                    </div>
                    <div className={styles.dealTimeCounter}>
                      <div className={`${styles.days} ${styles.time}`}>
                        <h3>25</h3>
                        <h5>days</h5>
                      </div>
                      <div className={`${styles.hours} ${styles.time}`}>
                        <h3>3</h3>
                        <h5>hours</h5>
                      </div>
                      <div className={`${styles.minutes} ${styles.time}`}>
                        <h3>45</h3>
                        <h5>mins</h5>
                      </div>
                      <div className={`${styles.seconds} ${styles.time}`}>
                        <h3>25</h3>
                        <h5>secs</h5>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bottomContent}>
                    <h5>{item.name}</h5>
                    <StarReview stars={item.stars} id={item.id} />
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.actions}>
                    <div className={styles.outlines}>
                      <Button variant='outline'>
                        <FontAwesomeIcon icon={faEye}>Seen</FontAwesomeIcon>
                      </Button>
                      <Button
                        variant='outline'
                        onClick={e => this.handleFavorite(e, item.id)}
                        className={item.favorite ? styles.active : ''}
                      >
                        <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                      </Button>
                      <Button
                        className={
                          productsToCompare.some(product => product.id === item.id)
                            ? styles.active
                            : ''
                        }
                        variant='outline'
                        onClick={e => this.handleCompare(e, item.id)}
                      >
                        <FontAwesomeIcon icon={faExchangeAlt}>
                          Add to compare
                        </FontAwesomeIcon>
                      </Button>
                    </div>
                    <div className={styles.price}>
                      {item.prevPrice && (
                        <Button
                          variant='small'
                          noHover
                          className={`${styles.prevPrice} ${styles.priceButton}`}
                        >
                          ${item.prevPrice}
                        </Button>
                      )}
                      <Button noHover variant='small' className={styles.priceButton}>
                        ${item.price}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

HotDeals.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      promoted: PropTypes.bool,
      image: PropTypes.string,
      favorite: PropTypes.bool,
    })
  ).isRequired,
  productsToCompare: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ).isRequired,
  changeFavorite: PropTypes.func.isRequired,
  changeCompare: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  productsToCompare: getCompare(state),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  changeFavorite: id => dispatch(changeFavorite(id)),
  changeCompare: id => dispatch(changeCompare(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotDeals);
