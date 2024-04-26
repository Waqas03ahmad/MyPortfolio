import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  content: null,
};

const toggling = createSlice({
  name: "counter",
  initialState,
  reducers: {
    viewOpen: (state) => {
      state.open = true;
    },
    viewClose: (state) => {
      state.open = false;
    },
    modalContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { viewOpen, viewClose, modalContent } = toggling.actions;

export default toggling.reducer;
