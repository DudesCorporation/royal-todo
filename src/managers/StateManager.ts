import { Manager } from '@/managers/Manager';
import type { Model } from '@/models/Model';

export class StateManager extends Manager {
  apply(model: Model) {
    console.log(model); // TODO implement
  }
}
