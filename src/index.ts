import "./loadEnvironment.js";
import startServer from "./server/startServer.js";
import createDebug from "debug";
import chalk from "chalk";

export const debug = createDebug("server");
const port = process.env.PORT ?? 4000;

try {
  await startServer(+port);
  debug(chalk.bgGreen(`Start with server 'http://localhost:${port}'`));
} catch (error) {
  debug(chalk.bgRed(error.message));
}
