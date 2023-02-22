import { type NextFunction, type Request, type Response } from "express";
import { type UserStructure } from "./types.js";
import bcryptjs from "bcryptjs";
import User from "../../../database/models/User.js";
import { CustomError } from "../../../CustomError.js";

export const createUser = async (
  req: Request<Record<string, unknown>, Record<string, unknown>, UserStructure>,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      level,
      name,
      nickname,
      password,
      playSide,
      telephoneNumber,
      email,
    } = req.body;

    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = await User.create({
      email,
      level,
      name,
      nickname,
      playSide,
      telephoneNumber,
      password: hashedPassword,
    });

    res.status(201).json({ user });
  } catch (error) {
    const customError = new CustomError(
      (error as Error).message,
      500,
      "Couldn't create the user"
    );

    next(customError);
  }
};
