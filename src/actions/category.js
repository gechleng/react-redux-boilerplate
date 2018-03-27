import axios from 'axios';
import baseUrl from '../constants/endPiont';

import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,

  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,

  EDIT_CATEGORY,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAILURE,

  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,

  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
} from '../constants/categoryActionType';


const getCategories = () => ({ type: GET_CATEGORIES })
const getCategoriesFailure = () => ({ type: GET_CATEGORIES_FAILURE })
const getCategoriesSuccess = (data) => {
	return {
		type: GET_CATEGORIES_SUCCESS,
		data: data
	}
}

export const fetchCategoryAPI = (text='') => {
  const per_page = 10;
  const url = baseUrl + 'category?' + 'per_page=' + per_page + '&search=' + text
  return (dispatch, getState) => {
    dispatch(getCategories())
    axios.get(url)
      .then(res => {
        dispatch(getCategoriesSuccess(res.data))
      })
      .catch(err => dispatch(getCategoriesFailure()))
  }
}

const addCategory = () => ({ type: ADD_CATEGORY })
const addCategoryFailure = () => ({ type: ADD_CATEGORY_FAILURE })
const addCategorySuccess = (data) => {
	return {
		type: ADD_CATEGORY_SUCCESS,
		data: data
	}
}

export const addCategoryAPI = (data) => {
  const url = baseUrl + 'category/'
  return (dispatch) => {
    dispatch(addCategory())
    axios.post(url, data)
      .then(res => {
        dispatch(addCategorySuccess(res.data))
        fetchCategoryAPI()
      })
      .catch(err => dispatch(addCategoryFailure()))
  }
}

const editCategory = () => ({ type: EDIT_CATEGORY })
const editCategoryFailure = () => ({ type: EDIT_CATEGORY_FAILURE })
const editCategorySuccess = (data) => {
	return {
		type: EDIT_CATEGORY_SUCCESS,
		data: data
	}
}

export const editCategoryAPI = (data) => {
  const url = baseUrl + 'category/' + data.id
  return (dispatch) => {
    dispatch(editCategory())
    axios.put(url, data)
      .then(res => {
        dispatch(editCategorySuccess(res.data))
        fetchCategoryAPI()
      })
      .catch(err => dispatch(editCategoryFailure()))
  }
}

const deleteCategory = () => ({ type: DELETE_CATEGORY })
const deleteCategoryFailure = () => ({ type: DELETE_CATEGORY_FAILURE })
const deleteCategorySuccess = (data) => {
	return {
		type: DELETE_CATEGORY_SUCCESS,
		data: data
	}
}

export const deleteCategoryAPI = (data) => {
  const url = baseUrl + 'category/' + data.id
  return (dispatch) => {
    dispatch(deleteCategory())
    axios.delete(url, data)
      .then(res => {
        dispatch(deleteCategorySuccess(res.data))
        fetchCategoryAPI()
      })
      .catch(err => dispatch(deleteCategoryFailure()))
  }
}

const getCategory = () => ({ type: GET_CATEGORY })
const getCategoryFailure = () => ({ type: GET_CATEGORY_FAILURE })
const getCategorySuccess = (data) => {
	return {
		type: GET_CATEGORY_SUCCESS,
		data: data
	}
}

export const getCategoryAPI = (data) => {
  const url = baseUrl + 'category/' + data
  return (dispatch) => {
    dispatch(getCategory())
    axios.get(url, data)
      .then(res => {
        dispatch(getCategorySuccess(res.data))
      })
      .catch(err => dispatch(getCategoryFailure()))
  }
}
