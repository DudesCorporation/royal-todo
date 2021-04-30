export default {
  state() {
    return {
      items: [
        { title: 'Title' },
      ],
    };
  },
  getters: {
    fastBufferItems(state) {
      return state.items;
    },
  },
};
