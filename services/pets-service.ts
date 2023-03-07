import { CreatePetRequest, Pet } from "../models/pet";
import * as petsDal from "../dal/pets-dal";

export const create = async (payload: CreatePetRequest): Promise<void> => {
  return petsDal.create(payload);
};

export const getAll = async (): Promise<Pet[]> => {
  return petsDal.getAll();
};

export const getById = async (id: number): Promise<Pet> => {
  return petsDal.getById(id);
};
