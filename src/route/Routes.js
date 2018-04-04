import React from 'react';
import { BrowserRouter } from 'react-router';

import App from '../App';
import ProductContainer from '../containers/ProductContainer';
import CategoryContainer from '../containers/CategoryContainer';
const Route = () =>
  <BrowserRouter>
    <div>
      <Route path='/product' component={ProductContainer} />
      <Route path='/category' component={CategoryContainer} />
    </div>
  </BrowserRouter>

export default Route;
