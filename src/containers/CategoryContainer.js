import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Row, Button } from 'antd'

import {
  fetchCategoryAPI,
  addCategoryAPI,
  editCategoryAPI,
  deleteCategoryAPI,
  getCategoryAPI
} from '../actions/category';

import CategoryList from '../components/categories/CategoryList';
import CreateCategory from '../components/categories/CreateCategory';
import EditCategory from '../components/categories/EditCategory';

class CategoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      category:{},
      visibleCreate: false,
      visibleEdit: false,
      isValid: false,
      confirmLoading: false,
    }
    this._setStateCategory = this._setStateCategory.bind(this);
    this._handleAddCategory = this._handleAddCategory.bind(this);
    this._handleEditCategory = this._handleEditCategory.bind(this);
    this._handleDeleteCategory = this._handleDeleteCategory.bind(this);
    this._handleSearchCategory = this._handleSearchCategory.bind(this);
    this._selectCategory = this._selectCategory.bind(this);
    this._toggleModalCreate = this._toggleModalCreate.bind(this);
    this._toggleModalEdit = this._toggleModalEdit.bind(this);
  }

  componentDidMount() {
    this.props.handlGetCategoryAPI()
  }

  _resetState() {
    this.setState({
      category: {},
      visibleCreate: false,
      visibleEdit: false,
      isValid: false
    })
  }

  _setInvalidState() {
    this.setState({isValid: true})
  }

  _handleAddCategory() {
    const {category} = this.state;
    if(this._isCategoryValid()) {
      this.props.handleAddCategoryAPI(category)
      this._resetState()
    }else{
      this._setInvalidState()
    }
  }

  _handleEditCategory() {
    const { category } = this.state;

    if(this._isCategoryValid()) {
      this.props.handleEditCategoryAPI(category)
      this._resetState()
    }else{
      this._setInvalidState()
    }
  }

  _isCategoryValid() {
    const { category } = this.state;
    return category && category.name && category.note
  }

  _handleDeleteCategory(category) {
    this.props.handleDeleteCategoryAPI(category)
  }

  _handleSearchCategory(data) {
    this.props.handlGetCategoryAPI(data)
  }

  _setStateCategory(key, val) {
      let category = this.state.category;
      category[key] = val;
      this.setState({category})
  }

  _selectCategory(category){
    this.setState({
      category,
      visibleEdit: !this.state.visibleEdit
    })
  }

  _toggleModalCreate() {
    this.setState({
      visibleCreate: !this.state.visibleCreate,
      category: {},
      isValid: false
    })
  }

  _toggleModalEdit() {
    this.setState({
      visibleEdit: !this.state.visibleEdit,
      category: {},
      isValid: false
    })
  }

  render() {
    const { category, visibleCreate, visibleEdit,isValid } = this.state;
    const { loading } = this.props.category;

    return (
      <Row style={{flex: 1, padding: 20}}>
        <Row style={{marginTop: 10}}>
          <Button
            type='primary'
            onClick={this._toggleModalCreate}
          >
            Add Category
          </Button>
        </Row>

        <Row>
          <CategoryList
            loading={loading}
            data={this.props.category.categories}
            paging={this.props.category.paging}
            handleSelectCategory={this._selectCategory}
            handleDelete={this._handleDeleteCategory}
            handleSearch={this._handleSearchCategory}
          />
        </Row>

        <Row>
          <CreateCategory
            loading={loading}
            handleSubmit={this._handleAddCategory}
            handleSetState={this._setStateCategory}
            visible={visibleCreate}
            toggoleModal={this._toggleModalCreate}
            category={category}
          />

          <EditCategory
            isValid={isValid}
            loading={loading}
            handleSubmit={this._handleEditCategory}
            visible={visibleEdit}
            handleSetState={this._setStateCategory}
            toggoleModal={this._toggleModalEdit}
            category={category}
          />
        </Row>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  const { category } = state;
  return {
		category
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		handlGetCategoryAPI: (text) => dispatch(fetchCategoryAPI(text)),
    handleAddCategoryAPI: (data) => dispatch(addCategoryAPI(data)),
    handleEditCategoryAPI: (data) => dispatch(editCategoryAPI(data)),
    handleDeleteCategoryAPI: (data) => dispatch(deleteCategoryAPI(data)),
    handleSearchCategoryAPI: (data) => dispatch(getCategoryAPI(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
