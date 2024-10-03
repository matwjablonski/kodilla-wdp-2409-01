//Selectors

export const getAllReviews = ({ reviews }) => reviews;
export const getReviewById = ({ reviews }, id) => {
  const idString = String(id);
  const review = reviews.find(review => String(review.id) === idString);

  return review;
};

export const getReviewsByRating = ({ reviews }, stars) =>
  reviews.filter(review => review.stars === stars);

//actions
const createActionName = actionName => `app/review/${actionName}`;
const ADD_REVIEW = createActionName('ADD_REVIEW');
const DELETE_REVIEW = createActionName('DELETE_REVIEW');

//action creators
export const addReview = payload => ({
  type: ADD_REVIEW,
  payload,
});

export const deleteReview = id => ({
  type: DELETE_REVIEW,
  payload: id,
});

//Reducer
export default function reviewsReducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_REVIEW:
      return [...statePart, action.payload];
    case DELETE_REVIEW:
      return statePart.filter(review => review.id !== action.payload);
    default:
      return statePart;
  }
}
