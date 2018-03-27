import { combineReducers } from 'redux';

import product from './product';
import category from './category';

const rootReducer = combineReducers({
	product,
	category
})

export default rootReducer;
