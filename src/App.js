import React, { Component } from 'react';
import { Layout } from 'antd';

import logo from './logo.svg';

import './App.css';
import 'antd/dist/antd.css';

import SideMenu from './layout/SideMenu';
import HeaderSide from './layout/HeaderSide';
import FooterSide from './layout/FooterSide';
import ContentSide from './layout/ContentSide';

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
      <div className="App" style={{flex: 1}}>
        <Layout style={{flex: 1}}>
          <SideMenu
            handleSeleteMenu={this._handleSeleteMenu}
          />
          <Layout>
            <HeaderSide />
            <ContentSide />
            <FooterSide />
          </Layout>
        </Layout>

      </div>
    );
  }
}

// <Row>
//   <Col span={12} style={{backgroundColor: '#ffffcc', padding: 10}}>
//     <ProductContainer />
//   </Col>
//   <Col span={12} style={{backgroundColor: '#ccffcc', padding: 10}}>
//     <CategoryContainer />
//   </Col>
// </Row>


export default App;
