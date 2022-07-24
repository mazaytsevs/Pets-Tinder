import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUserThunk } from '../../redux/actions/user';

function Navbar() {
  const user = useSelector((state) => state.user);
  // console.log(user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [e, setE] = useState(null);

  const handleInput = (event) => { setE(event); };

  console.log(e);

  useEffect(() => {
    if (!user.user_name) {
      navigate('/');
    }
  }, [user]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Home</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/dogs" className="nav-link active" aria-current="page">Take the dog</Link>
              </li>
              {!user.user_name
              && (
              <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
              )}
              {!user.user_name
              && (
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              )}
              {user.user_name
               && (
               <li className="nav-item">
                 <button
                   type="button"
                   className="nav-link logout-button"
                   onClick={() => {
                     dispatch(logoutUserThunk());
                   }}
                 >
                   Logout

                 </button>
               </li>
               )}
              {user.user_name
                && (
                  <li className="nav-item">
                    <div className="nav-link">
                      Hello,
                      {' '}
                      {user.user_name}
                      !
                    </div>
                  </li>
                )}
            </ul>
            <form className="d-flex" role="search">
              <input onChange={handleInput} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-danger" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
