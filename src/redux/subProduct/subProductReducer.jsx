/* eslint-disable no-case-declarations */
import { EDIT_SUBPRODUCT, SET_SUBPRODUCT } from './subProductType';

const initialState = {
	subProduct: '',
};

export const subProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SUBPRODUCT:
			return {
				...state,
				subProduct: action.payload,
			};
		case EDIT_SUBPRODUCT:
			const updatedSubProduct = state.subProduct.map((el) =>
				el.id === action.payload.id ? action.payload.updatedSubProduct : el,
			);
			return {
				...state,
				subProduct: updatedSubProduct,
			};
		default:
			return state;
	}
};
