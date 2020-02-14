import { db } from './db';
import { PostDTO, UserDTO } from '../models';

export const get = async () => await db('users');

export const getByID = async (id: string | number) =>
  await db<UserDTO>('users')
    .where({ id })
    .first();

export const getUserPosts = async (id: string | number) =>
  await db<PostDTO>('posts as p')
    .join<UserDTO>('users as u', 'u.id', 'p.user_id')
    .select<PostDTO[]>('p.id', 'p.text', 'u.name as postedBy')
    .where('p.user_id', id);

export const insert = async (user: UserDTO) =>
  await db<UserDTO>('users')
    .insert(user)
    .then((ids) => getByID(ids[0]));

export const update = async (id: string | number, changes: UserDTO) =>
  await db<UserDTO>('users')
    .where({ id })
    .update(changes)
    .then(() => getByID(id));

export const remove = async (id: string | number) => {
  const user = await getByID(id);
  await db<UserDTO>('users')
    .where('id', id)
    .del();
  return user;
};
