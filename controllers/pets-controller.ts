import { CreatePetRequest, Pet } from "../models/pet";
import * as petsService from "../services/pets-service";

export const create = async (payload: CreatePetRequest): Promise<void> => {
  return await petsService.create(payload);
};

export const getAll = async (): Promise<Pet[]> => {
  return await petsService.getAll();
};

export const getById = async (id: number): Promise<Pet> => {
  return await petsService.getById(id);
};
