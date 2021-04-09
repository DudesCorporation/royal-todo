import { v4 } from 'uuid';

const TEMPORARY_MARK = 'temp_';

export abstract class Model {
  id?: string = TEMPORARY_MARK + v4();

  protected constructor(props?: Model | object) {
    Object.assign(this, props);
  }

  // check if Model is stored in browser
  stored?() {
    return false;
  }

  // check if Model is stored in remote DB
  exists?() {
    return !this.id?.startsWith(TEMPORARY_MARK);
  }

  store?() {
    // TODO store in browser
  }
}
