import { Router } from "express";
import { createUser } from "../../controllers/userControllers/userControllers.js";

export const usersRouter = Router();

usersRouter.post("/register", createUser);
