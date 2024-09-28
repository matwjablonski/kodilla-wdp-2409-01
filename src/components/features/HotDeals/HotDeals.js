import React from 'react';
import PropTypes from 'prop-types';
import styles from './HotDeals.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';
import { changeFavorite } from '../../../redux/productsRedux';
import { connect } from 'react-redux';

class HotDeals extends React.Component {
  state = {
    activeDealPage: 0,
    fading: false,
  };

  handleDealPageChange(newDealPage) {
    this.setState({ fading: true });

    setTimeout(() => {
      this.setState({
        activeDealPage: newDealPage,
        fading: false,
      });
    }, 400);
  }

  handleFavorite = (e, id) => {
    e.preventDefault();
    this.props.changeFavorite(id);
  };

  render() {
    const { products } = this.props;
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
                        <h3>3</h3>
                        <h5>secs</h5>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bottomContent}>
                    <h5>{item.name}</h5>
                    <div className={styles.stars}>
                      {[1, 2, 3, 4, 5].map(i => (
                        <a key={i} href='#'>
                          {i <= item.stars ? (
                            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                          ) : (
                            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.actions}>
                    <div className={styles.outlines}>
                      <Button
                        variant='outline'
                        onClick={e => this.handleFavorite(e, item.id)}
                        className={item.favorite ? styles.active : ''}
                      >
                        <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                      </Button>
                      <Button
                        className={item.compare ? styles.active : ''}
                        variant='outline'
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
                          $ {item.prevPrice}
                        </Button>
                      )}
                      <Button noHover variant='small' className={styles.priceButton}>
                        $ {item.price}
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
  changeFavorite: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeFavorite: id => dispatch(changeFavorite(id)),
});

export default connect(null, mapDispatchToProps)(HotDeals);
