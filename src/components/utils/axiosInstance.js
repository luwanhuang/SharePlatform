import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8181",
  // baseURL: "https://shareplatformreact.azurewebsites.net",
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
export default instance;
