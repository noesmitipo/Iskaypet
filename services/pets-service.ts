import { CreatePetRequest, GetAverageAgeResult, Pet } from "../models/pet";
import * as petsDal from "../dal/pets-dal";
import { getAge } from "../utils/age-helper";
import {
  calculateAverage,
  calculateStandardDeviation,
} from "../utils/math-helper";

export const create = async (payload: CreatePetRequest): Promise<void> => {
  return petsDal.create(payload);
};

export const getAll = async (): Promise<Pet[]> => {
  return await petsDal.getAll();
};

export const getMostNumerousSpecies = async (): Promise<string> => {
  return await petsDal.getMostNumerousSpecies();
};

export const getAverageAge = async (
  species: string
): Promise<GetAverageAgeResult> => {
  const birthdates = await petsDal.getBirthdatesForSpecies(species);
  const ages = birthdates.map((birthdate) => getAge(birthdate));
  const averageAge = calculateAverage(ages);
  const standarDeviation = calculateStandardDeviation(ages);

  return { averageAge, standarDeviation };
};

export const getById = async (id: number): Promise<Pet> => {
  return await petsDal.getById(id);
};
