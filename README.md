# sails-with-graphql

Install all dependencies:

```sh
npm install
```

Make sure MongoDB is running. Then, run the server:

```sh
npm start
```

GraphiQL will be available at <http://localhost:1337/graphql>

If you don't want to restart the server every time you make a change, use nodemon with the command:

```sh
npm run dev
```

## Relationships

* A **maker** has many products
* A **product** has many models

## GraphQL files

Look at the [schemas directory](./schemas)

The `express-graphql` middleware is installed in [./config/http.js](./config/http.js)
