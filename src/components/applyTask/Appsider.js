import { Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "../../css/sider.css";
import AppliedTask from "./appliedTask";
import OngoingApplication from "./OngoingApplication";
import FinishedApplication from "./FinishedApplication";
import { useHistory, useLocation, Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default function Appsider() {
  let history = useHistory();
  let location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed((collapsed) => !collapsed);
  };
  if (location.state == null || location.state.from == 1) {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            // onClick = {(e)=>{
            //   if(e.key==2){
            //     history.push("/ongoingTask")
            //   }
            //   console.log(e.key);
            // }}
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link
                to={{
                  pathname: "/appsider",
                  state: { from: 1 },
                }}
              >
                Unstarted Task
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link
                to={{
                  pathname: "/appsider",
                  state: { from: 2 },
                }}
              >
                Ongoing Application
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link
                to={{
                  pathname: "/appsider",
                  state: { from: 3 },
                }}
              >
                Finished Application
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <AppliedTask />
          </Content>
        </Layout>
      </Layout>
    );
  } else if (location.state.from == 2) {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link
                to={{
                  pathname: "/appsider",
                  state: { from: 1 },
                }}
              >
                Unstarted Task
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link
                to={{
                  pathname: "/appsider",
                  state: { from: 2 },
                }}
              >
                Ongoing Task
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link
                to={{
                  pathname: "/appsider",
                  state: { from: 3 },
                }}
              >
                Finished Task
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <OngoingApplication />
          </Content>
        </Layout>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["3"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link
                to={{
                  pathname: "/appsider",
                  state: { from: 1 },
                }}
              >
                Unstarted Task
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link
                to={{
                  pathname: "/appsider",
                  state: { from: 2 },
                }}
              >
                Ongoing Task
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link
                to={{
                  pathname: "/appsider",
                  state: { from: 3 },
                }}
              >
                Finished Task
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <FinishedApplication />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
