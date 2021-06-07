import { Model } from '@/models/Model';

export class HistoryItem extends Model {
  eventType: string;

  value: string;

  previousValue: string;

  /**
  * UTC timestamp.
  * You can use new Date().getTime() as correct (or temporary) value
  */
  eventDate: number;

  /**
  * Mostly needed for group by date with separation by sessions.
  */
  sessionId: string;
}
