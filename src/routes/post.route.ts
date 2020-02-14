import express from 'express';

import { validatePost, validatePostID } from '../middleware';
import { get, update, remove } from '../data/post';

export const postRouter = express.Router();

postRouter.get('/', async (req, res) => res.json(await get()));

postRouter.use('/:id', validatePost());
postRouter.use('/:id', validatePostID());
postRouter.get('/:id', async (req, res) => res.json(req.post));

postRouter.put('/:id', async (req, res) => {
  try {
    const post = await update(req.post.id, req.body);
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Could not update post' });
  }
});

postRouter.delete('/:id', async (req, res) => {
  try {
    const post = await remove(req.post.id);
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Could not delete post' });
  }
});
