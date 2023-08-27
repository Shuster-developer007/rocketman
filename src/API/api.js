import axios from "axios";

const BASE_URL = "http://localhost:5000";

const token = localStorage.getItem("token");

axios.defaults.headers.common["Content-Type"] = "application/json";
if (token) axios.defaults.headers.common["token"] = token;

export const api = {
  getCategories: (page) => axios.get(BASE_URL + `/categories?page=${page}`),
  getSubCategories: (id, page) =>
    axios.get(BASE_URL + `/subcategories/${id}?page=${page}`),
  getSettingsPayment: () => axios.get(BASE_URL + "/payments"),
  getSettingDrivers: (page) => axios.get(BASE_URL + `/drivers?page=${page}`),
  getProducts: (id , page) => axios.get(BASE_URL + `/products/${id}?page=${page}`),
  getSubProducts: (id , page) => axios.get(BASE_URL + `/sub_products/${id}?page=${page}` ),
  getAdmins: () => axios.get(BASE_URL + "/admins"),
  getComplaitns: () => axios.get(BASE_URL + "/complaints"),
  deleteAdmin: (id) => axios.delete(BASE_URL + "/delete/admin/" + id),
  createAdmin: (createAdmin) =>
    axios.post(BASE_URL + "/create/admin", createAdmin),
  deletePayment: (id) => axios.delete(BASE_URL + "/payment/" + id),
  postCategory: (category) =>
    axios.post(BASE_URL + "/create/category", category),
  postSubCategory: (subCategory) =>
    axios.post(BASE_URL + "/create/subcategory", subCategory),
  postProduct: (product) => axios.post(BASE_URL + "/create/product", product),
  postSubProduct: (subProduct) =>
    axios.post(BASE_URL + "/create/sub_product", subProduct),
  updateCategory: (id, category) =>
    axios.put(BASE_URL + "/category/" + id, category),
  createDriver: (driverCreate) =>
    axios.post(BASE_URL + "/create/driver", driverCreate),
  createPayment: (createPayment) =>
    axios.post(BASE_URL + "/create/payment", createPayment),
  getOnePayment: (id) => axios.get(BASE_URL + "/payment/" + id),
  updatedPayment: (id, updatePayment) =>
    axios.put(BASE_URL + "/payment/" + id, updatePayment),
  deleteTakliflar: (id) => axios.delete(BASE_URL + "/complaint/" + id),
  updateDriver: (id, updatedDriver) =>
    axios.put(BASE_URL + "/update/driver/" + id, updatedDriver),
  getOneDriver: (id) => axios.get(BASE_URL + "/driver/" + id),
  getClient: () => axios.get(BASE_URL + "/users"),
  getOrder_user: (id) => axios.get(BASE_URL + "/order/user/" + id),
  getOneUser: (id) => axios.get(BASE_URL + "/user/" + id),
  getOneOrderInfo: (id) => axios.get(BASE_URL + "/order/" + id),
  getOrders: (status, page) =>
    axios.get(BASE_URL + `/orders?status=${status}&page=${page}`),
  getOrderDriver: () => axios.get(BASE_URL + "/driver/enabled"),
  addDriverOrder: (id, driver_id) =>
    axios.put(BASE_URL + "/add/driver/" + id, driver_id),

  login: (admin) => axios.post(BASE_URL + "/login", admin),

  updateStatusOrder: (id, status) =>
    axios.put(BASE_URL + "/update/order/status/" + id, status),
  getOneAdmin: (id) => axios.get(BASE_URL + "/admin/" + id),
  editAdmin: (id, body) => axios.put(BASE_URL + "/update/admin/" + id, body),
  getSubProductOrder: (id) => axios.get(BASE_URL + "/order/sub_products/" + id),
  getCategoryById: (id) => axios.get(BASE_URL + "/category/" + id),
  editCategory: (id, data) => axios.put(BASE_URL + "/category/" + id, data),
  getSubCategoryById: (id) => axios.get(BASE_URL + "/subcategory/" + id),
  editSubCategory: (id, data) =>
    axios.put(BASE_URL + "/update/subcategory/" + id, data),
  getProductById: (id) => axios.get(BASE_URL + "/product/" + id),
  editProduct: (id, data) =>
    axios.put(BASE_URL + "/update/product/" + id, data),
  getSubProductById: (id) => axios.get(BASE_URL + "/sub_product/" + id),
  editSubProduct: (id, data) =>
    axios.put(BASE_URL + "/update/sub_product/" + id, data),
};
