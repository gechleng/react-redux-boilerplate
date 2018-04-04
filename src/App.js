import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import logo from './logo.svg';

import './App.css';
import 'antd/dist/antd.css';

import SideMenu from './layout/SideMenu';
import HeaderSide from './layout/HeaderSide';
import FooterSide from './layout/FooterSide';
import ContentSide from './layout/ContentSide';

import CategoryContainer from './containers/CategoryContainer';
import ProductContainer from './containers/ProductContainer';

const { Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this._handleSeleteMenu = this._handleSeleteMenu.bind(this)
  }

  _handleSeleteMenu(key) {
    let url = key == 1 ? '/product' : '/Category';
    window.location.href = url;
  }

  render() {
    return (
      <Router>
        <div className="App" style={{flex: 1}}>
          <Layout style={{flex: 1}}>
            <Sider>
              <Menu
                theme="dark"
                defaultSelectedKeys='1'
                mode="inline"
                onSelect={({ item, key, keyPath }) => this._handleSeleteMenu(key)}
              >
                  <Menu.Item key="1">
                    <Link to="/product">product</Link>
                   </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/category">Category</Link>
                  </Menu.Item>
              </Menu>
            </Sider>

            <Layout>
              <HeaderSide />
              <div>
                <Route exact path="/" component={ProductContainer} />
                <Route path="/category" component={CategoryContainer} />
                <Route path="/product" component={ProductContainer} />
              </div>
              <ContentSide />
              <FooterSide />
            </Layout>

          </Layout>
        </div>
      </Router>
    );
  }
}


// <div className="App" style={{flex: 1}}>
//   <Layout style={{flex: 1}}>
//     <SideMenu
//       handleSeleteMenu={this._handleSeleteMenu}
//     />
//     <Layout>
//       <HeaderSide />
//       <ContentSide />
//       <FooterSide />
//     </Layout>
//   </Layout>
// </div>


export default App;
