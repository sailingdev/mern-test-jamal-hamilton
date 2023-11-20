import { init } from "@rematch/core";
import immerPlugin from "@rematch/immer";
import { models } from "./models";

export const store = init({
  models,
  plugins: [immerPlugin()],
});
