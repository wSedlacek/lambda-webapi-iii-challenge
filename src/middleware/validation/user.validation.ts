import { Middleware, UserDTO, PostDTO } from '../../models';
import { getByID, getUserPosts } from '../../data/user';

declare global {
  namespace Express {
    interface Request {
      user: UserDTO;
      posts: PostDTO[];
    }
  }
}

export const validateUser: Middleware = () => (req, res, next) => {
  if (req.path !== '/') return next();
  if (req.method !== 'POST' && req.method !== 'PUT') return next();

  if (Object.keys(req.body).length === 0) res.status(400).json({ message: 'Missing user data' });
  else if (!req.body.name) res.status(400).json({ message: 'Missing required name field' });
  else return next();
};

export const validateUserID: Middleware = () => async (req, res, next) => {
  req.user = await getByID(req.params.id);
  req.posts = await getUserPosts(req.params.id);
  if (!req.user) res.status(404).json({ message: 'Invalid User ID' });
  else return next();
};
