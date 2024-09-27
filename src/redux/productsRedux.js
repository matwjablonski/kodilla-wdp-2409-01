/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getNew = ({ products }) => products.filter(item => item.newFurniture === true);

/* actions */ 
const createActionName = actionName => `app/product/${actionName}`;
const CHANGE_FAVORITE = createActionName('CHANGE_FAVORITE');

/* action creator */ 
export const changeFavorite = payload => ({
  type: CHANGE_FAVORITE, payload
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_FAVORITE: 
      return statePart.map(item => item.id === action.payload ? {...item, favorite: !item.favorite } : item )
    default:
      return statePart;
  }
}