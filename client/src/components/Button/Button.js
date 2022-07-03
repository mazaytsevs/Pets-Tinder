import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPetNameThunk } from '../../redux/actions/pets';

function Button(id) {
  const [flag, setFlag] = useState(false);
  const [form, setForm] = useState({});

  function changeFlag() {
    setFlag(!flag);
  }

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (form.petName) {
      const pet = {pet_id: id, pet_name = form.petName}
      dispatch(createPetNameThunk(pet));
      // console.log(form);
      // console.log(id);
      setForm({});
      e.target.reset();
    }
  }

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="buttons">
      <button type="button" className="btn btn-outline-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-heartbreak" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38.094 38.094 0 0 0 .867-.59Zm-.303-1.01c6.164-4.4 6.91-7.982 6.22-9.921C14.031 1.37 11.447.42 9.587 1.368L8.136 3.18l1.3 3.468a1 1 0 0 1-.104.906l-1.739 2.608.971 3.237Zm-1.25 1.137a36.027 36.027 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3 1.815 4.537Zm-2.3-3.06C.895 7.797.597 4.875 1.308 3.248c.756-1.73 2.768-2.577 4.456-2.127L4.732 2.36a1 1 0 0 0-.168.991L5.91 6.943l-1.305 2.61a1 1 0 0 0-.034.818l.442 1.106Z" />
        </svg>
      </button>
      <button type="button" className="btn btn-outline-success" onClick={changeFlag}>Give name</button>
      {flag
        && (
        <form onSubmit={handleSubmit}>
          <input type="petName" value={form.petName || ''} name="petName" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <button type="submit" className="btn btn-outline-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
          </button>
        </form>
        )}
    </div>
  );
}

export default Button;
