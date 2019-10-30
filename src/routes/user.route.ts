import express from 'express';
import { validateUser, validateUserID, validatePost } from '../middleware';
import { get, insert, update, remove } from '../data/user';
import { insert as insertPost } from '../data/post';

export const userRouter = express.Router();

userRouter.use('/', validateUser());
userRouter.get('/', async (req, res) => res.json(await get()));
userRouter.post('/', async (req, res) => {
  try {
    const user = await insert(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Could not create user' });
  }
});

userRouter.use('/:id', validateUserID());
userRouter.get('/:id', async (req, res) => res.json(req.user));
userRouter.put('/:id', async (req, res) => {
  try {
    const user = await update(req.user.id, req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Could not update user' });
  }
});

userRouter.delete('/:id', async (req, res) => {
  try {
    const user = await remove(req.user.id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Could not delete user' });
  }
});

userRouter.use('/:id/post', validatePost());
userRouter.get('/:id/posts', async (req, res) => res.json(req.posts));
userRouter.post('/:id/posts', async (req, res) => {
  try {
    const post = await insertPost({ ...req.body, user_id: req.user.id });
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Could not create post' });
  }
});
