import { Auth } from '@/plugins/auth/Auth';
import { Middleware } from '@/middleware/Middleware';

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $auth: Auth;
    $middleware: Middleware;
  }
}
