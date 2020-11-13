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
import PostTask from "./Task/postTask";
import ApplyTask from "./applyTask/applyTask";
import Home from "./Home";
import Update from "./Update";
import Header from "./Header";
import PrivateRoute from "./utils/PrivateRoute";
import PostedTask from "./Task/PostedTask";
import Applicants from "./Task/Applicants";
import SiderBar from "./Task/Sider";
import OngoingTask from "./Task/OngoingTask";
import Appsider from "./applyTask/Appsider"

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
        <Route exact path="/ongoingTask">
          <OngoingTask />
        </Route>
        <PrivateRoute
          exact
          path="/postTask"
          component={PostTask}

        />
         <PrivateRoute
          exact
          path="/sider"
          component={SiderBar}

        />
        <PrivateRoute
          exact
          path="/appsider"
          component={Appsider}

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
         <PrivateRoute
          exact
          path="/postedTask"
          component={PostedTask}
        />
        <PrivateRoute
          exact
          path="/applicants"
          component={Applicants}
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
