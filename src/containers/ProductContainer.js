import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import {
  addProductAPI,
  getProductsAPI,
  updateProductsAPI,
  deleteProductsAPI
 } from '../actions/product';

import CreateProduct from '../components/products/CreateProduct';
import EditProduct from '../components/products/EditProduct';
import ProductList from '../components/products/ProductList';

class ProductContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      category: '',
      product: {},
    }
    this._setStateCategory = this._setStateCategory.bind(this);
    this._setStateProduct = this._setStateProduct.bind(this);
    this._handleCreateProduct = this._handleCreateProduct.bind(this);
    this._handleEditProduct = this._handleEditProduct.bind(this);
    this._handleSeleteProduct = this._handleSeleteProduct.bind(this);
    this._handleDeleteProduct = this._handleDeleteProduct.bind(this);
    this._handleSearchProduct = this._handleSearchProduct.bind(this);
  }

  componentWillMount() {
    this.props.handleGetProductsAPI();
  }

  _setStateCategory(category) {
    this.setState({category})
  }

  _setStateProduct(key, val) {
    let product = this.state.product;
    product[key] = val;
    this.setState({product})
  }

  _handleCreateProduct() {
    let product = this.state.product;
    product.category_id = this.state.category;
    product.expire_date = moment(product.expire_date).format('YYYY-MM-DD');
    this.props.handeAddProductAPI(product)
  }

  _handleEditProduct() {
    let product = this.state.product;
    product.category_id = this.state.category;
    this.props.handleUpdateProductAPI(product);
    this.setState({
      product: {},
      category: ''
    })
  }

  _handleDeleteProduct(product) {
    this.props.handleDeleteProductsAPI(product)
  }

  _handleSearchProduct(text){
    this.props.handleGetProductsAPI(text)
  }

  _handleSeleteProduct(product) {
    this.setState({
      product,
      category: product.category_id
    })
  }

  render() {
    const { category, product } = this.state;
    console.log('product', this.props.product);
    console.log('cate',this.props.category);
    return (
      <div>
        <CreateProduct
          product={product}
          category={category}
          categories={this.props.category.categories}
          handleSetStateCategory={this._setStateCategory}
          handleSetStateProduct={this._setStateProduct}
          handleCreateProduct={this._handleCreateProduct}
        />

        <EditProduct
          edit={true}
          product={product}
          category={category}
          categories={this.props.category.categories}
          handleSetStateCategory={this._setStateCategory}
          handleSetStateProduct={this._setStateProduct}
          handleEditProduct={this._handleEditProduct}
        />

        <ProductList
          data={this.props.product.products}
          handleSeleteProduct={this._handleSeleteProduct}
          handleDeleteProduct={this._handleDeleteProduct}
          handleSearchProduct={this._handleSearchProduct}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { category, product } = state;
  return {
		category,
    product
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handeAddProductAPI: (data) => dispatch(addProductAPI(data)),
    handleGetProductsAPI: (data) => dispatch(getProductsAPI(data)),
    handleUpdateProductAPI: (data) => dispatch(updateProductsAPI(data)),
    handleDeleteProductsAPI: (data) => dispatch(deleteProductsAPI(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
