import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/selectors';

const PublicRoute = ({ component }) => {
  const token = useSelector(selectToken);
  return token ? <Navigate to={'/contacts'} /> : component;
};

export default PublicRoute;
