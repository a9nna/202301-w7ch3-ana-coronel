import express from "express";
import morgan from "morgan";
import {
  generalError,
  notFoundError,
} from "./middlewares/errorMiddleware/errorMiddleware.js";
import { usersRouter } from "./routers/usersRouter/usersRouter.js";

const app = express();

app.disable("x-powered-by");

app.use(express.json());
app.use(morgan("dev"));

app.use("/users", usersRouter);

app.use(notFoundError);
app.use(generalError);

export default app;
