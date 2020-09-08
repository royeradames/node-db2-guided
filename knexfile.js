// Update with your config settings.

module.exports = {
// configuration for a developement database
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/veggies.db3'//change the path
    },
    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true

  },
// configuration for a testing database
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
// configuration for a production database
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
