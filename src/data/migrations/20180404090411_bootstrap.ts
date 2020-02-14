import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema
    .createTable('users', (users) => {
      users.increments();
      users
        .string('name')
        .notNullable()
        .unique();
    })
    .createTable('posts', (posts) => {
      posts.increments();
      posts.text('text').notNullable();

      posts
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('posts').dropTableIfExists('users');
};
