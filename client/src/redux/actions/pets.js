import { GET_PETS, CREATE_PET_NAME } from '../constants/constants';

export const getPets = (data) => ({ type: GET_PETS, payload: data });
export const createPetName = (data) => ({ type: CREATE_PET_NAME, payload: data });

export const getPetsThunk = () => async (dispatch) => {
  console.log('IM HERE');
  const response = await fetch('/favouritepets');
  const result = await response.json();
  console.log(result, 'resuuuult');
  dispatch(getPets(result));
};

export const createPetNameThunk = (body) => async () => {
  await fetch(
    '/renamepet',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  );
};
