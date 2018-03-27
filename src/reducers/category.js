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
import _ from 'lodash';

const initialState = {
  categories: [],
  loading: false,
  paging: {}
}

export default function category(state=initialState, action){
  switch (action.type) {
		case GET_CATEGORIES: {
			return { ...state, loading: true }
		}
    case GET_CATEGORIES_SUCCESS: {
			return {
        ...state,
        categories: action.data.data,
        paging: action.data.paging,
        loading: false
      }
		}
    case GET_CATEGORIES_FAILURE: {
			return { ...state, loading: false }
		}

    case ADD_CATEGORY: {
			return { ...state, loading: true }
		}
    case ADD_CATEGORY_SUCCESS: {
      return {
        ...state,
        categories: [...state.categories, action.data],
        loading: false
      }
		}
    case ADD_CATEGORY_FAILURE: {
			return { ...state, loading: false }
		}

    case EDIT_CATEGORY: {
			return { ...state, loading: true }
		}
    case EDIT_CATEGORY_SUCCESS: {
      let categories = _.map(state.categories, (category) => category.id == action.data.id ? action.data : category)
      return {
        ...state,
        categories: categories,
        loading: false
      }
		}
    case EDIT_CATEGORY_FAILURE: {
			return { ...state, loading: false }
		}

    case DELETE_CATEGORY: {
			return { ...state, loading: true }
		}
    case DELETE_CATEGORY_SUCCESS: {
      let categories = _.remove(state.categories, (category) => category.id != action.data.id)
      return {
        ...state,
        categories: categories,
        loading: false
      }
		}
    case DELETE_CATEGORY_FAILURE: {
			return { ...state, loading: false }
		}

    case GET_CATEGORY: {
			return { ...state, loading: true }
		}
    case GET_CATEGORY_SUCCESS: {
      return {
        ...state,
        categories: [action.data],
        loading: false
      }
		}
    case GET_CATEGORY_FAILURE: {
			return { ...state, loading: false }
		}

		default:
			return state;
	}
}
