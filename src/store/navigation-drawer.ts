export default {
  state() {
    return {
      items: [
        {
          link: '/',
          icon: 'home-edit',
          title: 'Home',
        },
        {
          link: '/notes',
          icon: 'note-multiple',
          title: 'Notes',
        },
        {
          link: '/todos',
          icon: 'clipboard-list',
          title: 'My Todos',
        },
        {
          link: '/completed',
          icon: 'book-check',
          title: 'Completed Todos',
        },
      ],
    };
  },
  getters: {
    navigationDrawerItems(store) {
      return store.items;
    },
  },
};
