import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "../../router";

const AppRouter = () => {
  const isAuth = true;
  return (
    <div>
      {isAuth ? (
        <Switch>
          {privateRoutes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          ))}
          <Redirect to={RouteNames.PROFILE} />
        </Switch>
      ) : (
        <Switch>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          ))}
          <Redirect to={RouteNames.HOME} />
        </Switch>
      )}
    </div>
  );
};

export default AppRouter;
