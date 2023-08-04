import { Router } from "express";
import { Controller } from "../controller/controller.js";

const controller = new Controller();
export const routerPanding = Router();

routerPanding.route("/panding").get(controller.getFalse);
