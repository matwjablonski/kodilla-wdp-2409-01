/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getNew = ({ products }) => products.filter(item => item.newFurniture === true);
export const getCompare = ({products}) => products.filter(product => product.compare === true);

/* actions */
const createActionName = actionName => `app/product/${actionName}`;
const CHANGE_FAVORITE = createActionName('CHANGE_FAVORITE');
const CHANGE_COMPARE = createActionName('CHANGE_COMPARE');

/* action creator */
export const changeFavorite = payload => ({
  type: CHANGE_FAVORITE, payload
});

export const changeCompare = payload => ({
  type: CHANGE_COMPARE, payload
})

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_FAVORITE: 
      return statePart.map(item => item.id === action.payload ? {...item, favorite: !item.favorite } : item )
    case CHANGE_COMPARE: 
      return statePart.map(item => item.id === action.payload ? {...item, compare: !item.compare } : item );
    default:
      return statePart;
  }
}