import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "../../router";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../store/modules/user/user.selector";

const AppRouter = () => {
  const isAuth = useSelector(selectUserToken);
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
