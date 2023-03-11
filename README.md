# IskaypetAPI

IskaypetAPI is an API where you can manage Pets, add new ones, get all of them, the most numerous species or the average age for a given one. It has been developed using [Typescript](https://www.typescriptlang.org/), [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), [Jest](https://jestjs.io/) and [SQLite](https://www.sqlite.org/index.html).

## Prerequisites

`npm`

## How to run locally

1. `npm install`
2. `npm run start:dev`

## How to run the tests

1. `npm test`

## Swagger

You can see a list of all the endpoints available on localhost:3002/api-docs

## Heroku

The API has been deployed to Heroku too, you can access from the following link: https://aqueous-castle-93101.herokuapp.com/api-docs/
Important: The Heroku server is deployed with https so you have to choose that option in the schemas dropdown of the Swagger for it to work fine.
Locally it will work with normal HTTP if you are running it in a not secured port as configured.

![image](https://user-images.githubusercontent.com/4160757/224506745-710ed118-d200-4b47-85ac-851832ea147d.png)
