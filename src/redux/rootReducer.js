import { combineReducers } from 'redux';
import { categoryReducer } from './category/categoryReducer';
import { subCategoryReducer } from './subCategory/subCategoryReducer';

export const rootReducer = combineReducers({
	category: categoryReducer,
	subCategory: subCategoryReducer,
});
