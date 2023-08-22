import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
const token = localStorage.getItem("token")
axios.defaults.headers.common["Content-Type"] = "application/json"
if (token) axios.defaults.headers.common['token'] = token;
export const api = {
    getCategories: () => axios.get(BASE_URL + '/categories'),
    getSubCategories: (id) => axios.get(BASE_URL + '/subcategories/' + id),
    getSettingPayments: () => axios.get(BASE_URL + "/payments"),
    getSettingDrivers: () => axios.get(BASE_URL + "/drivers")
};
