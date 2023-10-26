import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMoviesResult: null,
    movieName: null,
    // movieResult: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResult: (state, action) => {
      // const { moviName, gptresult } =
      state.gptMoviesResult = action.payload;
    },
    addMovieName: (state, action) => {
      state.movieName = action.payload;
    },
  },
});

export const { toggleGptSearch, addGptMoviesResult, addMovieName } =
  GptSlice.actions;
export default GptSlice.reducer;
