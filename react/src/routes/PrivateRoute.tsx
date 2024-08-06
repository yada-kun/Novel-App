import { ReactElement } from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import Layout from '@components/Layout';
import { useUser } from '@store/useAuthStore';
import { TRoute } from './routes';

type TPrivateRoute = Pick<TRoute, 'toBeRenderedInContent'>;

const PrivateRoute = ({
  toBeRenderedInContent,
}: TPrivateRoute): ReactElement => {
  const user = useUser();

  const isAuthenticated = !!user;

  if (!isAuthenticated) return <Navigate to="/signin" replace />;

  return (
    <Layout isPrivateRoute={true} toBeRenderedInContent={toBeRenderedInContent}>
      {<Outlet />}
    </Layout>
  );
};

export default PrivateRoute;
