/* eslint-disable no-case-declarations */
import { EDIT_SUBCATEGORY, SET_SUBCATEGORY } from './subCategoryType';

const initialState = {
	subCategory: '',
};

export const subCategoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SUBCATEGORY:
			return {
				...state,
				subCategory: action.payload,
			};
		case EDIT_SUBCATEGORY:
			const updatedSubCategory = state.todo.map((el) =>
				el.id === action.payload.id ? action.payload.updatedTodo : el,
			);
			return {
				...state,
				subCategory: updatedSubCategory,
			};
		default:
			return state;
	}
};
