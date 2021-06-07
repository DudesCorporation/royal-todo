import { DateTime } from 'luxon';
import type { HistoryItem } from '@/models/HistoryItem';

export interface HistoryItemsGroup {
  title?: string;
  items: Array<HistoryItem>;
}

const historyTitlesLists = {
  notes(group: HistoryItemsGroup, index: number) {
    // TODO temporary check, add isOpenSession instead
    if (!index) return 'Recent changes';

    return formatFromTimestamp(group.items[group.items.length - 1].eventDate);
  },
};

function formatFromTimestamp(timestamp: number) {
  return DateTime.fromMillis(timestamp).toRelative();
}

function getHistoryGroupTitle(group: HistoryItemsGroup, index: number) {
  return historyTitlesLists.notes(group, index);
}

function applyHistoryGroupsTitle(group: HistoryItemsGroup, index: number) {
  const title = getHistoryGroupTitle(group, index);

  Object.assign(group, { title });
}

export function applyHistoryGroupsTitles(itemsGroups: Array<HistoryItemsGroup>) {
  itemsGroups.forEach(applyHistoryGroupsTitle);
}
