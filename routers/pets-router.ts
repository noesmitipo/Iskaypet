import { Request, Response, Router } from "express";
import * as petsController from "../controllers/pets-controller";
import { CreatePetRequest, Pet } from "../models/pet";

const petsRouter = Router();

petsRouter.post("/", async (req: Request, res: Response) => {
  const payload: CreatePetRequest = req.body;
  const result = await petsController.create(payload);

  return res.status(201).json(result);
});

petsRouter.get("/", async (req: Request, res: Response) => {
  const result = await petsController.getAll();

  return res.status(200).json(result);
});

petsRouter.get("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const result = await petsController.getById(id);

  return res.status(200).json(result);
});

export default petsRouter;
