import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPetsThunk } from '../../redux/actions/pets';

function MainPage() {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets);

  useEffect(() => {
    dispatch(getPetsThunk());
  }, []);

  console.log('pets ====>', pets);

  return (
    <div className="main-div">
      {pets.map((pet) => (
        <div className="card pet-card">
          <img src={pet.pet_pic_url} className="card-img-top" alt="dog" />
        </div>
      ))}
    </div>
  );
}

export default MainPage;
