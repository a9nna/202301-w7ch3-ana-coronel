import express from "express";
import morgan from "morgan";
import {
  generalError,
  notFoundError,
} from "./middlewares/errorMiddleware/errorMiddleware";

const app = express();

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use("/users");

app.use(notFoundError);
app.use(generalError);

export default app;
