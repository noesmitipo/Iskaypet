import { getDb } from "../db/db-config";
import { CreatePetRequest, Pet } from "../models/pet";

export const create = async (payload: CreatePetRequest): Promise<void> => {
  const sql =
    "INSERT INTO pets (name, kind, gender, birthdate) VALUES (?, ?, ?, ?)";

  getDb().run(
    sql,
    [payload.name, payload.kind, payload.gender, payload.birthdate],
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