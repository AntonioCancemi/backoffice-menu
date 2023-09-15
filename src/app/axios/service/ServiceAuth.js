import "@/app/axios/api";
import axios from "axios";
export const registerPostDTO = (data) => {
  return axios.post("http://localhost:8082/api/auth/register", data);
};
export const loginPostDTO = (data) => {
  return axios.post("http://localhost:8082/api/auth/signin", data);
};
export const getUserData = (username) => {
  return axios.get(`http://localhost:8082/api/auth/${username}`);
};
