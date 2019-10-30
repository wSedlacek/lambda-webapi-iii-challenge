import knex from 'knex';
import { PostDTO, UserDTO } from '../models';

export const development: knex.Config = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './src/data/blog.db',
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  },
  migrations: {
    directory: './src/data/migrations',
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: './src/data/seeds',
  },
};

export const db = knex<PostDTO | UserDTO>(development);
