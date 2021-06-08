import { HistoryItem } from '@/models/HistoryItem';

export const tempNoteHistoryItems: HistoryItem[] = [
  {
    eventType: 'Create comment',
    value: '',
    previousValue: '',
    eventDate: new Date().getTime(),
    sessionId: 'wqe',
  },
  {
    eventType: 'Create message',
    value: '',
    previousValue: '',
    eventDate: new Date().getTime(),
    sessionId: '123',
  },
  {
    eventType: 'Create message',
    value: '',
    previousValue: '',
    eventDate: 1623103016746 + 1800000 + 1800000,
    sessionId: '123',
  },
];
