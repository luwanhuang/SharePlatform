import {
  Route,
  Switch,
  BrowserRouter as Router,
  Link,
  NavLink,
} from "react-router-dom";
import React, { useState } from "react";
import PageTwo from "./pageTwo";
import LogIn from "./login/login";
import SignUp from "./signUp/SignUp";
import PostTask from "./postTask/postTask";
import ApplyTask from "./applyTask/applyTask";
import Home from "./Home";
import PrivateRoute from "./utils/PrivateRoute";
import { Menu } from "antd";

export default function Example() {
  let str = window.location.pathname;
  const [state, setState] = useState(str);
  const [username, setUsername] = useState("");
  console.log(str);
  var handleClick = (e) => {
    setState(e.key);
  };
  return (
    <Router>
      <Menu onClick={handleClick} selectedKeys={state} mode="horizontal">
        <Menu.Item key="/home">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="/postTask">
          <NavLink to="/postTask">Post task</NavLink>
        </Menu.Item>
        <Menu.Item key="/logIn">
          <NavLink to="/logIn">LogIn</NavLink>
        </Menu.Item>
        <Menu.Item key="/signUp">
          <NavLink to="/signUp">SignUp</NavLink>
        </Menu.Item>
      </Menu>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute
          exact
          path="/postTask"
          component={PostTask}
          username={username}
        />
        <Route exact path="/logIn">
          <LogIn setUsername={setUsername} />
        </Route>
        <Route exact path="/signUp">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}
