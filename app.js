import * as dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
// import colors from "colors";
import { Database } from "./config.js";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(json());
app.use(cookieParser());

app.use("/api/users", userRoute);
const port = process.env.PORT || 4000;
(async () => {
  try {
    const db = new Database();
    await db.connect();
    // start the app engine
    app.listen(port, () => {
      console.log("NODE SERVER STARTED: https://127.0.0.1:" + port);
    });
  } catch (error) {
    console.error(error);
  }
})();
