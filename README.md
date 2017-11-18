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

### GraphQL Queries and Mutations

See [queries.graphql](queries.graphql) for some example queries/mutations. You can copy and paste them to GraphiQL and choose which one to run!

#### Syntax Highlighting in Atom

Install `language-graphql` package for optional syntax highlighting in .graphql files.
