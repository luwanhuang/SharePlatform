import React from "react";
import { Route, Redirect } from "react-router-dom";
// this component will return a route depend on whether login
const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(p) => {
        const login = document.cookie.includes("login=true");
        if (login) {
          // if login, goto what they want
          return <Component />;
        } else {
          // if not, go to login
          alert("You have not login yet, please login!");
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: p.location.pathname,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
export default PrivateRoute;
