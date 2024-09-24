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
import { changeFavorite, changeCompare, getCompare } from '../../../redux/productsRedux';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


const ProductBox = ({ id, name, price, promo, stars, compare, favorite, prevPrice }) => {
  const dispatch = useDispatch();
  const handleFavorite = e => {
    e.preventDefault();
    dispatch(changeFavorite(id));
  };

  const productsToCompare = useSelector((state) => getCompare(state));

  const isCompared = productsToCompare.some(product => product.id === id); // returns array with all products added to comparison


  const handleCompare = e => {
  e.preventDefault();
  if (!isCompared) {
    if (productsToCompare.length < 4) {
      dispatch(changeCompare(id));
    } else {
      alert('Two many items for comparison. Only 4 items are allowed.');
    }
  } else {
    alert('Already in comparison.');
  }
};

  return (

    <div className={styles.root}>
      <div className={styles.photo}>
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
            className={favorite && styles.active}
            variant='outline'
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            className={compare && styles.active}
            variant='outline'
            onClick={handleCompare}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {prevPrice && (
            <Button
              variant='small'
              noHover
              className={styles.prevPrice}
            >
              $ {prevPrice}
            </Button>
          )}
        </div>
        <div className={styles.price}>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  )
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
};

export default ProductBox;
