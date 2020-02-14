import { Middleware, PostDTO } from '../../models';
import { getByID } from '../../data/post';

declare global {
  namespace Express {
    interface Request {
      post: PostDTO;
    }
  }
}

export const validatePost: Middleware = () => (req, res, next) => {
  if (req.method !== 'POST' && req.method !== 'PUT') return next();

  if (Object.keys(req.body).length === 0) res.status(400).json({ message: 'Missing post data' });
  if (!req.body.text) res.status(400).json({ message: 'Missing required text field' });
  else return next();
};

export const validatePostID: Middleware = () => async (req, res, next) => {
  req.post = await getByID(req.params.id);
  if (!req.post) res.status(404).json({ message: 'Invalid Post ID' });
  else return next();
};
