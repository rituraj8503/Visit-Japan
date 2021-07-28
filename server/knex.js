// require('dotenv').config();
// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         host: '127.0.0.1',
//         user: process.env.DB_USER,
//         password: process.env.DB_PW,
//         database: process.env.DB_NAME,
//     }
// });

// module.exports = knex;

const knex = require("knex");

const japan = knex({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/japan`,
  searchPath: "public",
});

module.exports = japan;