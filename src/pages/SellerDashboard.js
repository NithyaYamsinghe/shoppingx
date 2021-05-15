import React from "react";
import { Layout, Menu, Divider } from "antd";
import PageHeader from "../components/header/header";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" style={{ height: "68px" }}></div>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                {" "}
                <Link to="/listings">Listings </Link>
              </Menu.Item>

              <Menu.Item key="2">
                {" "}
                <Link to="/listitem">List Item</Link>
              </Menu.Item>

              <Menu.Item key="3">
                {" "}
                <Link to="/myprofile">My Profile</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              <PageHeader handleHeaderMenu={this.handleHeaderMenu} />
            </Header>
            <Divider />
            <Content style={{ margin: "0 16px" }}>
              <div className="site-layout-background">
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              ShoppingX ©2021 Created By Legends Group
            </Footer>
          </Layout>
        </Layout>
      </>
    );
  }
}
