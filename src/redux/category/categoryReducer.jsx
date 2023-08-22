/* eslint-disable no-case-declarations */
import { EDIT_CATEGORY, SET_CATEGORY } from './categoryType';

const initialState = {
	category: '',
};

export const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CATEGORY:
			return {
				...state,
				category: action.payload,
			};
		case EDIT_CATEGORY:
			const updatedCategory = state.category.map((el) =>
				el.id === action.payload.id ? action.payload.updatedCategory : el,
			);
			return {
				...state,
				category: updatedCategory,
			};
		default:
			return state;
	}
};
