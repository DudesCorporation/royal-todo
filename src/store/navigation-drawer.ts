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
          link: '/mytodos',
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
