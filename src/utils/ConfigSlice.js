import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    chnageLanguse: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { chnageLanguse } = ConfigSlice.actions;

export default ConfigSlice.reducer;
