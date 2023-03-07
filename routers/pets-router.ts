import { Request, Response, Router } from "express";
import * as petsController from "../controllers/pets-controller";

const petsRouter = Router();

petsRouter.get("/", async (req: Request, res: Response) => {
  const result = await petsController.getAll();

  return res.status(200).json(result);
});

export default petsRouter;
