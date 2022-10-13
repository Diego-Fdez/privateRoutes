import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '../../models';
import { RoutesNotFound } from '../../utilities';

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const Home = lazy(() => import('./Home/Home'));

export interface DashboardInterface {}

const Private: React.FC<DashboardInterface> = () => {
  return (
    <RoutesNotFound>
      <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </RoutesNotFound>
  );
};

export default Private;
