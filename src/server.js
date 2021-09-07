const express = require("express");
var app = express();
const cors = require("cors");
app.use(cors());
const verifyToken = require("./routes/middlewares/verifyJwt");
const permit = require("./routes/middlewares/authorization");
const errorHandler = require("./routes/middlewares/errorHandler");
const ROLES = require("./constants/roles");

app.use(verifyToken);
app.use(express.json());

app.use("/api/users", require("./routes/api/user.controller"));
app.use("/api/auth", require("./routes/api/auth.controller"));
app.use("/api/attendance", require("./routes/api/attendance.controller"));
app.use(
  "/api/donation",
  permit(ROLES.ADMIN),
  require("./routes/api/donation.controller")
);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Listening on port : ", PORT);
});
