import {
  Route,
  Switch,
  BrowserRouter as Router,
  Link,
  NavLink,
} from "react-router-dom";
import React, {useState} from "react";
import PageTwo from "./pageTwo";
import LogIn from "./login/login";
import SignUp from "./signUp/SignUp";
import PostTask from "./postTask/postTask";
import ApplyTask from "./applyTask/applyTask";
import Home from "./Home";
import { isLogined } from "../utils/auth";
import { Menu } from 'antd';

export default function Example() {
    let str = window.location.pathname;
    const [state, setState] = useState(str);
    console.log(str);
    var handleClick = e => {
        setState(e.key );
      };
  return (
    
    <Router>
      <Menu onClick={handleClick} selectedKeys={state} mode="horizontal">
          <Menu.Item key="/home">
            <NavLink to="/home">Home</NavLink>
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
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/postTask">
          <PostTask />
        </Route>
        <Route exact path="/logIn">
          <LogIn />
        </Route>
        <Route exact path="/signUp">
          <SignUp />
        </Route>
      </Switch>
    </Router>
    
  );
}
