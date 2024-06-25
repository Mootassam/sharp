import axios from "axios";
import authToken from "src/modules/auth/authToken";

const authAxios = axios.create({

  // Local link
  baseURL: "http://162.0.223.247:8080/api",

});

authAxios.interceptors.request.use(async function (options) {
  const token = authToken.get();
  if (token) {
    options.headers["Authorization"] = `Bearer ${token}`;
  }

  return options;
});

export default authAxios;
