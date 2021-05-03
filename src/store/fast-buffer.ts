export default {
  state() {
    return {
      items: [
        { title: 'Title', createdDate: new Date(Date.now()) },
        { title: 'Hello world', createdDate: new Date(Date.now() - 10_000) },
        { title: 'Super important ad', createdDate: new Date(Date.now() - 400_000) },
        { title: 'mario game', createdDate: new Date(Date.now() - 800_000) },
        { title: 'another big info block for demonstration and watch this awesome content', createdDate: new Date(Date.now() - 1_000_000) },
        { title: 'really interesting info', createdDate: new Date(Date.now() - 1_200_000) },
        { title: 'data from store', createdDate: new Date(Date.now() - 8_940_000) },
        { title: 'Title', createdDate: new Date(Date.now()) },
        { title: 'Hello world', createdDate: new Date(Date.now() - 10_000) },
        { title: 'Super important ad', createdDate: new Date(Date.now() - 400_000) },
        { title: 'mario game', createdDate: new Date(Date.now() - 800_000) },
        { title: 'another big info block for demonstration and watch this awesome content', createdDate: new Date(Date.now() - 1_000_000) },
        { title: 'really interesting info', createdDate: new Date(Date.now() - 1_200_000) },
        { title: 'data from store', createdDate: new Date(Date.now() - 8_940_000) },
        { title: 'Title', createdDate: new Date(Date.now()) },
        { title: 'Hello world', createdDate: new Date(Date.now() - 10_000) },
        { title: 'Super important ad', createdDate: new Date(Date.now() - 400_000) },
        { title: 'mario game', createdDate: new Date(Date.now() - 800_000) },
        { title: 'another big info block for demonstration and watch this awesome content', createdDate: new Date(Date.now() - 1_000_000) },
        { title: 'really interesting info', createdDate: new Date(Date.now() - 1_200_000) },
        { title: 'data from store', createdDate: new Date(Date.now() - 8_940_000) },
      ],
    };
  },
  getters: {
    fastBufferItems(state) {
      return state.items;
    },
  },
};
