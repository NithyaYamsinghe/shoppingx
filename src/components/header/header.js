import React from "react";
import { PageHeader, Button } from "antd";
import "./header.css";
import { Link } from "react-router-dom";

export default function header(props) {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="ShoppingX"
        subTitle="Welcome Yohan"
        extra={[
          <Button>My Profile</Button>,
          <Button type="primary">Sign Out</Button>,
        ]}
      />
    </div>
  );
}
