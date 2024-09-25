import React from 'react';
import PropTypes from 'prop-types';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';
import ComparisonBar from '../ComparisonBar/ComparisonBar';

const FeatureBoxes = () => (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <FeatureBox icon={faTruck} active link='placeHolder'>
              <h5>Free shipping</h5>
              <p>All orders</p>
            </FeatureBox>
          </div>
          <div className='col'>
            <FeatureBox icon={faHeadphones} link='placeHolder'>
              <h5>24/7 customer</h5>
              <p>support</p>
            </FeatureBox>
          </div>
          <div className='col'>
            <FeatureBox icon={faReplyAll} link='placeHolder'>
              <h5>Money back</h5>
              <p>guarantee</p>
            </FeatureBox>
          </div>
          <div className='col'>
            <FeatureBox icon={faBullhorn} link='placeHolder'>
              <h5>Member discount</h5>
              <p>First order</p>
            </FeatureBox>
          </div>
        </div>
      </div>
    </div>
);

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
