import { SET_CATEGORY, EDIT_CATEGORY } from './categoryType';

export const setCategory = (category) => {
	return {
		type: SET_CATEGORY,
		payload: category,
	};
};

export const editCategory = (id, newCategory) => {
	return {
		type: EDIT_CATEGORY,
		payload: { id, newCategory },
	};
};
