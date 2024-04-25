import { configureStore } from "@reduxjs/toolkit";
import toggling from "./toggling";
const store = configureStore({
  reducer: {
    counter: toggling,
  },
});

export default store;
