// import axios from "axios";

// const API = process.env.REACT_APP_API_URL + "/api"|| "http://localhost:5000/api";

// export const fetchClients = async () => {
//   const { data } = await axios.get(`${API}/clients`);
//   return data;
// };

import API from "../utils/api";

export const fetchClients = async () => {
  const { data } = await API.get("/clients");
  return data;
};
