import { reactive } from 'vue';
import { NavigationGuard, RouteRecord } from 'vue-router';
import type { App } from 'vue';

export class Middleware extends EventTarget {
  app: App | undefined;

  use(guard: NavigationGuard, routes?: RouteRecord[]): boolean {
    // TODO go through received routes and apply middleware to every
    // else router.beforeEach(guard);

    if (routes) {
      console.log(routes);
    }

    console.log(guard);
    console.log(this.app?.config.globalProperties.$router);

    // TODO get current route from app and apply middleware to it
    return !!this.app;
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
