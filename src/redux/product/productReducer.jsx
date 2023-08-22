/* eslint-disable no-case-declarations */
import { EDIT_PRODUCT, SET_PRODUCT } from './productType';

const initialState = {
	product: '',
};

export const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PRODUCT:
			return {
				...state,
				product: action.payload,
			};
		case EDIT_PRODUCT:
			const updatedProduct = state.product.map((el) =>
				el.id === action.payload.id ? action.payload.updatedProduct : el,
			);
			return {
				...state,
				product: updatedProduct,
			};
		default:
			return state;
	}
};
