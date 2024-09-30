import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Swipeable.module.scss';

const Swipeable = ({ leftAction, rightAction, children }) => {
  const [xStart, setXStart] = useState(undefined);

  const onMouseDown = e => {
    setXStart(e.clientX);
  };

  const onMouseUp = e => {
    const xFinal = e.clientX;
    const resultCoordinates = xStart - xFinal;

    if (resultCoordinates > 50 && rightAction) {
      rightAction();
    } else if (resultCoordinates < -50 && leftAction) {
      leftAction();
    }

    setXStart(undefined);
  };

  return (
    <div className={styles.swipeStyle} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Swipeable.defaultProps = {
  leftAction: null,
  rightAction: null,
};

export default Swipeable;
