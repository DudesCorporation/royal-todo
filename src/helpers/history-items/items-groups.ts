import { DateTime } from 'luxon';
import type { HistoryItem } from '@/models/HistoryItem';

const HALF_AN_HOUR = 1000 * 60 * 30;

export interface HistoryItemsGroup {
  title?: string;
  items: Array<HistoryItem>;
}

const historyTitlesLists = {
  notes(group: HistoryItemsGroup, index: number) {
    const lessThanHalfOfHourAgo = (
      DateTime.fromMillis(group.items[0].eventDate).diffNow().minutes - HALF_AN_HOUR) < 0;

    console.log('lessThanHalfOfHourAgo', lessThanHalfOfHourAgo);

    if (!index && lessThanHalfOfHourAgo) return 'Recent changes';

    return formatFromTimestamp(group.items[group.items.length - 1].eventDate);
  },
};

function formatFromTimestamp(timestamp: number) {
  return DateTime.fromMillis(timestamp).toRelative();
}

function getHistoryGroupTitle(group: HistoryItemsGroup, index: number) {
  // TODO implement universal titles, not only for notes
  return historyTitlesLists.notes(group, index);
}

function applyHistoryGroupsTitle(group: HistoryItemsGroup, index: number) {
  const title = getHistoryGroupTitle(group, index);

  Object.assign(group, { title });
}

export function applyHistoryGroupsTitles(itemsGroups: Array<HistoryItemsGroup>) {
  itemsGroups.forEach(applyHistoryGroupsTitle);
}
