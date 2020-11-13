import {
  NavLink, useHistory
} from "react-router-dom";
import React, { useState,Fragment,useContext } from "react";
import { Menu } from "antd";
import {TextContext} from './app';
import { SettingOutlined, HomeOutlined, CloudUploadOutlined } from '@ant-design/icons';


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
     const div1 = {
        width: "1200px",
        margin: "30px auto",
        boxSizing: "border-box",
        display: "flex",
        fontSize: "20px"
      };
      const div2 = {
        textAlign: "right"
        
      };
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
        }else if(e.key == "applied"){
          // history.push("/postedTask")
          history.push("/appsider")
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
    if(name == ""){
        return(
          <div style = {div1}>
        <Menu style = {{flex:9, fontSize:22}} onClick={handleClick} selectedKeys={state} mode="horizontal">
            <Menu.Item key="/home">
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="/postTask">
              <NavLink to="/postTask">Post task</NavLink>
            </Menu.Item>
            </Menu>
            <Menu style = {{flex:1, fontSize:22}} onClick={handleClick} selectedKeys={state} mode="horizontal">
            <Menu.Item key="/logIn">
              <NavLink to="/logIn">LogIn</NavLink>
            </Menu.Item>
            <Menu.Item key="/signUp">
              <NavLink to="/signUp">SignUp</NavLink>
            </Menu.Item>
          </Menu>
          </div>
                
            
        )
    }else{
        return (
          <div style = {div1}>
              <Menu style = {{flex:9, fontSize:22}} onClick={handleClick} selectedKeys={state} mode="horizontal">
              <Menu.Item icon={<HomeOutlined style={{fontSize : "20px",textAlign: "center"}} />}  key="/home">
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item icon = {<CloudUploadOutlined />} key="/postTask">
              <NavLink to="/postTask">Post task</NavLink>
            </Menu.Item>
            </Menu>
            <Menu  style = {{flex:1, fontSize:22}} onClick={handleClick} selectedKeys={state} mode="horizontal">
            <SubMenu  key="SubMenu" icon={<SettingOutlined />} title={name}>
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
        
        )
    }
    
}