import { Router } from "express";
import {
  createUser,
  getUsers,
} from "../../controllers/userControllers/userControllers.js";
import multer from "multer";

export const usersRouter = Router();
const storage = multer.diskStorage({
  destination(req, file, callBack) {
    callBack(null, "uploads/");
  },
  filename(req, file, callBack) {
    callBack(null, `${file.originalname}-padel`); // Poner un generador de ids.
  },
});

const upload = multer({ storage });

usersRouter.post("/register", upload.single("avatar"), createUser);
usersRouter.get("/", getUsers);
