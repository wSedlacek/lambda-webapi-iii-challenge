import Knex from 'knex';
export const seed = (knex: Knex, _: Promise<any>) => {
  return knex('users').insert([
    { name: 'Frodo Baggins' },
    { name: 'Samwise Gamgee' },
    { name: 'Meriadoc Brandybuck' },
    { name: 'Peregrin Took' },
    { name: 'Mithrandir' },
    { name: 'Boromir' },
    { name: 'Legolas' },
    { name: 'Gimli' },
    { name: 'Aragorn' },
  ]);
};
