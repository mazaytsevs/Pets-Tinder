import { GET_DOG } from '../constants/constants';

export const getDog = (data) => ({ type: GET_DOG, payload: data });

export const getDogThunk = () => async (dispatch) => {
  const dogApiUrl = 'https://dog.ceo/api/breeds/image/random';
  const response = await fetch(dogApiUrl);
  const result = await response.json();
  dispatch(getDog(result));
};
