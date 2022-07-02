import { GET_PETS } from '../constants/constants';

const initialState = {};

export const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem('redux'));
  return stateFromLS || initialState;
};

const petsReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GET_PETS:
      return payload;
    default:
      return state;
  }
};

export default petsReducer;
