import { ReactElement } from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import Layout from '@components/Layout';
import { useUser } from '@store/useAuthStore';

const PublicRoute = (): ReactElement => {
  const user = useUser();

  const isAuthenticated = !!user;

  if (isAuthenticated) return <Navigate to="/" replace />;

  return (
    <Layout isPrivateRoute={false}>
      <Outlet />
    </Layout>
  );
};

export default PublicRoute;
