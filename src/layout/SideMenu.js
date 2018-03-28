import React from 'react';
import { Layout, Menu, Icon  } from 'antd';

const { Sider } = Layout;
const SubMenu = Menu;

const SideMenu = ({key, handleSeleteMenu}) =>
  <Sider>
    <Menu
      theme="dark"
      defaultSelectedKeys={key}
      mode="inline"
      onSelect={({ item, key, keyPath }) => handleSeleteMenu(key)}
    >
      <Menu.Item key="1">
        <Icon type="pie-chart" />
        <span>Product</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="deskop" />
        <span>Category</span>
      </Menu.Item>
    </Menu>
</Sider>

export default SideMenu;
