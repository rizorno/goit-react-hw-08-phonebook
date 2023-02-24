import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/selectors';

const PrivateRoute = ({ component }) => {
  const token = useSelector(selectToken);
  console.log(token);
  return token ? component : <Navigate to={'/login'} />;
};

export default PrivateRoute;
