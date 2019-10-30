import express from 'express';
import { Middleware } from './models';

import { postRouter, userRouter } from './routes';

export const server = express();
export const logger: Middleware = () => (req, res, next) => {};

server.use(logger());
server.get('/', (req, res) => res.send(`<h2>Let's write some middleware!</h2>`));
server.use(postRouter);
server.use(userRouter);
