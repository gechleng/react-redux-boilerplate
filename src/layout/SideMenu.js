import React from 'react';
import { Layout, Menu, Icon  } from 'antd';
import { BrowserRouter as Router,Link } from 'react-router-dom'

const { Sider } = Layout;
const SubMenu = Menu;

const SideMenu = ({key, handleSeleteMenu}) =>
  <Router>
    <Sider>
      <Menu
        theme="dark"
        defaultSelectedKeys={key}
        mode="inline"
        onSelect={({ item, key, keyPath }) => handleSeleteMenu(key)}
      >
          <Menu.Item key="1">
            <Link to="/product">product</Link>
           </Menu.Item>
          <Menu.Item key="2">
            <Icon type="deskop" />
            <span>Category</span>
          </Menu.Item>
      </Menu>
    </Sider>
  </Router>

export default SideMenu;
