import { Router } from "express";
import addController from "../controller/add.controller.js";

export const addRouter = Router();

addRouter.post("", addController.post);
