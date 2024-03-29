import { type NextFunction, type Request, type Response } from "express";
import { type AvatarStructure, type UserStructure } from "./types.js";
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

    const avatar = req.file as AvatarStructure;
    avatar.filename = avatar.originalname;

    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = await User.create({
      email,
      level,
      name,
      nickname,
      playSide,
      telephoneNumber,
      password: hashedPassword,
      avatar,
    });

    res.status(201).json({ user }).redirect("/");
  } catch (error) {
    const customError = new CustomError(
      (error as Error).message,
      500,
      "Couldn't create the user"
    );

    next(customError);
  }
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find().exec();

    res.status(200).json({ users });
  } catch (error) {
    const customError = new CustomError(
      (error as Error).message,
      500,
      "Couldn't retrieve robots."
    );

    next(customError);
  }
};
