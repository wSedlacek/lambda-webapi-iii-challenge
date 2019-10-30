import express from 'express';
import { Middleware } from './models';

import { postRouter, userRouter } from './routes';

export const server = express();
const logger: Middleware = () => (req, res, next) => {
  console.log(`\n${new Date().toISOString()} ${req.method} ${req.url}\n`);
  next();
};

server.use(express.json());
server.use(logger());
server.get('/', (req, res) => res.send(`<h2>Let's write some middleware!</h2>`));
server.use('/api/post', postRouter);
server.use('/api/user', userRouter);
