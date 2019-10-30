import { db } from './db';
import { PostDTO } from '../models';

export const get = async () => await db('posts');

export const getByID = async (id: string | number) =>
  await db<PostDTO>('posts')
    .where({ id })
    .first();

export const insert = async (post: PostDTO) =>
  await db<PostDTO>('posts')
    .insert(post)
    .then((ids) => getByID(ids[0]));

export const update = async (id: string | number, changes: PostDTO) =>
  await db<PostDTO>('posts')
    .where({ id })
    .update(changes)
    .then(() => getByID(id));

export const remove = async (id: string | number) =>
  await db<PostDTO>('posts')
    .where('id', id)
    .del();
