import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarReview from '../StarReview/StarReview';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  compare,
  favorite,
  prevPrice,
  backgroundPhoto,
  handleCompare,
}) => {
  const handleFavorite = e => {
    e.preventDefault();
  };

  const handleCompareClick = e => {
    e.preventDefault();
    handleCompare(id);
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
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <StarReview stars={stars} id={id} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            className={favorite && styles.active}
            variant='outline'
            onClick={handleFavorite}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            className={compare && styles.active}
            variant='outline'
            onClick={handleCompareClick}
          >
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
          <Button
            noHover
            variant='small'
            className={`${styles.curentPrice} ${styles.priceButton}`}
          >
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  promo: PropTypes.string,
  stars: PropTypes.number.isRequired,
  compare: PropTypes.bool,
  favorite: PropTypes.bool,
  backgroundPhoto: PropTypes.string.isRequired,
  prevPrice: PropTypes.number,
  handleCompare: PropTypes.func.isRequired,
};

export default ProductBox;
