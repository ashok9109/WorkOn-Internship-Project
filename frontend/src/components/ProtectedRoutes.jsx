import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoutes = () => {


  const { user, isloggedin } = useSelector((state) => state.user)

  console.log("protected route user", user)

  if(!isloggedin ||  !user){
    return <Navigate to="/" replace />
  }

  return <Outlet/>
}

export default ProtectedRoutes;
