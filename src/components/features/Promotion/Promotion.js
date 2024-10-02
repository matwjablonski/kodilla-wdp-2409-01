import React from 'react';
import styles from './Promotion.module.scss';
import { getAllPromotions } from '../../../redux/promotionRedux';
import { useSelector } from 'react-redux';
const Promotion = () => {
    const promotion = useSelector(getAllPromotions);
    
    return (
        <>
            <div>
                <img
                    src={`/images/promotion/${promotion.pictureLeft}`}
                    alt={promotion.pictureLeftAlt}
                    className={styles.image}
                />
            </div>
            <div>
                <div>
                    <img
                        src={`/images/promotion/${promotion.pictureTopRight}`}
                        alt={promotion.pictureTopRightAlt}
                        className={styles.image}
                    />
                </div>
                <div>
                    <img
                        src={`/images/promotion/${promotion.pictureBottomRight}`}
                        alt={promotion.pictureBottomRightAlt}
                        className={styles.image}
                    />
                </div>
            </div>
        </>
    )
}

export default Promotion;