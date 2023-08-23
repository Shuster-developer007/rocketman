import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const token = localStorage.getItem("token")

if (token) axios.defaults.headers.common['token'] = token
axios.defaults.headers.common["Content-Type"] = "application/json"

export const api = {
    getCategories: () => axios.get(BASE_URL + '/categories'),
    getSubCategories: (id) => axios.get(BASE_URL + '/subcategories/' + id),
    getSettingsPayment: () => axios.get(BASE_URL + "/payments"),
    getSettingDrivers: () => axios.get(BASE_URL + "/drivers"),
    getProducts: (id) => axios.get(BASE_URL + '/products/' + id),
    getSubProducts: (id) => axios.get(BASE_URL + '/subproducts/' + id),
    getAdmins: () => axios.get(BASE_URL + "/admins"),
    getComplaitns: () => axios.get(BASE_URL + "/complaints"),
    deleteAdmin: (id) => axios.delete(BASE_URL + "/delete/admin/" + id)

};
