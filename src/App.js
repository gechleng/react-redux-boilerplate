import React, { Component } from 'react';
import { Row, Col } from 'antd';

import logo from './logo.svg';

import './App.css';
import 'antd/dist/antd.css';

import CategoryContainer from './containers/CategoryContainer';
import ProductContainer from './containers/ProductContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Row>
          <Col span={12} style={{backgroundColor: '#ffffcc', padding: 10}}>
            <ProductContainer />
          </Col>
          <Col span={12} style={{backgroundColor: '#ccffcc', padding: 10}}>
            <CategoryContainer />
          </Col>
        </Row>
      </div>
    );
  }
}



export default App;
