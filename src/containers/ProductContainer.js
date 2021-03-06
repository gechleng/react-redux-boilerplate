import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Button } from 'antd';
import moment from 'moment';

import {
  addProductAPI,
  getProductsAPI,
  updateProductsAPI,
  deleteProductsAPI
 } from '../actions/product';

 import { fetchCategoryAPI } from '../actions/category';

import CreateProduct from '../components/products/CreateProduct';
import EditProduct from '../components/products/EditProduct';
import ProductList from '../components/products/ProductList';

class ProductContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      category: '',
      visibleCreate: false,
      visibleEdit: false,
      product: {},
      isValid: false,
    }
    this._setStateCategory = this._setStateCategory.bind(this);
    this._setStateProduct = this._setStateProduct.bind(this);
    this._handleCreateProduct = this._handleCreateProduct.bind(this);
    this._handleEditProduct = this._handleEditProduct.bind(this);
    this._handleSeleteProduct = this._handleSeleteProduct.bind(this);
    this._handleDeleteProduct = this._handleDeleteProduct.bind(this);
    this._handleSearchProduct = this._handleSearchProduct.bind(this);
    this._toggleModalCreate = this._toggleModalCreate.bind(this);
    this._toggleModalEdit = this._toggleModalEdit.bind(this);
  }

  componentWillMount() {
    this.props.handlGetCategoryAPI()
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

  _resetState() {
    this.setState({
      product: {},
      category: '',
      visibleCreate: false,
      visibleEdit: false,
      isValid: false
    })
  }

  _setInvalidState() {
    this.setState({ isValid: true })
  }

  _handleCreateProduct() {
    let product = this.state.product;
    product.category_id = this.state.category;
    product.expire_date = moment(product.expire_date).format('YYYY-MM-DD') || moment().format('YYYY-MM-DD');
    if(this._isproductValid()){
      this.props.handeAddProductAPI(product)
      this._resetState()
    }else{
      this._setInvalidState()
    }
  }

  _handleEditProduct() {
    let product = this.state.product;
    product.category_id = this.state.category;
    if(this._isproductValid()){
      this.props.handleUpdateProductAPI(product)
      this._resetState()
    }else{
      this._setInvalidState()
    }
  }

  _isproductValid() {
    const { product, category } = this.state;
    return category && product && product.name && product.price && product.note
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
      category: product.category_id,
      visibleEdit: !this.state.visibleEdit
    })
  }

  _toggleModalCreate() {
    this.setState({
      visibleCreate: !this.state.visibleCreate,
      product: {},
      category: '',
    })
  }

  _toggleModalEdit() {
    this.setState({visibleEdit: !this.state.visibleEdit})
  }

  render() {
    const { category, product, visibleCreate, visibleEdit, isValid } = this.state;
    const { loading } = this.props.product;

    return (
      <Row style={{padding:20}}>
        <Row style={{marginTop: 10}}>
          <Button
            type='primary'
            onClick={this._toggleModalCreate}
          >
            Add Product
          </Button>
        </Row>

        <Row>
          <ProductList
            data={this.props.product.products}
            loading={loading}
            handleSeleteProduct={this._handleSeleteProduct}
            handleDeleteProduct={this._handleDeleteProduct}
            handleSearchProduct={this._handleSearchProduct}
          />
        </Row>

        <Row>
          <CreateProduct
            isValid={isValid}
            loading={loading}
            product={product}
            category={category}
            categories={this.props.category.categories}
            visible={visibleCreate}
            handleSetStateCategory={this._setStateCategory}
            handleSetStateProduct={this._setStateProduct}
            handleSubmit={this._handleCreateProduct}
            toggoleModal={this._toggleModalCreate}
          />

          <EditProduct
            isValid={isValid}
            loading={loading}
            visible={visibleEdit}
            product={product}
            category={category}
            categories={this.props.category.categories}
            handleSetStateCategory={this._setStateCategory}
            handleSetStateProduct={this._setStateProduct}
            toggoleModal={this._toggleModalEdit}
            handleSubmit={this._handleEditProduct}
          />
        </Row>
      </Row>
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
    handlGetCategoryAPI: (text) => dispatch(fetchCategoryAPI(text)),
    handeAddProductAPI: (data) => dispatch(addProductAPI(data)),
    handleGetProductsAPI: (data) => dispatch(getProductsAPI(data)),
    handleUpdateProductAPI: (data) => dispatch(updateProductsAPI(data)),
    handleDeleteProductsAPI: (data) => dispatch(deleteProductsAPI(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
