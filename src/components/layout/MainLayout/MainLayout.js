import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useDispatch } from 'react-redux';
import { changeRWD } from '../../../redux/rwdRedux';

const MainLayout = ({ children }) => {
  /* breakpoints */
  const desktop = 1200;
  const smallDesktop = 768;
  const tablet = 576;
  const [products, setProducts] = useState(8);
  const dispatch = useDispatch();

  const rwdListener = () => {
    const width = window.innerWidth;
    if (width >= desktop) {
      setProducts(8);
    } else if (width >= smallDesktop && width < desktop) {
      setProducts(3);
    } else if (width >= tablet && width < smallDesktop) {
      setProducts(2);
    } else if (width <= 576) {
      setProducts(1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      rwdListener();
      dispatch(changeRWD({ products }));
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
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
