import axios from "axios";
import { BASE_URL } from "./api";

const token = localStorage.getItem("token");

export default {
  getUsersByInput: (body) =>
    axios.get(BASE_URL + `/users?username=${body}`, {
      headers: { token: token },
    }),
};
