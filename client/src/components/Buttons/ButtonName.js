import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPetNameThunk } from '../../redux/actions/pets';

function Button(petToRename) {
  const [flag, setFlag] = useState(false);
  const [flagForName, setFlagForName] = useState(false);
  const [form, setForm] = useState({});
  const [newName, setNewName] = useState('');
  const { id } = petToRename;

  function changeFlag() {
    setFlag(!flag);
  }

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (form.petName) {
      const pet = { pet_id: id, pet_name: form.petName };
      dispatch(createPetNameThunk(pet));
      setFlagForName(!flagForName);
      setNewName(form.petName);
      setForm({});
      e.target.reset();
    }
  }

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {flagForName
          ? <h3>{newName}</h3> : (
            <div className="buttons">
              <button type="button" className="btn btn-outline-success" onClick={changeFlag}>Give me a name</button>
              {flag
      && (
        <div>
          <input type="petName" value={form.petName || ''} name="petName" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <button type="submit" className="btn btn-outline-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
          </button>
        </div>
      )}
            </div>
          )}

      </form>
    </div>
  );
}

export default Button;
