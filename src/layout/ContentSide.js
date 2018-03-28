import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import CategoryContainer from '../containers/CategoryContainer';
import ProductContainer from '../containers/ProductContainer';

const { Content } = Layout;

const { content } = Layout;

const ContentSide = () =>
  <Content style={{padding: 10}}>
    <Router>
      <div>
        <Route exact path="/" component={ProductContainer} />
        <Route path="/category" component={CategoryContainer} />
        <Route path="/product" component={ProductContainer} />
      </div>
    </Router>
  </Content>

export default ContentSide;
