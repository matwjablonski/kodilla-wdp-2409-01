/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action creators */
const createActionName = actionName => `app/product/${actionName}`;
const CHANGE_PRODUCT_FAVORITE = createActionName('CHANGE_PRODUCT_FAVORITE');
const CHANGE_PRODUCT_COMPARE = createActionName('CHANGE_PRODUCT_COMPARE');

export const changeFavorite = payload => ({ type: CHANGE_PRODUCT_FAVORITE, payload });
export const changeCompare = payload => ({ type: CHANGE_PRODUCT_COMPARE, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
