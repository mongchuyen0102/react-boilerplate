import { rest } from 'msw';
import users from './data/users.json';

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    console.log(users);

    return res(ctx.status(200), ctx.json(users));
  }),
];
