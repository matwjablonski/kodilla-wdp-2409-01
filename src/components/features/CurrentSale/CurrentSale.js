import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrentSale.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class CurrentSale extends React.Component {
  state = {
    activeSalePage: 0,
    fading: false,
  };

  handleDealPageChange(newSalePage) {
    const { currentSale } = this.props;
    const pagesCount = Math.ceil(currentSale.length / 1);

    if (newSalePage < 0) {
      newSalePage = pagesCount - 1;
    } else if (newSalePage >= pagesCount) {
      newSalePage = 0;
    }

    this.setState({ fading: true });

    setTimeout(() => {
      this.setState({
        activeSalePage: newSalePage,
        fading: false,
      });
    }, 400);
  }

  render() {
    const { currentSale } = this.props;
    const { activeSalePage, fading } = this.state;

    return (
      <div className={styles.root}>
        <div className={styles.currentSalesContainer}>
          <div
            className={`${styles.contentContainer} ${
              fading ? styles.fadeOut : styles.fadeIn
            }`}
          >
            {currentSale
              .slice(activeSalePage * 1, (activeSalePage + 1) * 1)
              .map(item => (
                <div key={item.id} className={styles.saleContainer}>
                  <div className={styles.photo}>
                    <img
                      src={`/images/currentSale/${item.photo}`}
                      alt={item.id}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <div className={styles.topText}>
                      <div className={styles.textOne}>{item.topText}</div>
                      <div className={styles.textTwo}>{item.topTextBold}</div>
                    </div>
                    <div className={styles.bottomText}>{item.bottomText}</div>
                    <Button variant='small' hover className={styles.shopNow}>
                      SHOP NOW
                    </Button>
                  </div>
                </div>
              ))}
          </div>
          <div className={styles.navigation}>
            <Button
              variant='small'
              hover
              className={styles.previousPage}
              onClick={() => this.handleDealPageChange(activeSalePage - 1)}
            >
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </Button>
            <Button
              variant='small'
              hover
              className={styles.nextPage}
              onClick={() => this.handleDealPageChange(activeSalePage + 1)}
            >
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

CurrentSale.propTypes = {
  currentSale: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      photo: PropTypes.string.isRequired,
      topText: PropTypes.string.isRequired,
      topTextBold: PropTypes.string.isRequired,
      bottomText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

CurrentSale.defaultProps = {
  currentSale: [],
};

export default CurrentSale;
