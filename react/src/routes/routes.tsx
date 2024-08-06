import NotFound from '@pages/NotFound';

import Dashboard from '@pages/Dashboard';
import Profile from '@pages/Profile';

import Signup from '@pages/Signup';
import Signin from '@pages/Signin';

export type TRoute = {
  path: string;
  Component: () => JSX.Element;
  isPrivateRoute: boolean;
  toBeRenderedInContent: boolean;
};

const routes: TRoute[] = [
  {
    path: '*',
    Component: NotFound,
    isPrivateRoute: false,
    toBeRenderedInContent: false,
  },
  {
    path: '/',
    Component: Dashboard,
    isPrivateRoute: true,
    toBeRenderedInContent: true,
  },
  {
    path: '/profile',
    Component: Profile,
    isPrivateRoute: true,
    toBeRenderedInContent: false,
  },
  {
    path: '/signup',
    Component: Signup,
    isPrivateRoute: false,
    toBeRenderedInContent: false,
  },
  {
    path: '/signin',
    Component: Signin,
    isPrivateRoute: false,
    toBeRenderedInContent: false,
  },
];

export default routes;
