import { App, reactive, getCurrentInstance, ComponentInternalInstance } from 'vue';

export type UseAuthProp = ComponentInternalInstance | null | { appContext: App };

export interface AuthOptions {
  user?: object;
}

export class Auth {
  #state: AuthOptions = {};

  loggedIn = true;

  constructor(options: AuthOptions) {
    this.#state = options;
  }

  signIn() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  /**
   * Method used for Vue to be used as a plugin
   */
  install(app: App) {
    app.config.globalProperties.$auth = reactive(this);
  }
}

export function createAuth(options: AuthOptions) {
  return new Auth(options);
}

/**
 * getCurrentInstance only works during setup or Lifecycle Hooks
 */
export function useAuth(instance: UseAuthProp = getCurrentInstance()): Auth {
  return instance?.appContext.config.globalProperties.$auth;
}
