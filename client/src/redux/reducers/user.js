import { GET_USER, CREATE_USER, LOGOUT_USER } from '../constants/constants';

const initialState = {};

export const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem('redux'));
  return stateFromLS || initialState;
};

const postReducer = (state = initialState, { type, payload } = {}) => {
  // const { type, payload } = action;

  switch (type) {
    case GET_USER:
      return payload;
    case CREATE_USER:
      return payload;
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default postReducer;
