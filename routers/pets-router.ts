import { Request, Response, Router } from "express";
import * as petsController from "../controllers/pets-controller";
import { CreatePetRequest } from "../models/pet";

const petsRouter = Router();

petsRouter.post("/", async (req: Request, res: Response) => {
  const payload: CreatePetRequest = req.body;

  try {
    const result = await petsController.create(payload);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json((error as Error).message);
  }
});

petsRouter.get("/", async (req: Request, res: Response) => {
  const result = await petsController.getAll();

  return res.status(200).json(result);
});

petsRouter.get(
  "/most_numerous_species",
  async (req: Request, res: Response) => {
    const result = await petsController.getMostNumerousSpecies();

    return res.status(200).json(result);
  }
);

petsRouter.get("/average_age", async (req: Request, res: Response) => {
  const species = req.query.species_name as string;
  const result = await petsController.getAverageAge(species);

  return res.status(200).json(result);
});

petsRouter.get("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const result = await petsController.getById(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json((error as Error).message);
  }
});

export default petsRouter;
