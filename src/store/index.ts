import { createStore } from 'vuex';
import navigationDrawer from '@/store/navigation-drawer';
import fastBuffer from '@/store/fast-buffer';

export default createStore({
  modules: {
    navigationDrawer,
    fastBuffer,
  },
});
