import express from 'express';
import { validateUser, validateUserID, validatePost } from '../middleware';

export const userRouter = express.Router();

userRouter.use('/', validateUser());
userRouter.get('/', (req, res) => {});
userRouter.post('/', (req, res) => {});

userRouter.use('/:id', validateUserID());
userRouter.get('/:id', (req, res) => {});
userRouter.put('/:id', (req, res) => {});
userRouter.delete('/:id', (req, res) => {});

userRouter.use('/:id/post', validatePost());
userRouter.get('/:id/posts', (req, res) => {});
userRouter.post('/:id/posts', (req, res) => {});
