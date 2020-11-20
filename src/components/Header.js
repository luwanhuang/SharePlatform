import { NavLink, useHistory } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { Menu } from "antd";
import { TextContext, PathContext } from "./app";
import {
  SettingOutlined,
  HomeOutlined,
  CloudUploadOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import "../css/headerMenu.css";

const { SubMenu } = Menu;

export default function Header() {
  const [name, setName] = useContext(TextContext);
  const [state, setState] = useContext(PathContext);
  let history = useHistory();
  useEffect(() => {
    let str = window.location.pathname;
    if (str === "/" || str === "") {
      str = "/home";
    }
    console.log(str);
    setState(str);
  });

  const setCookie = (key, value, day) => {
    let expires = day * 86400 * 1000; //
    let date = new Date(+new Date() + expires); //
    document.cookie = `${key}=${value};expires=${date.toUTCString()}`;
  };

  var handleClick = (e) => {
    if (e.key === "logOut") {
      setCookie("login", "", -1);
      setCookie("username", "", -1);
      setName("");
      history.push("/");
    } else if (e.key === "update") {
      history.push("/update");
    } else if (e.key === "posted") {
      history.push("/sider");
    } else if (e.key === "applied") {
      history.push("/appsider");
    }
    //       else if(e.key == "/home"){
    //         // history.push("/postedTask")
    //         history.push("/")
    //     }else if(e.key == "/postTask"){
    //       // history.push("/postedTask")
    //       history.push("/postTask")
    //   }else if(e.key == "/logIn"){
    //     // history.push("/postedTask")
    //     history.push("/logIn")
    // }
    setState(e.key);
  };
  // eslint-disable-next-line eqeqeq
  if (name === "") {
    return (
      <div className="outDiv">
        <Menu
          style={{ flex: 5 }}
          key={state}
          onClick={handleClick}
          selectedKeys={state}
          mode="horizontal"
        >
          <Menu.Item icon={<HomeOutlined className="icons" />} key="/home">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item
            icon={<CloudUploadOutlined className="icons" />}
            key="/postTask"
          >
            <NavLink to="/postTask">Post task</NavLink>
          </Menu.Item>
          <Menu.Item 
          style = {{float:"right"}}
          icon={<LoginOutlined className="icons" />} key="/logIn">
            <NavLink to="/logIn">LogIn/Reg</NavLink>
          </Menu.Item>
          {/* <Menu.Item
            icon={<UsergroupAddOutlined className="icons" />}
            key="/signUp"
          >
            <NavLink to="/signUp">SignUp</NavLink>
          </Menu.Item> */}
        </Menu>
      </div>
    );
  } else {
    return (
      <div className="outDiv">
        <Menu
          className="outMenu"
          key={state}
          style={{ flex: 1 }}
          onClick={handleClick}
          selectedKeys={state}
          mode="horizontal"
        >
          <Menu.Item
            className="itemMenu"
            // style={{fontSize : "20px",textAlign: "center"}}
            icon={<HomeOutlined className="icons" />}
            key="/home"
          >
            <NavLink
              // style={{fontSize : "20px",textAlign: "center",height:"100%"}}
              to="/"
            >
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item
          
            icon={<CloudUploadOutlined className="icons" />}
            key="/postTask"
          >
            <NavLink to="/postTask">Post task</NavLink>
          </Menu.Item>
          <SubMenu
            key="SubMenu"
            icon={<SettingOutlined className="icons" />}
            title={name}
            style = {{float:"right"}}
          >
            <Menu.ItemGroup title="Task">
              <Menu.Item key="posted">Posted</Menu.Item>
              <Menu.Item key="applied">Applied</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="User Setting">
              <Menu.Item key="update">Update Details</Menu.Item>
              <Menu.Item key="logOut">LogOut</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>

      </div>
    );
  }
}
