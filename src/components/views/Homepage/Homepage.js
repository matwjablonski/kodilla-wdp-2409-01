import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promoted from '../../layout/Promoted/Promoted';
import Promotion from '../../features/Promotion/Promotion';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <Promotion />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
