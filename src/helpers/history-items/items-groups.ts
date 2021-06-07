import type { HistoryItem } from '@/models/HistoryItem';

export interface HistoryItemsGroup {
  title?: string;
  items: Array<HistoryItem>;
}

const historyTitlesLists = {
  notes: [
    'Recent changes',
  ],
};

export function applyHistoryGroupsTitles(itemsGroups: Array<HistoryItemsGroup>) {
  itemsGroups.forEach((g, idx) => {
    Object.assign(g, {
      title: historyTitlesLists.notes[idx] || g.items[g.items.length - 1].eventDate,
    });
  });
}
