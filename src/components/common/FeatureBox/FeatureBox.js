import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FeatureBox.module.scss';

const FeatureBox = ({ active, icon, children, link }) => (
  <div className={styles.root + (active ? ' ' + styles.active : '')}>
    <Link to={link} className={styles.featurelink}>
      {icon && (
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon className={styles.icon} icon={icon} />
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </Link>
  </div>
);

FeatureBox.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  active: PropTypes.bool,
  link: PropTypes.string,
};

export default FeatureBox;
