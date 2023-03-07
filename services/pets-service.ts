import { CreatePetRequest, Pet } from "../models/pet";
import * as petsDal from "../dal/pets-dal";

export const getAll = async (): Promise<Pet[]> => {
  return petsDal.getAll();
};

export const create = async (payload: CreatePetRequest): Promise<void> => {
  return petsDal.create(payload);
};
