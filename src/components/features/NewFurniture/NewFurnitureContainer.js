import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getRWD } from '../../../redux/rwdRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  rwd: getRWD(state),
});

export default connect(mapStateToProps)(NewFurniture);
