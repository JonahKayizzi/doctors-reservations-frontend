import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logout } from '../redux/users';

const Logout = () => {
  const dispatch = useDispatch();

  dispatch(logout());

  return <Navigate to="/login" />;
};

export default Logout;
