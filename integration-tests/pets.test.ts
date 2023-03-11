import supertest from "supertest";
import { app } from "..";
import { initDb } from "../db/db-config";

describe("Test Pets API", () => {
  beforeEach(() => {
    initDb();
  });

  it("GET /pets returns an empty array if there are no pets", async () => {
    await supertest(app)
      .get("/pets")
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(0);
      });
  });

  it("POST /pets returns 201 if a new Pet is created", async () => {
    const pet = {
      name: "Bruce",
      gender: "Male",
      species: "Dog",
      birthdate: "2020/03/30",
    };

    await supertest(app).post("/pets").send(pet).expect(201);
  });

  it("POST /pets returns 500 if a new Pet is not created (for example, wrong parameters)", async () => {
    const pet = {
      nombre: "Bruce",
      genero: "Male",
      especie: "Dog",
      nacimiento: "2020/03/30",
    };

    await supertest(app).post("/pets").send(pet).expect(500);
  });

  it("GET /pets returns an array with all the pets", async () => {
    const pet1 = {
      name: "Bruce",
      gender: "Male",
      species: "Dog",
      birthdate: "2020/03/30",
    };

    const pet2 = {
      name: "Lisa",
      gender: "Female",
      species: "Cat",
      birthdate: "2015/10/12",
    };

    await supertest(app).post("/pets").send(pet1);
    await supertest(app).post("/pets").send(pet2);

    await supertest(app)
      .get("/pets")
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(2);
      });
  });

  it("GET /pets/:id returns 404 if there are no pets with that id", async () => {
    await supertest(app).get("/pets/30").expect(404);
  });

  it("GET /pets/:id returns the information of the pet if it exists", async () => {
    const pet = {
      id: 1,
      name: "Bruce",
      gender: "Male",
      species: "Dog",
      birthdate: "2020/03/30",
    };

    await supertest(app).post("/pets").send(pet);

    await supertest(app)
      .get("/pets/1")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(pet);
      });
  });

  it("GET /pets/most_numerous_species returns the name of the most numerous species", async () => {
    const pet1 = {
      name: "Bruce",
      gender: "Male",
      species: "Dog",
      birthdate: "2020/03/30",
    };

    const pet2 = {
      name: "Lisa",
      gender: "Female",
      species: "Cat",
      birthdate: "2015/10/12",
    };

    const pet3 = {
      name: "Rex",
      gender: "Male",
      species: "Dog",
      birthdate: "2020/01/30",
    };

    await supertest(app).post("/pets").send(pet1);
    await supertest(app).post("/pets").send(pet2);
    await supertest(app).post("/pets").send(pet3);

    await supertest(app)
      .get("/pets/most_numerous_species")
      .expect(200)
      .then((response) => {
        expect(response.body).toBe("Dog");
      });
  });

  it("GET /pets/average_age returns an object with averageAge and standardDeviation", async () => {
    await supertest(app)
      .get("/pets/average_age?species=Dog")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          averageAge: 0,
          standardDeviation: 0,
        });
      });
  });
});
