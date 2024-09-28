import { connect } from 'react-redux';

import HotDeals from './HotDeals.js';

import { getAll } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(HotDeals);
