import { SET_PRODUCT, EDIT_PRODUCT } from './productType';

export const setProduct = (product) => {
	return {
		type: SET_PRODUCT,
		payload: product,
	};
};

export const editProduct = (id, newProduct) => {
	return {
		type: EDIT_PRODUCT,
		payload: { id, newProduct },
	};
};
