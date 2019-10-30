import express from 'express';
import { Middleware } from '../models';

export const userRouter = express.Router();

userRouter.get('/', (req, res) => {});
userRouter.post('/', (req, res) => {});

userRouter.get('/:id', (req, res) => {});
userRouter.put('/:id', (req, res) => {});
userRouter.delete('/:id', (req, res) => {});

userRouter.get('/:id/posts', (req, res) => {});
userRouter.post('/:id/posts', (req, res) => {});

//custom middleware

export const validateUserID: Middleware = () => (req, res, next) => {};

export const validateUser: Middleware = () => (req, res, next) => {};

export const validatePost: Middleware = () => (req, res, next) => {};
