require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const checkTenant = (req, res, next) => {
  const { tenantId } = req.params;
  const tenantIds = ["tenant1", "tenant2"];

  if (tenantId && tenantIds.includes(tenantId)) {
    req.tenantId = tenantId;
    next();
  } else {
    res.status(404).send("not_found_tenant");
  }
};

app.use("/:tenantId", checkTenant);

// Routes
app.use("/:tenantId", routes);

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});
