import axios from "axios";
import authToken from "src/modules/auth/authToken";

const authAxios = axios.create({
  // Local link
  // baseURL: "https://thelightcareerpathway.com/api",
  baseURL: "http://localhost:8080/api",
  // baseURL: "http://162.213.249.168:8087/api",

});

authAxios.interceptors.request.use(async function (options) {
  const token = authToken.get();
  if (token) {
    options.headers["Authorization"] = `Bearer ${token}`;
  }

  return options;
});

export default authAxios;
