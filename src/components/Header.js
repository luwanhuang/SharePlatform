import {
  NavLink, useHistory
} from "react-router-dom";
import React, { useState,Fragment,useContext } from "react";
import { Menu } from "antd";
import {TextContext} from './app';
import { SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default function Header() {
    let str = window.location.pathname;
    let history = useHistory();
    const [state, setState] = useState(str);
    const [name,setName] = useContext(TextContext);
    const setCookie = (key, value, day) => {
        let expires = day * 86400 * 1000; //
        let date = new Date(+new Date() + expires); //
        document.cookie = `${key}=${value};expires=${date.toUTCString()}`;
      };
    console.log(str);
    var handleClick = (e) => {
        if(e.key == "logOut"){
            setCookie("login", "", -1);
            setCookie("username", "", -1);
            setName("");
            history.push("/")
        }else if(e.key == "update"){
            history.push("/update")
        }else if(e.key == "posted"){
            // history.push("/postedTask")
            history.push("/sider")
        }
      setState(e.key);
    };
    if(name == ""){
        return(
          
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
                
            
        )
    }else{
        return (
        <Menu onClick={handleClick} selectedKeys={state} mode="horizontal">
                <Menu.Item key="/home">
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="/postTask">
              <NavLink to="/postTask">Post task</NavLink>
            </Menu.Item>
            <SubMenu key="SubMenu" icon={<SettingOutlined />} title={name}>
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
        )
    }
    
}