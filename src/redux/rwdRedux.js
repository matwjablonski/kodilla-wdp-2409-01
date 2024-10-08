import initialState from './initialState';

/* selectors */
export const getRWD = ({ rwd }) => rwd;

/* actions */
const createActionName = actionName => `app/rwd/${actionName}`;
const CHANGE_RWD = createActionName('CHANGE_RWD');

/*action creator */
export const changeRWD = payload => ({ payload, type: CHANGE_RWD });

/* reducer */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_RWD:
      return { ...statePart, ...action.payload };
    default:
      return statePart;
  }
}
