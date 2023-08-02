import "dotenv/config";
import express from "express";

import { addRouter } from "./router/add.router.js";

async function bootstrapt() {
  try {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/add", addRouter);

    app.listen(process.env["PORT"] || 5000, process.env["HOST"], () =>
      console.log("Server is running...")
    );
  } catch (error) {
    console.log(error.message);
  }
}

bootstrapt();
