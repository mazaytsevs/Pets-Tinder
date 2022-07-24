import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuthThunk } from '../../redux/actions/user';

function AuthRoute({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthThunk());
  }, []);

  return (children);
}

export default AuthRoute;
