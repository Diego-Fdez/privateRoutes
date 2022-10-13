import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes, Roles } from '../../models';
import { createUser, resetUser, userKey } from '../../redux/states/user';
import { getMorty } from '../../services';
import { clearLocalStorageUser } from '../../utilities';
export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorageUser(userKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser({ ...result, rol: Roles.ADMIN }));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Este es el Login</h2>
      <button onClick={login}>LOGIN</button>
    </div>
  );
};

export default Login;
