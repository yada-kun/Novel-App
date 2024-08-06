import { ReactElement } from 'react';

import { Routes, Route } from 'react-router-dom';


import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import routes from './routes';

const Router = (): ReactElement => {
  return (
    <Routes>
      {routes.map((route) => {
        const { isPrivateRoute, path, Component, toBeRenderedInContent } =
          route;

        if (isPrivateRoute)
          return (
            <Route
              key={path}
              element={
                <PrivateRoute toBeRenderedInContent={toBeRenderedInContent} />
              }
            >
              <Route path={path} element={<Component />} />
            </Route>
          );

        return (
          <Route key={path} element={<PublicRoute />}>
            <Route path={path} element={<Component />} />
          </Route>
        );
      })}
    </Routes>
  );
};

export default Router;
