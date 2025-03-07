import React from "react";
import { Dropdown, Menu, Avatar, Typography } from "antd";
import { LogoutOutlined, EditOutlined, CaretDownOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../redux/authSlice";

const { Text } = Typography;

const UserDropdown = () => {
  const dispatcher = useDispatch();
  const name = useSelector((state) => state.authSlice.user);
  const user = {
    name: name,
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with actual avatar URL
  };

  const menu = (
    <Menu>
      <Menu.Item key="edit" icon={<EditOutlined />}>
        Edit Profile
      </Menu.Item>
      <Menu.Item key="logout" onClick={() => dispatcher(logout())} icon={<LogoutOutlined />} danger>
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
        <CaretDownOutlined style={{ fontSize: '12px' }} />
      </div>
    </Dropdown>
  );
};

export default UserDropdown;
