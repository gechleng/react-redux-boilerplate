import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './App.css';
import 'antd/dist/antd.css';

import HeaderSide from './layout/HeaderSide';
import FooterSide from './layout/FooterSide';

import CategoryContainer from './containers/CategoryContainer';
import ProductContainer from './containers/ProductContainer';

const { Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: '1'
    }
  }

  _handleSeleteMenu(key) {
    this.setState({key})
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

              <FooterSide />
            </Layout>

          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
