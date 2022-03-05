import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) return <Navigate to={"/"} replace />;

  return <Outlet/>;
}; 

export default PrivateRoute;