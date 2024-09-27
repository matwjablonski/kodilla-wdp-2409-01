import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useDispatch } from 'react-redux';
import { changeRWD } from '../../../redux/rwdRedux';

const MainLayout = ({ children }) => {
  /* breakpoints */
  const desktop = 992;
  const tablet = 768;
  const mobile = 576;
  const [products, setProducts] = useState(8);
  const dispatch = useDispatch();

  const rwdListener = () => {
    const width = window.innerWidth;
    if (width >= desktop) {
      setProducts(8);
    } else if (width >= tablet && width < desktop) {
      setProducts(4);
    } else if (width >= mobile && width < tablet) {
      setProducts(2);
    }
  };

  useEffect(() => {
    rwdListener();
    window.addEventListener('resize', rwdListener);
    dispatch(changeRWD({ products }));

    return () => {
      window.removeEventListener('resize', rwdListener);
    };
  }, [dispatch, products]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
