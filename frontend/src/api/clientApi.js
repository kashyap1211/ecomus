import axios from "axios";

const API = "http://localhost:5000/api";

export const fetchClients = async () => {
  const { data } = await axios.get(`${API}/clients`);
  return data;
};

