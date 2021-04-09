import type { Model } from '@/models/Model';
import type { Collection } from '@/collections/Collection';

export abstract class Manager {
  manage(collection: Collection) {
    collection.each(this.apply);
  }

  abstract apply(model: Model): never | unknown;
}
