const express = require("express");

const app = express();

const route = require("./routes/api_v1");
app.use("/v1", route);

app.listen(3005, () => {
  console.log("Server running on port 3005!");
});
