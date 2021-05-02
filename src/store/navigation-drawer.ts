export default {
  state() {
    return {
      items: [
        {
          link: '/',
          icon: 'home',
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
          title: 'Todo list',
        },
        {
          link: '/completed',
          icon: 'clipboard-check',
          title: 'Completed',
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
