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
                            alt={promotion.pictureLeftAlt}
                            className={styles.image}
                        />
                        <div className={styles.containerLeftImgContent}>
                            <p className={styles.primary}>{promotion.titleLeft}</p>
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
                                <p className={styles.primary}>{promotion.titleTopRight}</p>
                            </div>
                        </div>

                        <div className={styles.bottomPictureWrapper}>
                            <img
                                src={`/images/promotion/${promotion.pictureBottomRight}`}
                                alt={promotion.pictureBottomRightAlt}
                                className={styles.image}
                            />
                            <div className={styles.containerBottomImgContent}>
                                <p className={styles.primary}>{promotion.titleBottomRight}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;