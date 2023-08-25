import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const token = localStorage.getItem('token');

if (token) axios.defaults.headers.common['token'] = token;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const api = {
	getCategories: () => axios.get(BASE_URL + '/categories'),
	getSubCategories: (id) => axios.get(BASE_URL + '/subcategories/' + id),
	getSettingsPayment: () => axios.get(BASE_URL + '/payments'),
	getSettingDrivers: () => axios.get(BASE_URL + '/drivers'),
	getProducts: (id) => axios.get(BASE_URL + '/products/' + id),
	getSubProducts: (id) => axios.get(BASE_URL + '/sub_products/' + id),
	getAdmins: () => axios.get(BASE_URL + '/admins'),
	getComplaitns: () => axios.get(BASE_URL + '/complaints'),
	deleteAdmin: (id) => axios.delete(BASE_URL + '/delete/admin/' + id),
	createAdmin: (createAdmin) =>
		axios.post(BASE_URL + '/create/admin', createAdmin),
	deletePayment: (id) => axios.delete(BASE_URL + '/payment/' + id),
	postCategory: (category) =>
		axios.post(BASE_URL + '/create/category', category),
	postSubCategory: (subCategory) =>
		axios.post(BASE_URL + '/create/subcategory', subCategory),
	postProduct: (product) => axios.post(BASE_URL + '/create/product', product),
	postSubProduct: (subProduct) =>
		axios.post(BASE_URL + '/create/sub_product', subProduct),
	updateCategory: (id, category) => axios.put(BASE_URL + '/category/' + id, category),
	createDriver: (driverCreate) => axios.post(BASE_URL + '/create/driver', driverCreate),
	createPayment: (createPayment) => axios.post(BASE_URL + "/create/payment", createPayment),
	getOnePayment: (id) => axios.get(BASE_URL + "/payment/" + id),
	updatedPayment: (id, updatePayment) => axios.put(BASE_URL + "/payment/" + id, updatePayment),
	deleteTakliflar: (id) => axios.delete(BASE_URL + "/complaint/" + id),
	updateDriver: (id, updatedDriver) => axios.put(BASE_URL + "/update/driver/" + id, updatedDriver),
	getOneDriver: (id) => axios.get(BASE_URL + "/driver/" + id),
	getClient: () => axios.get(BASE_URL + "/users"),
	getOrder_user: (id) => axios.get(BASE_URL + "/order/user/" + id),
	getOneUser: (id) => axios.get(BASE_URL + "/user/" + id),
	getOneOrderInfo: (id) => axios.get(BASE_URL + "/order/" + id),
	getOrders: (count) => axios.get(BASE_URL + "/orders?page=" + count),
	getOrderDriver: () => axios.get(BASE_URL + "/driver/enabled"),
	addDriverOrder: (id, driver_id) => axios.put(BASE_URL + "/add/driver/" + id, driver_id),



	login: (admin) => axios.post(BASE_URL + '/login', admin),
};
