import { CreatePetRequest, GetAverageAgeResult, Pet } from "../models/pet";
import * as petsService from "../services/pets-service";

export const create = async (payload: CreatePetRequest): Promise<void> => {
  return await petsService.create(payload);
};

export const getAll = async (): Promise<Pet[]> => {
  return await petsService.getAll();
};

export const getMostNumerousSpecies = async (): Promise<string> => {
  return await petsService.getMostNumerousSpecies();
};

export const getAverageAge = async (
  species: string
): Promise<GetAverageAgeResult> => {
  return await petsService.getAverageAge(species);
};

export const getById = async (id: number): Promise<Pet> => {
  return await petsService.getById(id);
};
