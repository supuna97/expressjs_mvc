const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Allow all origins (not recommended for production)

const route = require("./routes/api_v1");
app.use("/v1", route);

app.listen(3005, () => {
  console.log("Server running on port 3005!");
});
