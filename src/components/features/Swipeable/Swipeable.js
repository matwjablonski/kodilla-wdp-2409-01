import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
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

// Add prop types validation
Swipeable.propTypes = {
  leftAction: PropTypes.func, // Optional function for left swipe action
  rightAction: PropTypes.func, // Optional function for right swipe action
  children: PropTypes.node.isRequired, // Children prop is required, should be valid React node
};

// Add default props if needed
Swipeable.defaultProps = {
  leftAction: null, // Default to null if no left action is provided
  rightAction: null, // Default to null if no right action is provided
};

export default Swipeable;
