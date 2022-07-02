import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogThunk, createPreferingThunk, createDislikingThunk } from '../../redux/actions/dog';

function DogList() {
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.dog);

  useEffect(() => {
    dispatch(getDogThunk());
  }, []);

  function showMeDog() {
    dispatch(getDogThunk());
  }
  function preferingDog() {
    dispatch(createPreferingThunk(dog));
    dispatch(getDogThunk());
  }

  function dislikingingDog() {
    dispatch(createDislikingThunk(dog));
    dispatch(getDogThunk());
  }

  return (
    <div className="main-div">
      <div className="card pet-card">
        <img src={dog.pic_url} className="card-img-top" alt="dog" />
        <div className="card-body">
          <h5 className="card-title">Do you like me?</h5>
          <div className="buttons">
            <button type="button" className="btn btn-outline-danger" onClick={preferingDog}>Like</button>
            <button type="button" className="btn btn-outline-secondary" onClick={showMeDog}>Hmm...</button>
            <button type="button" className="btn btn-outline-dark" onClick={dislikingingDog}>Dislike</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogList;
