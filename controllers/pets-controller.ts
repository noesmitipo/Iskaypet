import { Pet } from "../models/pet";
import * as petsService from "../services/pets-service";

export const getAll = async (): Promise<Pet[]> => {
  return await petsService.getAll();
};
