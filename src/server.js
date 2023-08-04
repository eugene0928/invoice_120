import "dotenv/config";
import express from "express";
import { routerPaid } from "./router/paid.router.js";
import { routerPanding } from "./router/panding.router.js";

async function bootstrapt() {
  try {
    //checking for pull request from mahmud
    const app = express();
    app.use(routerPaid);
    app.use(routerPanding);

    app.listen(process.env["PORT"] || 5000, process.env["HOST"], () =>
      console.log("Server is running...")
    );
  } catch (error) {
    console.log(error.message);
  }
}

bootstrapt();
