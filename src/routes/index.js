import { Routes , Route } from 'react-router-dom';

import Dashboard from '../dashboard';
import Profile from '../profile';
import ROUTES from './routes';

const AppRoutes = () => (
  <Routes>
    <Route index path={ROUTES.ROOT} element={<Dashboard />} />
    <Route index path={ROUTES.PROFILE} element={<Profile />} />
  </Routes>
);

export default AppRoutes;
