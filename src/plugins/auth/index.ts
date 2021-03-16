import { createAuth } from './Auth';
import type { Auth } from './Auth';

const user = {
  username: 'supertest',
  name: 'John Doe',
};

const auth = createAuth({
  user,
});

export default auth as Auth;
