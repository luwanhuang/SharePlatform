import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { PathContext } from "../app";
// this component will return a route depend on whether login
const PrivateRoute = ({ component: Component, ...props }) => {
  const [path, setPath] = useContext(PathContext);
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
          setPath("/logIn");
          return (
            <Redirect
              to={{
                pathname: "/logIn",
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
