import axios from 'axios';

// const BASE_URL = 'http://139.59.64.246:5000';
const BASE_URL = 'http://localhost:5000';
// http://localhost:5000/subcategories/64df920aa873e2082fc90c61

axios.defaults;

export const api = {
	getCategories: () => axios.get(BASE_URL + '/categories'),
	getSubCategories: (id) => axios.get(BASE_URL + '/subcategories/' + id),
	getProducts: (id) => axios.get(BASE_URL + '/products/' + id),
	getSubProducts: (id) => axios.get(BASE_URL + '/subproducts/' + id),
};
