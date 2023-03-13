import { configureStore } from '@reduxjs/toolkit';
import buys from "../modules/buysSlice"
const store = configureStore({
  reducer: {
    buys: buys
  }
})

export default store