import express from "express";
import connectDB from "./config/dataBase.js";
dotenv.config();
import dotenv from "dotenv";
import routes from "./routes/todoRouter.js";
const app = express();
app.use(express.json());

connectDB();

app.use("/", routes);
app.listen(3002, () => {
  console.log("App is running on port 3002");
});
