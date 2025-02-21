import React from "react";
import { Dropdown, Menu, Avatar, Typography } from "antd";
import { UserOutlined, LogoutOutlined, EditOutlined } from "@ant-design/icons";

const { Text } = Typography;

const UserDropdown = () => {
  const user = {
    name: "Bryan Adams",
    role: "Manager",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with actual avatar URL
  };

  const menu = (
    <Menu>
      <Menu.Item key="edit" icon={<EditOutlined />}>
        Edit Profile
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} danger>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
      >
        <Avatar src={user.avatar} size="large" />
        <div>
          <Text strong>{user.name}</Text>
          <br />
          <Text type="secondary" style={{ fontSize: "12px" }}>
            {user.role}
          </Text>
        </div>
      </div>
    </Dropdown>
  );
};

export default UserDropdown;
