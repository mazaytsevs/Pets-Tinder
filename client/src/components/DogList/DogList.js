import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogThunk } from '../../redux/actions/dog';

function DogList() {
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.dog);

  useEffect(() => {
    dispatch(getDogThunk());
  }, []);

  console.log('DOOOOG', dog);
  return (
    <div>
      <img src={dog.message} alt="dog" />
    </div>
  );
}

export default DogList;
