import { createMiddleware } from '@/middleware/Middleware';
import { authMiddleware } from '@/middleware/router/auth';
import type { Middleware } from '@/middleware/Middleware';

const middleware = createMiddleware();

middleware.addEventListener('installed', () => {
  middleware.use(authMiddleware);
});

export default middleware as Middleware;
