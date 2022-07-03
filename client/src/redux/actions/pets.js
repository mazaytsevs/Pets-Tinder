import { GET_PETS, CREATE_PET_NAME } from '../constants/constants';

export const getPets = (data) => ({ type: GET_PETS, payload: data });
export const createPetName = (data) => ({ type: CREATE_PET_NAME, payload: data });

export const getPetsThunk = () => async (dispatch) => {
  const response = await fetch('/favouritepets');
  const result = await response.json();
  // console.log('PEEEEEEEEEEEETS', result);
  dispatch(getPets(result));
};

export const createPetNameThunk = (body) => async () => {
  console.log(body);
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
