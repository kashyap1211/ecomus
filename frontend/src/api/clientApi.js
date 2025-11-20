import axios from "axios";

const API = "https://ecomus-3udj.onrender.com/api";

export const fetchClients = async () => {
  const { data } = await axios.get(`${API}/clients`);
  return data;
};

