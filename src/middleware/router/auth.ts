import { useAuth } from '@/plugins/auth/Auth';
import type { UseMiddlewareThis } from '@/middleware/Middleware';

export function authMiddleware(this: UseMiddlewareThis, to, from, next) {
  const $auth = useAuth({ appContext: this.app });
  const loginRoutes: string[] = ['/login'];

  const loggedIn = $auth?.loggedIn !== false;
  const passToLoginRoutes = loginRoutes.includes(to.path);
  const cameFromLoginRoutes = loginRoutes.includes(from.path);

  if (!cameFromLoginRoutes && passToLoginRoutes && loggedIn) {
    return next('/');
  }

  if (cameFromLoginRoutes && !passToLoginRoutes && !loggedIn) {
    return next('/login');
  }

  return next();
}
