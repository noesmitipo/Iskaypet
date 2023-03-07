import { Database } from "sqlite3";

let db: Database;

export const initDb = () => {
  db = new Database(":memory:", (error) => {
    if (error) {
      return console.error(error.message);
    }
    console.log("Connected to the in-memory SQlite db");
  });

  db.run(
    "CREATE TABLE pets (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, kind TEXT NOT NULL, gender TEXT NOT NULL, birthdate TEXT)"
  );
};

export const getDb = () => {
  return db;
};
