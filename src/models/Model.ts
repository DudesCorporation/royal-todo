export abstract class Model {
  protected constructor(props: object) {
    Object.assign(this, props);
  }
}
