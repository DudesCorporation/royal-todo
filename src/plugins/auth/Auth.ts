import { App } from 'vue';

export interface AuthOptions {
  user?: object;
}

export class Auth {
  state: AuthOptions = {};

  loggedIn = true;

  constructor(options: AuthOptions) {
    this.state.user = options.user;
  }

  install(app: App) {
    app.config.globalProperties.$auth = this
  }
}

export function createAuth(options: AuthOptions) {
  return new Auth(options);
}
