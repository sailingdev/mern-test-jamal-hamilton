import { createModel } from "@rematch/core";
import API from "apis/API";

export const product = createModel()({
  name: "product",
  state: {
    loading: false,
    products: [],
    product: null,
  },
  reducers: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    setProduct(state, payload) {
      state.product = payload;
    },
  },
  effects: (dispatch) => ({
    async getProducts(tenantId) {
      try {
        dispatch.product.setLoading(true);

        const data = await API.products.index(tenantId);
        dispatch.product.setProducts(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        dispatch.product.setLoading(false);
      }
    },
    async getProduct(payload) {
      try {
        dispatch.product.setLoading(true);
        const product = await API.products.show(payload);
        dispatch.product.setProduct(product);
      } catch (err) {
        console.error(err.message);
      } finally {
        dispatch.product.setLoading(false);
      }
    },
  }),
});
