import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPetsThunk } from '../../redux/actions/pets';
import ButtonName from '../Buttons/ButtonName';

function MainPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const pets = useSelector((state) => state.pets);

  useEffect(() => {
    dispatch(getPetsThunk());
  }, []);

  console.log(pets);

  return (
    <div className="main-div">
      {user.user_name ? (
        <div>
          {pets[0]
            ? (
              <div className="favourite animals">
                <h2>Your dogs:</h2>
                {pets.map((pet) => (
                  <div className="card pet-card" key={pet.id}>
                    {pet.pet_name !== null ? <h3>{pet.pet_name}</h3> : (
                      <ButtonName id={pet.id} />
                    )}
                    <img src={pet.pet_pic_url} className="card-img-top" alt="dog" />
                  </div>
                ))}
              </div>
            ) : (
              <p>
                Add&nbsp;
                <Link to="/dogs">dogs</Link>
                &nbsp;to favourites to see them here
              </p>
            )}
        </div>

      ) : (
        <p>
          <Link to="/register">Register</Link>
          &nbsp;or
          {' '}
          <Link to="/login">Log in</Link>
          &nbsp;and add dogs to favourites to see your favourites list.
        </p>
      )}
    </div>
  );
}

export default MainPage;
