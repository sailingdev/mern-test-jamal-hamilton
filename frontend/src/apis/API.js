import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT_URI,
});

/**
 * Products
 */
API.products = {
  index: (tenantId) => API.get(`${tenantId}/products`).then((res) => res.data),
  show: ({ tenantId, id }) =>
    API.get(`${tenantId}/products/${id}`).then((res) => res.data),
};

/**
 * Site configuration
 */
API.config = {
  show: ({ tenantId, id }) =>
    API.get(`${tenantId}/config/${id}`).then((res) => res.data),
};

export default API;
