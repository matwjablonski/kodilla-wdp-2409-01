import { connect } from 'react-redux';

import CurrentSale from './CurrentSale.js';

import { getSales } from '../../../redux/currentSaleRedux.js';

const mapStateToProps = state => ({
  currentSale: getSales(state),
});

export default connect(mapStateToProps)(CurrentSale);
