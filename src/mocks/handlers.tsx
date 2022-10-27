import { rest } from 'msw';
import users from './data/users.json';

export const handlers = [
  rest.post('/users', async (req, res, ctx) => {
    /** ===== BE code ===== */
    const { name, username, email } = await req.json();
    if (username !== 'abc') {
      return await res(
        ctx.status(400),
        ctx.json({
          message: 'Username must be "abc"',
        }),
      );
    }

    const newUser = { id: 11, name, username, email };
    /** ===== BE code ===== */

    return await res(ctx.status(201), ctx.json(newUser));
  }),

  rest.get('/users', (req, res, ctx) => {
    console.log(users);

    return res(ctx.status(200), ctx.json(users));
  }),

  rest.put('/users/:id', async (req, res, ctx) => {
    /** ===== BE code ===== */
    const { id } = req.params;
    const { name, phone, website } = await req.json();
    const updatedUser = { id, name, phone, website };
    /** ===== BE code ===== */

    return await res(ctx.status(200), ctx.json(updatedUser));
  }),

  rest.delete('/users/:id', async (req, res, ctx) => {
    /** ===== BE code ===== */
    const { id } = req.params;
    /** ===== BE code ===== */

    return await res(ctx.status(200), ctx.json({ id }));
  }),
];
