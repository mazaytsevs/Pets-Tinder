import { GET_PETS } from '../constants/constants';

export const getPets = (data) => ({ type: GET_PETS, payload: data });

export const getPetsThunk = () => async (dispatch) => {
  const response = await fetch('/favouritepets');
  const result = await response.json();
  dispatch(getPets(result));
};
