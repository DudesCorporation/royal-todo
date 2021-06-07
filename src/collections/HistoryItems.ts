import { Collection } from '@/collections/Collection';
import { HistoryItem } from '@/models/HistoryItem';

export class HistoryItems extends Collection<HistoryItem> {
  groupBySessionId() { // expected result: [{ title: 'Recent changes', items: 10 }]
    // TODO Important! fix invalid code section in the morning
    return this
      .sort((a, b) => b.eventDate - a.eventDate)
      .groupBy('sessionId'); // Group { title: String, items: Array }
  }
}
