import React from 'react';
import styles from './Promotion.module.scss';
import { getAllPromotions } from '../../../redux/promotionRedux';
import { useSelector } from 'react-redux';

const Promotion = () => {
  const promotion = useSelector(getAllPromotions);

  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <img
              src={`/images/promotion/${promotion.pictureLeft}`}
              alt={promotion.leftSubtitle}
              className={styles.image}
            />
            <div className={styles.containerLeftImgContent}>
              <p className={`${styles.title}`}>{promotion.leftTitle}</p>
              <p className={`${styles.subtitle}`}>{promotion.leftSubtitle}</p>
              <p className={`${styles.numberLeft}`}>{promotion.leftNumber}</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.topPictureWrapper}>
              <img
                src={`/images/promotion/${promotion.pictureTopRight}`}
                alt={promotion.pictureTopRightAlt}
                className={styles.image}
              />
              <div className={styles.containerTopImgContent}>
                <p className={`${styles.title}`}><span className={styles.bold}>{promotion.rUpperTitle.split(' ')[0]}</span>{promotion.rUpperTitle.split(' ')[1]}</p>
                <p className={`${styles.subtitle}`}>{promotion.rUpperSubtitle}</p>
                <p className={`${styles.number}`}>${promotion.rNumber}</p>
              </div>
            </div>
            <div className={styles.bottomPictureWrapper}>
              <img
                src={`/images/promotion/${promotion.pictureBottomRight}`}
                alt={promotion.pictureBottomRightAlt}
                className={styles.image}
              />
              <div className={styles.containerBottomImgContent}>
                <p className={`${styles.title}`}><span class={styles.bold}>{promotion.pBottomTitle.split(' ')[0]}</span> {promotion.pBottomTitle.split(' ')[1]}</p>
                <p className={`${styles.subtitle}`}>{promotion.pBottomSubtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;