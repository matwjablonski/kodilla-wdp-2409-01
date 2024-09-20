import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FeatureBox.module.scss';

const FeatureBox = ({ active, icon, children, link }) => (
  <div className={styles.root + (active ? ' ' + styles.active : '')}>
    <a
      href={link}
      className={styles.featurelink}
      onClick={e => e.preventDefault()} //disabled click effect temporarily
    >
      {icon && (
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon className={styles.icon} icon={icon} />
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </a>
  </div>
);

FeatureBox.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  active: PropTypes.bool,
  link: PropTypes.string,
};

export default FeatureBox;
