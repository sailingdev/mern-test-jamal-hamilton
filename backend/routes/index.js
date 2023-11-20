const express = require("express");
const productsRoute = require("./products.route");
const configRoute = require("./config.route");
const router = express.Router();

const defaultRoutes = [
  { path: "/products", route: productsRoute },
  { path: "/config", route: configRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
