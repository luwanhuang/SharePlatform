import {
  Route,
  Switch,
  BrowserRouter as Router,
  Link,
  NavLink,
} from "react-router-dom";
import React, { useState } from "react";
import LogIn from "./login/login";
import SignUp from "./signUp/SignUp";
import PostTask from "./postTask/postTask";
import ApplyTask from "./applyTask/applyTask";
import Home from "./Home";
import Update from "./Update";
import Header from "./Header";
import PrivateRoute from "./utils/PrivateRoute";


export const TextContext = React.createContext();

export default function App() {
  var tem = ""
  if(document.cookie.includes("username")){
    tem = document.cookie.split("; ").filter(e=>e.includes("username"))[0].split("=")[1];
  }
  return (
    <Router>
      <TextContext.Provider value={useState(tem)}>
      <Header/>
      <Switch>
      
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute
          exact
          path="/postTask"
          component={PostTask}

        />
        <PrivateRoute
          exact
          path="/applyTask"
          component={ApplyTask}

        />
        <PrivateRoute
          exact
          path="/update"
          component={Update}

        />
        <Route exact path="/logIn">
          <LogIn />
        </Route>
        <Route exact path="/signUp">
          <SignUp />
        </Route>
      </Switch>
      </TextContext.Provider>
    </Router>
  );
}
