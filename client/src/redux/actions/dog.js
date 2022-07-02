import { GET_DOG, CREATE_LIKE, CREATE_DISLIKE } from '../constants/constants';

export const getDog = (data) => ({ type: GET_DOG, payload: data });
export const createLike = (data) => ({ type: CREATE_LIKE, payload: data });
export const createDislike = (data) => ({ type: CREATE_DISLIKE, payload: data });

export const getDogThunk = () => async (dispatch) => {
  const dogApiUrl = 'https://dog.ceo/api/breeds/image/random';
  const response = await fetch(dogApiUrl);
  const result = await response.json();
  const dog = { pic_url: result.message, type: 'dog' };
  console.log(dog);
  dispatch(getDog(dog));
};

export const createPreferingThunk = (body) => async () => {
  await fetch(
    '/likedog',
    {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  );
};

export const createDislikingThunk = (body) => async () => {
  await fetch(
    '/dislikedog',
    {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  );
};
