import { Router } from "express";
import { Controller } from "../controller/controller.js";

const controller = new Controller();
export const routerPaid = Router();

routerPaid.route("/paid").get(controller.getTrue);
