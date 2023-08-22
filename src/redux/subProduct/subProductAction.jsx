import { SET_SUBPRODUCT, EDIT_SUBPRODUCT } from './subProductType';

export const setSubProduct = (subProduct) => {
	return {
		type: SET_SUBPRODUCT,
		payload: subProduct,
	};
};

export const editSubProduct = (id, newSubProduct) => {
	return {
		type: EDIT_SUBPRODUCT,
		payload: { id, newSubProduct },
	};
};
