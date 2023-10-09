require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const server = express();

const TaskRouter = require("./Routes/task");

console.log(process.env.MONGO_URL);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Connection Failed", err));

const port = process.env.PORT || 3007;
server.use(cors());
server.use(express.json());

//handle routes
server.use("/api/task", TaskRouter.router);
server.listen(port, () => {
  console.log(`server is runing on ${port}`);
});
