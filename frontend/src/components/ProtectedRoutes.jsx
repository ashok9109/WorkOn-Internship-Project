import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router';

const ProtectedRoutes = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isloggedin } = useSelector((state) => state.user);

  console.log("protected route user", user)

  useEffect(()=>{
    if(user){
      navigate("/home")
    }else{
      navigate("/")
    }
  }, [user, dispatch])

  return <Outlet />
}

export default ProtectedRoutes;
