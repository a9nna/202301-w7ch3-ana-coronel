import { Router } from "express";
import {
  createUser,
  getUsers,
} from "../../controllers/userControllers/userControllers.js";

export const usersRouter = Router();

usersRouter.post("/register", createUser);
usersRouter.get("/", getUsers);
