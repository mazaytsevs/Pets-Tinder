import { GET_DOG, CREATE_LIKE, CREATE_DISLIKE } from '../constants/constants';

const initialState = {};

export const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem('redux'));
  return stateFromLS || initialState;
};

const dogReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GET_DOG:
      return payload;
    case CREATE_LIKE:
    case CREATE_DISLIKE:
    default:
      return state;
  }
};

export default dogReducer;
