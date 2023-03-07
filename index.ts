import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { initDb } from "./db/db-config";
import petsRouter from "./routers/pets-router";

const port = 3002;

const start = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());

  app.use("/pets/", petsRouter);

  try {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (error) {
    console.log(`Error occurred: ${error}`);
  }
};

start();
initDb();
