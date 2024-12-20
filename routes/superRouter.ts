import { Router } from "express";
import creationRouter from "./creationRouter.ts";
import readingRouter from "./readingRouter.ts";
import updatingRouter from "./updatingRouter.ts";
import deletingRouter from "./deletingRouter.ts";

const superRouter = Router();

superRouter.post("/create", creationRouter);
superRouter.get("/read", readingRouter);
superRouter.post("/update", updatingRouter);
superRouter.post("/delete", deletingRouter);

export default superRouter;