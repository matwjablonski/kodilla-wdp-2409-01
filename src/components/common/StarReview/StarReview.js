import React, { useState } from 'react';
import styles from './StarReview.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addReview, deleteReview, getReviewById } from '../../../redux/reviewsRedux';

const StarReview = props => {
  const { id, stars } = props;
  const dispatch = useDispatch();

  const [hoveredStar, setHoveredStar] = useState(null);

  const existingReview = useSelector(state => {
    return getReviewById(state, id);
  });

  const handleStarClick = (e, starNumber) => {
    e.preventDefault();

    if (existingReview) {
      if (existingReview.stars === starNumber) {
        dispatch(deleteReview(id));
      } else {
        dispatch(deleteReview(id));
        dispatch(addReview({ id, stars: starNumber }));
      }
    } else {
      dispatch(addReview({ id, stars: starNumber }));
    }
  };

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a
          key={i}
          href='#'
          onClick={e => handleStarClick(e, i)}
          onMouseEnter={() => setHoveredStar(i)}
          onMouseLeave={() => setHoveredStar(null)}
          className={`${existingReview ? styles.activeStar : ''} ${styles[`star${i}`]}`}
        >
          {i <= (hoveredStar || (existingReview ? existingReview.stars : stars)) ? (
            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
};

StarReview.propTypes = {
  id: PropTypes.string,
  stars: PropTypes.number,
};

export default StarReview;
