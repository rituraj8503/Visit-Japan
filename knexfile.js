// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PW,
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'japan',
      user:     process.env.DB_USER,
      password: process.env.DB_PW
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'japan',
      user:     process.env.DB_USER,
      password: process.env.DB_PW
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
