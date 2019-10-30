import express from 'express';

import { validatePostID } from '../middleware';
export const postRouter = express.Router();

postRouter.get('/', (req, res) => {});

postRouter.use('/:id', validatePostID());
postRouter.get('/:id', (req, res) => {});
postRouter.put('/:id', (req, res) => {});
postRouter.delete('/:id', (req, res) => {});
