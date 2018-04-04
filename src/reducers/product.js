import _ from 'lodash';
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

const initialState = {
  products: [],
  loading: false
}

export default function product(state=initialState, action){
	switch (action.type) {
    case ADD_PRODUCT: {
			return { ...state, loading: true }
		}
    case ADD_PRODUCT_SUCCESS: {
			return {
        ...state,
        products: [...state.products, action.data],
        loading: false
      }
		}
    case ADD_PRODUCT_FAILURE: {
			return { ...state, loading: false }
		}

		case GET_PRODUCTS: {
			return { ...state, loading: true }
		}
		case GET_PRODUCTS_SUCCESS: {
			return {
				...state,
				products: action.data.data,
				loading: false
			}
		}
		case GET_PRODUCTS_FAILURE: {
			return { ...state, loading: false }
		}

		case UPDATE_PRODUCT: {
			return { ...state, loading: true }
		}
    case UPDATE_PRODUCT_SUCCESS: {
			let products = _.map(state.products, product => product.id == action.data.id ? action.data : product)

			return {
        ...state,
        products,
        loading: false
      }
		}
    case UPDATE_PRODUCT_FAILURE: {
			return { ...state, loading: false }
		}

		case DELETE_PRODUCT: {
			return { ...state, loading: true }
		}
    case DELETE_PRODUCT_SUCCESS: {
			let products = _.remove(state.products, product => product.id != action.data.id)

			return {
        ...state,
        products,
        loading: false
      }
		}
    case DELETE_PRODUCT_FAILURE: {
			return { ...state, loading: false }
		}

		default:
			return state;
	}
}
