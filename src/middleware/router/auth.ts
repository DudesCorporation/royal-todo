import { defineComponent, getCurrentInstance } from 'vue';
import { useAuth } from '@/plugins/auth/Auth';

export function authMiddleware(toR, fromR, next) {
  const $auth = useAuth(); // { appContext: app }
  console.log('$auth', $auth);
  const canNavigate = $auth?.loggedIn !== false;

  if (!canNavigate) {
    next('/login');
    return;
  }

  next();
}

export const blockUnauthorized = defineComponent({
  beforeRouteEnter(toR, fromR, next) {
    console.log('hello', 123123);
    const instance = getCurrentInstance();
    const $auth = instance?.appContext.config.globalProperties.$auth;
    console.log($auth.loggedIn);
    next();
  },
});
