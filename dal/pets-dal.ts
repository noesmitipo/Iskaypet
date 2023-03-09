import { getDb } from "../db/db-config";
import { CreatePetRequest, Pet } from "../models/pet";

export const create = async (payload: CreatePetRequest): Promise<void> => {
  const sql =
    "INSERT INTO pets (name, species, gender, birthdate) VALUES (?, ?, ?, ?)";

  getDb().run(
    sql,
    [payload.name, payload.species, payload.gender, payload.birthdate],
    (error) => {
      if (error) {
        return console.error(error.message);
      }
    }
  );
};

export const getAll = async (): Promise<Pet[]> => {
  const sql = "SELECT * FROM pets";

  const result = await new Promise((resolve, reject) => {
    getDb().all(sql, (error, rows) => {
      if (error) {
        reject(error);
      }
      resolve(rows);
    });
  }).catch((reason) => console.log(reason));

  return result as Pet[];
};

export const getMostNumerousSpecies = async (): Promise<string> => {
  const sql =
    "SELECT species, COUNT(species) as cnt FROM pets GROUP BY species ORDER BY cnt DESC";

  const result = await new Promise((resolve, reject) => {
    getDb().get(sql, (error, row) => {
      if (error) {
        reject(error);
      }
      resolve(row?.species);
    });
  }).catch((reason) => console.log(reason));

  return result as string;
};

export const getBirthdatesForSpecies = async (
  species: string
): Promise<Date[]> => {
  const sql = "SELECT birthdate FROM pets WHERE species = ?";

  const result = await new Promise((resolve, reject) => {
    getDb().all(sql, ["Cat"], (error, rows) => {
      if (error) {
        reject(error);
      }
      resolve(rows);
    });
  }).catch((reason) => console.log(reason));

  const datesResult = (result as { birthdate: string }[]).map(
    (res) => new Date(res.birthdate)
  );

  return datesResult;
};

export const getById = async (id: number): Promise<Pet> => {
  const sql = "SELECT * FROM pets WHERE id = ?";

  const result = await new Promise((resolve, reject) => {
    getDb().get(sql, [id], (error, row) => {
      if (error) {
        reject(error);
      }
      resolve(row);
    });
  }).catch((reason) => console.log(reason));

  return result as Pet;
};
