import { reactive, AppContext } from 'vue';
import type { NavigationGuardWithThis } from 'vue-router';
import type { App } from 'vue';

export interface UseMiddlewareThis {
  app: App| undefined;
}

function getContextRouter(context: App | AppContext | undefined) {
  return context?.config.globalProperties.$router;
}

export class Middleware extends EventTarget {
  app: App | undefined;

  use(guard: NavigationGuardWithThis<UseMiddlewareThis>, routes?: string[]) {
    const router = getContextRouter(this.app);

    router.beforeEach((to, from, next) => {
      if (!routes || routes.some(r => r === to.path)) {
        const middlewareContext: UseMiddlewareThis = { app: this.app };
        return guard.call(middlewareContext, to, from, next);
      }

      return next();
    });
  }

  install(app: App) {
    app.config.globalProperties.$middleware = reactive(this);

    this.app = app;

    this.dispatchInstalledEvent();
  }

  dispatchInstalledEvent() {
    const event = new Event('installed');
    this.dispatchEvent(event);
  }
}

export function createMiddleware() {
  return new Middleware();
}
