export default {
  path: '/notes/:id',
  name: 'EditNote',
  component: () => import('@/views/notes/EditNote.vue'),
  meta: {
    pageOverflow: 'hidden',
  },
};
