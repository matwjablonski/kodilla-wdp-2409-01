/* selectors */
export const getSales = ({ currentSale }) => currentSale;

/* actions */

const createActionName = actionName => `app/product/${actionName}`;

/* action creator */

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
