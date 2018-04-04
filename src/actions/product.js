import axios from 'axios';
import baseUrl from '../constants/endPiont';

import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESS,
	ADD_PRODUCT_FAILURE,

	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAILURE,

	UPDATE_PRODUCT,
	UPDATE_PRODUCT_SUCCESS,
	UPDATE_PRODUCT_FAILURE,

	DELETE_PRODUCT,
	DELETE_PRODUCT_SUCCESS,
	DELETE_PRODUCT_FAILURE,
} from '../constants/productActionType';

const addProduct = () => ({ type: ADD_PRODUCT })
const addProductFailure = () => ({ type: ADD_PRODUCT_FAILURE })
const addProductSuccess = data => {
	return {
		type: ADD_PRODUCT_SUCCESS,
		data: data
	}
}

export const addProductAPI = data => {
	const url = baseUrl + 'product/';
	return dispatch => {
    dispatch(addProduct())
    axios.post(url, data)
      .then(res => {
        dispatch(addProductSuccess(res.data))
      })
      .catch(err => dispatch(addProductFailure()))
  }
}

const getProducts = () => ({ type: GET_PRODUCTS })
const getProductsFailure = () => ({ type: GET_PRODUCTS_FAILURE })
const getProductsSuccess = data => {
	return {
		type: GET_PRODUCTS_SUCCESS,
		data: data
	}
}

export const getProductsAPI = (text='') => {
  const url = baseUrl + 'product?&search=' + text;
	return dispatch => {
    dispatch(getProducts())
		axios.get(url)
      .then(res => dispatch(getProductsSuccess(res.data)))
      .catch(err => dispatch(getProductsFailure()))
  }
}

const updateProduct = () => ({ type: UPDATE_PRODUCT })
const updateProductFailure = () => ({ type: UPDATE_PRODUCT_FAILURE })
const updateProductSuccess = data => {
	return {
		type: UPDATE_PRODUCT_SUCCESS,
		data: data
	}
}

export const updateProductsAPI = data => {
  const url = baseUrl + 'product/' + data.id;
	return dispatch => {
    dispatch(updateProduct())
		axios.put(url, data)
      .then(res => dispatch(updateProductSuccess(res.data)))
      .catch(err => dispatch(updateProductFailure()))
  }
}

const deleteProduct = () => ({ type: DELETE_PRODUCT })
const deleteProductFailure = () => ({ type: DELETE_PRODUCT_FAILURE })
const deleteProductSuccess = data => {
	return {
		type: DELETE_PRODUCT_SUCCESS,
		data: data
	}
}

export const deleteProductsAPI = data => {
  const url = baseUrl + 'product/' + data.id;
	return dispatch => {
    dispatch(deleteProduct())
		axios.delete(url)
      .then(res => dispatch(deleteProductSuccess(res.data)))
      .catch(err => dispatch(deleteProductFailure()))
  }
}
