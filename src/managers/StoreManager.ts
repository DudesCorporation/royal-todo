import { Manager } from '@/managers/Manager';
import type { Model } from '@/models/Model';

export class StoreManager extends Manager {
  apply(model: Model) {
    console.log(model.id); // TODO implement
  }
}
