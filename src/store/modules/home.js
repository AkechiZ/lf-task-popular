import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const AllRankSlice = createSlice({
  name: 'rank',
  initialState: {
    githubRank: [],
    javascriptRank: [],
    rubyRank: [],
    javaRank: [],
    cssRank: [],
    pythonRank: [],
  },
  reducers: {
    getGithubRankAction(state, { payload }) {
      if (state.githubRank.length === 0) {
        state.githubRank = payload;
      } else {
        state.githubRank.items.push(...payload.items);
      }
    },
    jsRankAction(state, { payload }) {
      if (state.javascriptRank.length === 0) {
        state.javascriptRank = payload;
      } else {
        state.javascriptRank.items.push(...payload.items);
      }
    },
    rubyRankAction(state, { payload }) {
      if (state.rubyRank.length === 0) {
        state.rubyRank = payload;
      } else {
        state.rubyRank.items.push(...payload.items);
      }
    },
    javaRankAction(state, { payload }) {
      if (state.javaRank.length === 0) {
        state.javaRank = payload;
      } else {
        state.javaRank.items.push(...payload.items);
      }
    },
    cssRankAction(state, { payload }) {
      if (state.cssRank.length === 0) {
        state.cssRank = payload;
      } else {
        state.cssRank.items.push(...payload.items);
      }
    },
    pythonRankAction(state, { payload }) {
      if (state.pythonRank.length === 0) {
        state.pythonRank = payload;
      } else {
        state.pythonRank.items.push(...payload.items);
      }
    },
  },
});

export const {
  getGithubRankAction,
  jsRankAction,
  rubyRankAction,
  javaRankAction,
  cssRankAction,
  pythonRankAction,
} = AllRankSlice.actions;

export default AllRankSlice.reducer;
