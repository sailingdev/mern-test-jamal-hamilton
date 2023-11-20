const express = require("express");
const configController = require("../controller/config.controller");

const router = express.Router();

router.get("/:id", configController.show);

module.exports = router;
