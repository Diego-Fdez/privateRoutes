import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../models';
import { resetUser, userKey } from '../../redux/states/user';
import { clearLocalStorageUser } from '../../utilities';
export interface LogoutInterface {}

const Logout: React.FC<LogoutInterface> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    clearLocalStorageUser(userKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  };

  return <button onClick={logOut}>Logout</button>;
};

export default Logout;
