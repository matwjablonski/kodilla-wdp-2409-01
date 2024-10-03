import { create } from 'react-test-renderer';

/* selectors */
export const getRWD = ({ rwd }) => rwd;

/* actions */
const createActionName = actionName => `app/rwd/${actionName}`;
const CHANGE_RWD = createActionName('CHANGE_RWD');

/*action creator */
export const changeRWD = payload => ({ payload, type: CHANGE_RWD });

/* reducer */

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_RWD:
      return action.payload;
    default:
      return statePart;
  }
}
