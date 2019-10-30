import express from 'express';
import { Middleware } from '../models';

export const postRouter = express.Router();

postRouter.get('/', (req, res) => {});

postRouter.get('/:id', (req, res) => {});
postRouter.put('/:id', (req, res) => {});
postRouter.delete('/:id', (req, res) => {});

// custom middleware

export const validatePostID: Middleware = () => (req, res, next) => {};
