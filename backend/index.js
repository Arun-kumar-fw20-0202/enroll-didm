const express = require("express");
const cors = require("cors");
const { connection } = require("./config/config");
const allRoutes = require("./routes/AllRoutes");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", allRoutes);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(process.env.port, "database connected successfuly");
  } catch (err) {
    console.log(err.message);
  }
});
