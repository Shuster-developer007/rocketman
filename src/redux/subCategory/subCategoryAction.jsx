import { SET_SUBCATEGORY, EDIT_SUBCATEGORY } from './subCategoryType';

export const setSubCategory = (subCategory) => {
	return {
		type: SET_SUBCATEGORY,
		payload: subCategory,
	};
};

export const editSubCategory = (id, newSubCategory) => {
	return {
		type: EDIT_SUBCATEGORY,
		payload: { id, newSubCategory },
	};
};
