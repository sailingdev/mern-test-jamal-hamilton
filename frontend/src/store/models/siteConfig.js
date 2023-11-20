import { createModel } from "@rematch/core";
import API from "apis/API";

export const siteConfig = createModel()({
  name: "siteConfig",
  state: {
    loading: false,
    config: {
      header: {
        bg: "gray.400",
        logoUrl: "/logo192.png",
        fontSize: "4xl",
        color: "gray.800",
      },
      button: {
        variant: "solid",
        colorScheme: "blue",
      },
      product: {
        title: {
          color: "gray.800",
          size: "md",
        },
        category: {
          color: "gray.500",
          size: "sm",
        },
        description: {
          color: "gray.800",
          fontSize: "md",
        },
      },
    },
  },
  reducers: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setConfig(state, payload) {
      state.config = payload;
    },
  },
  effects: (dispatch) => ({
    async getConfig(payload) {
      try {
        dispatch.siteConfig.setLoading(true);
        const siteConfig = await API.config.show(payload);
        dispatch.siteConfig.setConfig(siteConfig);
      } catch (err) {
        console.error(err.message);
      } finally {
        dispatch.siteConfig.setLoading(false);
      }
    },
  }),
});
