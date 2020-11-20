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
import PostedTask from "./PostedTask";
import OngoingTask from "./OngoingTask";
import FinishedTask from "./FinishedTask";
import PSearch from "./search";
import { useLocation, Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default function SiderBar() {
  let location = useLocation();
  const [state, setState] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const siderHeight = window.innerHeight < 1100 ? "868px" : "1185px";
  // const contentHeight = window.innerHeight<1100? "630px":"1180px";
  const toggle = () => {
    setCollapsed((collapsed) => !collapsed);
  };
  if (location.state == null || location.state.from === 1) {
    return (
      <Layout style={{ height: siderHeight }}>
        <Sider
          // style = {{height:siderHeight}}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="logo" />
          <Menu
            theme="light"
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
                  pathname: "/sider",
                  state: { from: 1 },
                }}
              >
                Unstarted Task
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link
                to={{
                  pathname: "/sider",
                  state: { from: 2 },
                }}
              >
                Ongoing Task
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link
                to={{
                  pathname: "/sider",
                  state: { from: 3 },
                }}
              >
                Finished Task
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ height: siderHeight }}>
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className="outHeader">
              <div className="tog">
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: toggle,
                  }
                )}
              </div>
              <div className="search">
                <PSearch setState={setState} />
              </div>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <PostedTask state={state} />
          </Content>
        </Layout>
      </Layout>
    );
  } else if (location.state.from === 2) {
    return (
      <Layout style={{ height: siderHeight }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link
                to={{
                  pathname: "/sider",
                  state: { from: 1 },
                }}
              >
                Unstarted Task
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link
                to={{
                  pathname: "/sider",
                  state: { from: 2 },
                }}
              >
                Ongoing Task
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link
                to={{
                  pathname: "/sider",
                  state: { from: 3 },
                }}
              >
                Finished Task
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ height: siderHeight }}>
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className="outHeader">
              <div className="tog">
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: toggle,
                  }
                )}
              </div>
              <div className="search">
                <PSearch setState={setState} />
              </div>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <OngoingTask state={state} />
          </Content>
        </Layout>
      </Layout>
    );
  } else {
    return (
      <Layout style={{ height: siderHeight }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={["3"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link
                to={{
                  pathname: "/sider",
                  state: { from: 1 },
                }}
              >
                Unstarted Task
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link
                to={{
                  pathname: "/sider",
                  state: { from: 2 },
                }}
              >
                Ongoing Task
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link
                to={{
                  pathname: "/sider",
                  state: { from: 3 },
                }}
              >
                Finished Task
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ height: siderHeight }}>
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className="outHeader">
              <div className="tog">
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: toggle,
                  }
                )}
              </div>
              <div className="search">
                <PSearch setState={setState} />
              </div>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <FinishedTask state={state} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
