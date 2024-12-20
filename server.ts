import dotenv from "dotenv";
import express from "express";
import { env } from "node:process";
import superRouter from "./routes/superRouter.ts";

dotenv.config()
const server = express();
const { PORT } = env;

server.use("/", superRouter);

server.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});