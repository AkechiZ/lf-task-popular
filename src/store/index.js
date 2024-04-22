import { configureStore } from '@reduxjs/toolkit';
import AllRankReducer from './modules/home';

const store = configureStore({
  reducer: {
    rank: AllRankReducer,
  },
});

export default store;
