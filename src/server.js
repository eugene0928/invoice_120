import "dotenv/config";
import express, { urlencoded } from "express";

async function bootstrapt() {
  try {
    const app = express();

    app.use(urlencoded({ extended: true }));
    app.use(express.json());

    app.listen(process.env["PORT"] || 5000, process.env["HOST"], () =>
      console.log("Server is running...")
    );
  } catch (error) {
    console.log(error.message);
  }
}

bootstrapt();
