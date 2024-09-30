import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { changeFavorite } from '../../../redux/productsRedux';
import { useDispatch } from 'react-redux';

const ProductBox = ({ id, name, price, promo, stars, backgroundPhoto, compare, favorite, prevPrice }) => {
  const dispatch = useDispatch();
  const handleFavorite = e => {
    e.preventDefault();
    dispatch(changeFavorite(id));
  };
  return (
  <div className={styles.root}>
    <div className={styles.photo}>
      <div>
        <img
          src={`/images/productBox/${backgroundPhoto}`}
          alt='Product Photo'
          className={styles.image}
        />
      </div>
      {promo && <div className={styles.sale}>{promo}</div>}
    </div>
    <div className={styles.buttons}>
      <Button variant='small'>Quick View</Button>
      <Button variant='small'>
        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
      </Button>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#'>
            {i <= stars ? (
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
          onClick={handleFavorite}
           className={favorite && styles.active }
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button className={compare && styles.active} variant='outline'>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        {prevPrice && (
          <Button
            variant='small'
            noHover
            className={`${styles.prevPrice} ${styles.priceButton}`}
          >
            $ {prevPrice}
          </Button>
        )}
        <Button noHover variant='small' className={styles.priceButton}>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
)};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  compare: PropTypes.string,
  favorite: PropTypes.bool,
  backgroundPhoto: PropTypes.string,
  prevPrice: PropTypes.number,
  favorite: PropTypes.bool,
};

export default ProductBox;