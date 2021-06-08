import { Collection } from '@/collections/Collection';
import { HistoryItem } from '@/models/HistoryItem';

export class HistoryItems extends Collection<HistoryItem> {
  groupBySessionId() {
    return this
      .sort((a, b) => b.eventDate - a.eventDate)
      .groupBy('sessionId');
  }
}
